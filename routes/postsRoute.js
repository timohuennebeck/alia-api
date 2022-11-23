const express = require("express");
const router = express.Router();

const postsController = require("../controllers/postsController");

router
    .route("/")
    .get(postsController.getPosts)


router
    .route("/:id")
    .get(postsController.getPostsId)

module.exports = router;