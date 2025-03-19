const Actor = require('../models/actor');

// ----------------- CRUD -----------------

// GET all actors
app.get('/actors', async (req, res) => {
    try {
        const actors = await Actor.getAllActors();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET actor by id
app.get('/actors/:id', async (req, res) => {
    try {
        const actor = await Actor.getActorById(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST actor 
app.post('/actors', async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const actor = await Actor.createActor({ firstName, lastName, movieId, seriesId });
        res.status(201).json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT actor
app.put('/actors/:id', async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const actor = await Actor.updateActor(req.params.id, { firstName, lastName, movieId, seriesId });
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE actor
app.delete('/actors/:id', async (req, res) => {
    try {
        const actor = await Actor.deleteActor(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

// GET actors by movie id
app.get('/actors/movies/:movie_id', async (req, res) => {
    try {
        const actors = await Actor.getActorsByMovieId(req.params.movie_id);
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET actors by series id
app.get('/actors/series/:series_id', async (req, res) => {
    try {
        const actors = await Actor.getActorsBySeriesId(req.params.series_id);
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
