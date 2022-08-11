const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { NotFoundError, BadRequestError } = require("./utils/errors");
const security = require("./middleware/security");
const authRoutes = require("./routes/auth");
const flashcardRoutes = require("./routes/flashcard");
// const jwt = require("jsonwebtoken");
const app = express();

// middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(security.extractUserFromJwt);

// routes
app.use("/auth", authRoutes);

app.use("/flashcard", flashcardRoutes);

app.get("/", function (req, res) {
    return res.status(200).json({ ping: "pong" });
});

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    return next(new NotFoundError("Route Not Found"));
});

/* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;
