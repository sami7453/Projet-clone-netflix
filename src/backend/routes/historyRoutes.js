const express = require("express");
const router = express.Router();
const History = require("../models/history");

// ----------------- CRUD -----------------

// GET all history
router.get("/", async (req, res) => {
    try {
        const history = await History.getAllHistory();
        res.status(200).json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET history by id
router.get("/:id", async (req, res) => {
    try {
        const history = await History.getHistoryById(req.params.id);
        history
            ? res.status(200).json(history)
            : res.status(404).json({ message: "History not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST history
router.post("/:user_id/:movie_id", async (req, res) => {
    try {
        const { user_id, movie_id } = req.params;
        const history = await History.createHistory(user_id, movie_id);
        res.status(201).json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE history by id
router.delete("/:id", async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
