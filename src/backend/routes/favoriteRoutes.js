const Favorite = require('../models/favorite');

// ----------------- CRUD -----------------

// GET all favorites
app.get('/favorites', async (req, res) => {
    try {
        const favorites = await Favorite.getAllFavorites();
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET favorite by id
app.get('/favorites/:id', async (req, res) => {
    try {
        const favorite = await Favorite.getFavoriteById(req.params.id);
        favorite ? res.status(200).json(favorite) : res.status(404).json({ message: 'Favorite not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST favorite
app.post('/favorites/:user_id/:movie_id', async (req, res) => {
    try {
        const { user_id, movie_id } = req.params;
        const favorite = await Favorite.createFavorite(user_id, movie_id);
        res.status(201).json(favorite);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT favorite
app.put('/favorites/:id', async (req, res) => {
    try {
        const { user_id, movie_id } = req.body;
        if (!user_id || !movie_id) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const favorite = await Favorite.updateFavorite(req.params.id, user_id, movie_id);
        favorite ? res.status(200).json(favorite) : res.status(404).json({ message: 'Favorite not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE favorite by id
app.delete('/favorites/:id', async (req, res) => {
    try {
        const favorite = await Favorite.deleteFavorite(req.params.id);
        favorite ? res.status(200).json(favorite) : res.status(404).json({ message: 'Favorite not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
