const knex = require("knex")(require("../knexfile"));

const getEvents = (_req, res) => {
    knex("events")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Events ${err}!`);
        });
};

const getEventsId = (req, res) => {
    knex("events")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Event ${req.params.id}, ${err}`);
        });
};

module.exports = {
    getEvents,
    getEventsId,
};
