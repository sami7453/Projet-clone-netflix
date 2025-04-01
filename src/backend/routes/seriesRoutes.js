const express = require("express");
const router = express.Router();
const Series = require("../models/series");

// ----------------- CRUD -----------------

// GET all series
router.get("/", async (req, res) => {
    try {
        const series = await Series.getAllSeries();
        res.status(200).json(series);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET series by id
router.get("/:id", async (req, res) => {
    try {
        const serie = await Series.getSerieById(req.params.id);
        serie
            ? res.status(200).json(serie)
            : res.status(404).json({ message: "Serie not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST serie
router.post("/", async (req, res) => {
    try {
        const { name, description, releaseDate, endDate, seasons, episodes, categories } = req.body;
        if (!name || !description || !releaseDate || !endDate || !seasons || !episodes || !categories) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const serie = await Series.createSerie({ name, description, releaseDate, endDate, seasons, episodes, categories });
        res.status(201).json(serie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT serie
router.put("/:id", async (req, res) => {
    try {
        const { name, description, releaseDate, endDate, seasons, episodes, categories } = req.body;
        if (!name || !description || !releaseDate || !endDate || !seasons || !episodes || !categories) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const serie = await Series.updateSerie(req.params.id, { name, description, releaseDate, endDate, seasons, episodes, categories });
        serie
            ? res.status(200).json(serie)
            : res.status(404).json({ message: "Serie not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE serie
router.delete("/:id", async (req, res) => {
    try {
        const serie = await Series.deleteSerie(req.params.id);
        serie
            ? res.status(200).json(serie)
            : res.status(404).json({ message: "Serie not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
