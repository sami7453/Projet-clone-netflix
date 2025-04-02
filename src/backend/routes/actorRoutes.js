const express = require("express");
const router = express.Router();
const Actor = require("../models/actor");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const actors = await Actor.getAllActors();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const actor = await Actor.getActorById(req.params.id);
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const actor = await Actor.createActor({ firstName, lastName, movieId, seriesId });
        res.status(201).json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const actor = await Actor.updateActor(req.params.id, { firstName, lastName, movieId, seriesId });
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const actor = await Actor.deleteActor(req.params.id);
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/movies/:id", async (req, res) => {
    try {
        const actors = await Actor.getActorsByMovieId(req.params.id);
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/series/:id", async (req, res) => {
    try {
        const actors = await Actor.getActorsBySeriesId(req.params.id);
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
