const express = require("express");
const Flashcard = require("../models/flashcard.js");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const router = express.Router();

router.get("/ping", (req, res, next) => {
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});

router.get("/", (req, res, next) => {
    //get a public sets
    async (req, res, next) => {
        //create your own set
        try {
            const set = await Flashcard.fetchPublicSetById(
                req.body
            );
            return res.status(201).json({ set });
        } catch (err) {
            next(err);
        }
    }
});

router.post(
    "/mysets",
    security.requireAuthenticatedUser,
    async (req, res, next) => {
        //create your own set
        try {
            const set = await Flashcard.createSets(
                res.locals.user.email,
                req.body
            );
            return res.status(201).json({ set });
        } catch (err) {
            next(err);
        }
    }
);

router.get(
    "/mysets",
    security.requireAuthenticatedUser,
    async (req, res, next) => {
        //get all mysets
        try {
            const mySets = await Flashcard.listSetsForUser(
                res.locals.user.email
            );
            return res.status(200).json({ mySets });
        } catch (err) {
            next(err);
        }
    }
);

router.put(
    "/mysets",
    security.requireAuthenticatedUser,
    async (req, res, next) => {
        //update your own sets
        try {
            const mySet = await Flashcard.updateSets(
                res.locals.user.email,
                req.body
            );
            return res.status(201).json({ mySet });
        } catch (err) {
            next(err);
        }
    }
);

router.delete("/", security.requireAuthenticatedUser, (req, res, next) => {
    //delete your own sets
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
