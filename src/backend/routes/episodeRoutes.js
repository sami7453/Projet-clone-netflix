const express = require("express");
const router = express.Router();
const Episode = require("../models/episode");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const episodes = await Episode.getAllEpisodes();
        res.status(200).json(episodes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const episode = await Episode.getEpisodeById(req.params.id);
        episode
            ? res.status(200).json(episode)
            : res.status(404).json({ message: "Episode not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { season_id, title, description, duration, video_url } = req.body;
        if (!season_id || !title || !description || !duration || !video_url) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const episode = await Episode.createEpisode(season_id, title, description, duration, video_url);
        res.status(201).json(episode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { season_id, title, description, duration, video_url } = req.body;
        if (!season_id || !title || !description || !duration || !video_url) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const episode = await Episode.updateEpisode(req.params.id, season_id, title, description, duration, video_url);
        episode
            ? res.status(200).json(episode)
            : res.status(404).json({ message: "Episode not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const episode = await Episode.deleteEpisode(req.params.id);
        episode
            ? res.status(200).json(episode)
            : res.status(404).json({ message: "Episode not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
