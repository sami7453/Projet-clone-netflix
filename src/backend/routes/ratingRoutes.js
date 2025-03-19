const Rating = require('../models/rating');

// ----------------- CRUD -----------------

// GET all ratings
app.get('/ratings', async (req, res) => {
    try {
        const ratings = await Rating.getAllRatings();
        res.status(200).json(ratings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET rating by id
app.get('/ratings/:id', async (req, res) => {
    try {
        const rating = await Rating.getRatingById(req.params.id);
        rating ? res.status(200).json(rating) : res.status(404).json({ message: 'Rating not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST rating
app.post('/ratings', async (req, res) => {
    try {
        const { user_id, movie_id, rating } = req.body;
        if (!user_id || !movie_id || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newRating = await Rating.createRating(user_id, movie_id, rating);
        res.status(201).json(newRating);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT rating
app.put('/ratings/:id', async (req, res) => {
    try {
        const { user_id, movie_id, rating } = req.body;
        if (!user_id || !movie_id || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const updatedRating = await Rating.updateRating(req.params.id, user_id, movie_id, rating);
        updatedRating ? res.status(200).json(updatedRating) : res.status(404).json({ message: 'Rating not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE rating
app.delete('/ratings/:id', async (req, res) => {
    try {
        const rating = await Rating.deleteRating(req.params.id);
        rating ? res.status(200).json(rating) : res.status(404).json({ message: 'Rating not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

app.get('/ratings/:user_id', async (req, res) => {

});

app.get('/ratings/:movie_id', async (req, res) => {

});

app.get('/ratings/:user_id/:movie_id', async (req, res) => {

});

app.put('/ratings/:user_id/:movie_id', async (req, res) => {

});

app.delete('/ratings/:user_id/:movie_id', async (req, res) => {

});
