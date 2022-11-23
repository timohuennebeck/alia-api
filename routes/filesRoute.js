const express = require("express");
const router = express.Router();

const filesController = require("../controllers/filesController");

router
    .route("/")
    .get(filesController.getFiles)

router
    .route("/:id")
    .get(filesController.getFilesId)

module.exports = router;
