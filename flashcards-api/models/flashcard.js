const db = require("../db");
const bcrypt = require("bcrypt");
const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { json } = require("express");

class Flashcard {
    static async makePublicFlashcard(flashcard) {
        return {
            id: flashcard.id,
            title: flashcard.title,
            owner: flashcard.user_id,
            isPublic: flashcard.is_public,
            description: flashcard.description,
            createdAt: flashcard.created_at,
            flashcards: JSON.parse(flashcard.flashcards),
        };
    }

    static validateFlashcards(flashcards) {
        if (!Array.isArray(flashcards)) {
            throw new BadRequestError(
                `flashcards should be an array of objects`
            );
        }
        flashcards.forEach((e, idx) => {
            e.id = idx;
            if (typeof e !== "object" || Array.isArray(e) || e === null) {
                throw new BadRequestError(
                    `flashcards should be an array of objects`
                );
            }
            const requiredFiled = ["term", "definition"];
            requiredFiled.forEach((field) => {
                if (!e.hasOwnProperty(field)) {
                    throw new BadRequestError(
                        `Missing ${field} in request body`
                    );
                }
            });
        });
        return JSON.stringify(flashcards);
    }

    static async createFlashcard(email, data) {
        const requiredFiled = ["flashcards", "title"];
        requiredFiled.forEach((field) => {
            if (!data.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        });

        //validate flashcards
        const flashcards = Flashcard.validateFlashcards(data.flashcards);

        const result = await db.query(
            `
        INSERT INTO FlashcardSets (
            title,
            description,
            is_public,
            flashcards,
            user_id
        )
        VALUES ($1, $2, $3, $4, (select id from users where email = $5))
        RETURNING 
        id,
        title,
        description,
        is_public AS "isPublic",
        flashcards,
        user_id AS "userId",
        created_at AS "createdAt"
        `,
            [
                data.title,
                data.description,
                data.isPublic || false,
                flashcards,
                email,
            ]
        );
        return Flashcard.makePublicFlashcard(result.rows[0]);
    }

    static async fetchNutritionById(nutritionId) {
        const result = await db.query(
            `SELECT n.id
            FROM nutrition as n
                JOIN users AS u ON u.id = b.user_id
            WHERE id = $1`,
            [nutritionId]
        );
        if (result.rows.length == 0) {
            throw new NotFoundError();
        }
        return result.rows;
    }

    static async listNutritionForUser(email) {
        const result = await db.query(
            `SELECT nutrition.id, nutrition.name, nutrition.category, nutrition.calories, nutrition.quantity, nutrition.image_url AS "imageUrl", nutrition.user_id  AS "userId", nutrition.created_at AS "createdAt" FROM nutrition WHERE user_id = (select id from users where email = $1)`,
            [email]
        );
        return result.rows;
    }
}

module.exports = Flashcard;
