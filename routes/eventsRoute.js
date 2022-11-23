const express = require("express");
const router = express.Router();

const eventsController = require("../controllers/eventsController");

router
    .route("/")
    .get(eventsController.getEvents)

router
    .route("/:id")
    .get(eventsController.getEventsId)

module.exports = router;
