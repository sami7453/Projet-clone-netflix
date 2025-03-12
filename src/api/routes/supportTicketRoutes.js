const SupportTicket = require('../models/supportTicket');

app.get('/support-tickets', async (req, res) => {
    try {
        const actors = await SupportTicket.getAllSupportTickets();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/support-tickets/:id', async (req, res) => {
    try {
        const actor = await SupportTicket.getSupportTicketById(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/support-tickets', async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const actor = await SupportTicket.createSupportTicket({ firstName, lastName, movieId, seriesId });
        res.status(201).json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/support-ticket/:id', async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const actor = await SupportTicket.updateSupportTicket(req.params.id, { firstName, lastName, movieId, seriesId });
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/support-ticket/:id', async (req, res) => {
    try {
        const actor = await SupportTicket.deleteSupportTicket(req.params.id);
        actor ? res.status(200).json(actor) : res.status(404).json({ message: 'Actor not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
