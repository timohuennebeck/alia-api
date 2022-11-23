const express = require("express");
const router = express.Router();

const meetingsController = require("../controllers/meetingsController");

router
    .route("/")
    .get(meetingsController.getMeetings)

router
    .route("/:id")
    .get(meetingsController.getMeetingsId)

module.exports = router;