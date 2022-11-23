const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

// routes

const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes)

const postsRoutes = require("./routes/postsRoute");
app.use("/posts", postsRoutes)

const hubsRoutes = require("./routes/hubsRoutes");
app.use("/hubs", hubsRoutes)


app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});