const Actor = require('../models/actor');

app.get('/actors', async (req, res) => {
    try {
        const actors = await Actor.getAllActors();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/actors/:id', async (req, res) => {
    try {
        const actor = await Actor.getActorById(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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

app.delete('/actors/:id', async (req, res) => {
    try {
        const actor = await Actor.deleteActor(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
