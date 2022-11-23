const knex = require("knex")(require("../knexfile"));

const getMeetings = (_req, res) => {
    knex("meetings")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Meetings ${err}!`);
        });
};

const getMeetingsId = (req, res) => {
    knex("meetings")
    .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Meeting ${req.params.id}, ${err}!`);
        });
};

module.exports = {
    getMeetings,
    getMeetingsId
};
