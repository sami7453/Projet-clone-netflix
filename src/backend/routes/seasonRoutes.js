const express = require("express");
const router = express.Router();
const Season = require("../models/season");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const seasons = await Season.getAllSeasons();
        res.status(200).json(seasons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const season = await Season.getSeasonsById(req.params.id);
        season
            ? res.status(200).json(season)
            : res.status(404).json({ message: "Season not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { seriesId, number, description, episodeCount } = req.body;
        if (!number || !description || !episodeCount) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const season = await Season.createSeason({ seriesId, number, description, episodeCount });
        res.status(201).json(season);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { seriesId, number, description, episodeCount } = req.body;
        if (!number || !description || !episodeCount) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const season = await Season.updateSeason(req.params.id, { seriesId, number, description, episodeCount });
        season 
            ? res.status(200).json(season)
            : res.status(404).json({ message: "Season not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const season = await Season.deleteSeason(req.params.id);
        season
            ? res.status(200).json(season)
            : res.status(404).json({ message: "Season not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
