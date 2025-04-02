const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/actors", require("./routes/actorRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/episodes", require("./routes/episodeRoutes"));
app.use("/bookmarks", require("./routes/bookmarkRoutes"));
app.use("/histories", require("./routes/historyRoutes"));
app.use("/movies", require("./routes/movieRoutes"));
app.use("/ratings", require("./routes/ratingRoutes"));
app.use("/seasons", require("./routes/seasonRoutes"));
app.use("/series", require("./routes/seriesRoutes"));
app.use("/support-tickets", require("./routes/supportTicketRoutes"));
app.use("/users", require("./routes/userRoutes"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
