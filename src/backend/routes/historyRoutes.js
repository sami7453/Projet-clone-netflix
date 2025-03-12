const History = require('../models/history');

app.get('/history/:user_id', async (req, res) => {
    try {
        const history = await History.getHistoryByUserId(req.params.user_id);
        res.status(200).json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/history/:user_id/:movie_id', async (req, res) => {
    
});

app.delete('/history/clear', async (req, res) => {

});

app.delete('/history/:id', async (req, res) => {

});
