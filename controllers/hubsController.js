const knex = require("knex")(require("../knexfile"));

const getHubs = (_req, res) => {
    knex("hubs")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Hubs ${err}!`);
        });
};

const getHubsId = (req, res) => {
    knex("hubs")
    .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Hubs ${req.params.id}, ${err}!`);
        });
};

module.exports = {
    getHubs,
    getHubsId
};
