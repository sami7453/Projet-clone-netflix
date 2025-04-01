const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/actors", require("./routes/actorRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/episodes", require("./routes/episodeRoutes"));
app.use("/favorite", require("./routes/favoriteRoutes"));
app.use("/histories", require("./routes/historyRoutes"));
app.use("/movies", require("./routes/movieRoutes"));
app.use("/ratings", require("./routes/ratingRoutes"));
// app.use("/seasons", require("./routes/seasonRoutes"));
app.use("/series", require("./routes/seriesRoutes"));
app.use("/support-tickets", require("./routes/supportTicketRoutes"));
// app.use("/trends", require("./routes/trendRoutes"));
app.use("/users", require("./routes/userRoutes"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
