const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// ----------------- EXTRA -----------------

router.get("/trending", async (req, res) => {
    try {
        const movies = await Movie.getTrendingMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/recommended", async (req, res) => {
    try {
        const movies = await Movie.getRecommendMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.getMovieById(req.params.id);
        movie
            ? res.status(200).json(movie)
            : res.status(404).json({ message: "Movie not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title, description, release_date, category, poster, category_id } = req.body;
        if (!title || !description || !release_date || !category || !poster || !category_id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const movie = await Movie.createMovie(title, description, release_date, category, poster, category_id);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { title, description, release_date, category, poster, category_id } = req.body;
        if (!title || !description || !release_date || !category || !poster || !category_id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const movie = await Movie.updateMovie(req.params.id, title, description, release_date, category, poster, category_id);
        movie
            ? res.status(200).json(movie)
            : res.status(404).json({ message: "Movie not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const movie = await Movie.deleteMovie(req.params.id);
        movie
            ? res.status(200).json(movie)
            : res.status(404).json({ message: "Movie not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
