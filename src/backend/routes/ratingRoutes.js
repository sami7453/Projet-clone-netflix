const express = require("express");
const router = express.Router();
const Rating = require("../models/rating");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const ratings = await Rating.getAllRatings();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const rating = await Rating.getRatingById(req.params.id);
        rating
            ? res.status(200).json(rating)
            : res.status(404).json({ message: "Rating not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { user_id, movie_id, rating } = req.body;
        if (!user_id || !movie_id || !rating) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newRating = await Rating.createRating(user_id, movie_id, rating);
        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { user_id, movie_id, rating } = req.body;
        if (!user_id || !movie_id || !rating) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedRating = await Rating.updateRating(req.params.id, user_id, movie_id, rating);
        updatedRating
            ? res.status(200).json(updatedRating)
            : res.status(404).json({ message: "Rating not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const rating = await Rating.deleteRating(req.params.id);
        rating
            ? res.status(200).json(rating)
            : res.status(404).json({ message: "Rating not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/users/:id", async (req, res) => {
    try {
        const ratings = await Rating.getRatingsByUserId(req.params.id);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/movies/:id", async (req, res) => {
    try {
        const ratings = await Rating.getRatingsByMovieId(req.params.id);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/series/:id", async (req, res) => {
    try {
        const ratings = await Rating.getRatingsBySeriesId(req.params.id);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
