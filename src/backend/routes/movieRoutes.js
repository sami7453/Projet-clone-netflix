const express = require('express');
const Movie = require('../models/movie');
require('dotenv').config();

const app = express();
app.use(express.json());

// GET all movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.getAllMovie();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET movie by id
app.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.getMovieById(req.params.id);
        movie ? res.status(200).json(movie) : res.status(404).json({ message: 'Movie not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST movie
app.post('/movies', async (req, res) => {
    try {
        const { title, description, release_date, category, poster, category_id } = req.body;
        if (!title || !description || !release_date || !category || !poster || !category_id) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const movie = await Movie.createMovie(title, description, release_date, category, poster, category_id);
        res.status(201).json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const { title, description, release_date, category, poster, category_id } = req.body;
        if (!title || !description || !release_date || !category || !poster || !category_id) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const movie = await Movie.updateMovie(req.params.id, title, description, release_date, category, poster, category_id);
        movie ? res.status(200).json(movie) : res.status(404).json({ message: 'Movie not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.deleteMovie(req.params.id);
        movie ? res.status(200).json(movie) : res.status(404).json({ message: 'Movie not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/movies/category/:category_id', async (req, res) => {
    try {
        const movies = await Movie.getMovieByCategory(req.params.category_id);
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/popular-movies', async (req, res) => {
    try {
        const movies = await Movie.getMovieByPopularity();
        console.log(movies);
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/new-movies', async (req, res) => {
    try {
        const movies = await Movie.getThisMountMovie();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/recommended-movies/:user_id', async (req, res) => {
    try {
        const movies = await Movie.getRecommendedMoviesForUser(req.params.user_id);
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
