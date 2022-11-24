const express = require("express");
const router = express.Router();

const friendsController = require("../controllers/friendsController");

router
    .route("/")
    .get(friendsController.getFriends)

module.exports = router;
