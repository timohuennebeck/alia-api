const express = require("express");
const router = express.Router();

const hubsController = require("../controllers/hubsController");

router
    .route("/")
    .get(hubsController.getHubs)


router
    .route("/:id")
    .get(hubsController.getHubsId)

module.exports = router;