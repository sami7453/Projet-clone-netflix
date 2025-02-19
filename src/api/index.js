const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/movies', require('./routes/movieRoutes'));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
