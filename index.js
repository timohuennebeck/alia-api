const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

// routes


app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});