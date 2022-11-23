const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Welcome to the API!");
});

// routes

const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes)

const postsRoutes = require("./routes/postsRoute");
app.use("/posts", postsRoutes)

const hubsRoutes = require("./routes/hubsRoutes");
app.use("/hubs", hubsRoutes)

const filesRoutes = require("./routes/filesRoute")
app.use("/files", filesRoutes)

const meetingsRoutes = require("./routes/meetingsRoute")
app.use("/meetings", meetingsRoutes)

const eventsRoutes = require("./routes/eventsRoute")
app.use("/events", eventsRoutes)

const commentsRoutes = require("./routes/commentsRoute")
app.use("/comments", commentsRoutes)

app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});