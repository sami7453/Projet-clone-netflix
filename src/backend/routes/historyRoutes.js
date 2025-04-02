const express = require("express");
const router = express.Router();
const History = require("../models/history");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const history = await History.getAllHistories();
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const history = await History.getHistoryById(req.params.id);
        history
            ? res.status(200).json(history)
            : res.status(404).json({ message: "History not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/:user_id/:movie_id", async (req, res) => {
    try {
        const { user_id, movie_id } = req.params;
        const history = await History.createHistory(user_id, movie_id);
        res.status(201).json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/users/:id", async (req, res) => {
    try {
        const history = await History.getHistoryByUserId(req.params.id);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
