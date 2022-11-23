const knex = require("knex")(require("../knexfile"));

const getComments = (_req, res) => {
    knex("comments")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Comments ${err}!`);
        });
};

const getCommentsId = (req, res) => {
    knex("comments")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Comment ${req.params.id}, ${err}`);
        });
};

module.exports = {
    getComments,
    getCommentsId,
};
