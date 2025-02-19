const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());


// app.use('/actors', require('./routes/actorRoutes'));
// app.use('/categories', require('./routes/categorieRoutes'));
// app.use('/favorite', require('./routes/favoriteRoutes'));
// app.use('/history', require('./routes/historyRoutes'));
app.use('/movies', require('./routes/movieRoutes'));
// app.use('/ratings', require('./routes/ratingRoutes'));
// app.use('/seasons', require('./routes/seasonRoutes'));
// app.use('/series', require('./routes/serieRoutes'));
// app.use('/support', require('./routes/supportTicketRoutes'));
// app.use('/users', require('./routes/userRoutes'));


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
