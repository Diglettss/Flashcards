const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");



const app = express();


app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
    res.status(200).json({ ping: "gnop" });
});

module.exports = app;
