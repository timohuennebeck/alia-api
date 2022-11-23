const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/commentsController");

router
    .route("/")
    .get(commentsController.getComments)

router
    .route("/:id")
    .get(commentsController.getCommentsId)

module.exports = router;
