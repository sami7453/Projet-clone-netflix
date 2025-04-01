const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// ----------------- CRUD -----------------

// GET all movies
router.get("/", async (req, res) => {
    try {
        const movies = await Movie.getAllMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET movie by id
router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.getMovieById(req.params.id);
        movie
            ? res.status(200).json(movie)
            : res.status(404).json({ message: "Movie not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST movie
router.post("/", async (req, res) => {
    try {
        const { title, description, release_date, category, poster, category_id } = req.body;
        if (!title || !description || !release_date || !category || !poster || !category_id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const movie = await Movie.createMovie(title, description, release_date, category, poster, category_id);
        res.status(201).json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
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
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const movie = await Movie.deleteMovie(req.params.id);
        movie
            ? res.status(200).json(movie)
            : res.status(404).json({ message: "Movie not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/category/:category_id", async (req, res) => {
    try {
        const movies = await Movie.getMovieByCategory(req.params.category_id);
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/popular-movies", async (req, res) => {
    try {
        const movies = await Movie.getMovieByPopularity();
        console.log(movies);
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/new-movies", async (req, res) => {
    try {
        const movies = await Movie.getThisMountMovie();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/recommended-movies/:user_id", async (req, res) => {
    try {
        const movies = await Movie.getRecommendedMoviesForUser(
            req.params.user_id
        );
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
