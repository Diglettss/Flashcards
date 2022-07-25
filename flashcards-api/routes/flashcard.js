const express = require("express");
const Flashcard = require("../models/flashcard.js")
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
    //get public sets
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});

router.post("/mysets", security.requireAuthenticatedUser, async (req, res, next) => {
    //create your own set
    try {
        const flashcard = await Flashcard.createFlashcard(
            res.locals.user.email,
            req.body
        );
        res.json({ flashcard });
    } catch (err) {
        next(err);
    }

});

router.get("/mysets", security.requireAuthenticatedUser, (req, res, next) => {
    //gell mysets
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});

router.put("/", security.requireAuthenticatedUser, (req, res, next) => {
    //update your own sets
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});

router.delete("/", security.requireAuthenticatedUser, (req, res, next) => {
    //delete your own sets
    try {
        return res.status(200).json({ ping: "pong" });
    } catch (err) {
        next(err);
    }
});





module.exports = router;
