const knex = require("knex")(require("../knexfile"));

const getPosts = (_req, res) => {
    knex("posts")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Posts ${err}!`);
        });
};

const getPostsId = (req, res) => {
    knex("posts")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Post ${req.params.id}, ${err}!`);
        });
};

const updatePostsId = (req, res) => {
    knex("posts")
        .where({ id: req.params.id })
        .update({ ...body })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).send(`Error updating Post ${req.params.id}, ${err}!`);
        });
};

module.exports = {
    getPosts,
    getPostsId,
    updatePostsId
};
