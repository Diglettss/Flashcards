const db = require("../db");
const bcrypt = require("bcrypt");
const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { json } = require("express");

class Flashcard {
    static async makeSetPublic(set) {
        return {
            id: set.id,
            owner: set.userId,
            isPublic: set.isPublic,
            createdAt: set.createdAt,
            title: set.title,
            description: set.description,
            flashcards: JSON.parse(set.flashcards),
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
                        `Missing a ${field} for at least one flashcard`
                    );
                }
            });
        });
        return JSON.stringify(flashcards);
    }

    static async createSets(email, data) {
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
        return Flashcard.makeSetPublic(result.rows[0]);
    }

    //Function for what fetchFlashcardById should look like
    static async fetchNutritionById(nutritionId) {
        const result = await db.query(
            `SELECT f.id
            FROM FlashcardSets as f
                JOIN users AS u ON u.id = f.user_id
            WHERE id = $1`,
            [flashcardId]
        );
        if (result.rows.length == 0) {
            throw new NotFoundError();
        }
        return result.rows;
    }

    static async listSetsForUser(email) {
        const result = await db.query(
            `SELECT 
                id, 
                user_id AS "userId", 
                is_public AS "isPublic", 
                created_at as "createdAt",
                title, 
                description, 
                flashcards
            FROM FlashcardSets WHERE user_id = (select id from users where email = $1)`,
            [email]
        );
        const userSets= []
        result.rows.forEach(async (e)=>{
            userSets.push(await Flashcard.makeSetPublic(e))
        })
        console.log("Flashcard model reached")
        return userSets
    }

    static async updateSets(email, set){
        // console.log({email, set})
        return {email, set};
    }
}

module.exports = Flashcard;
