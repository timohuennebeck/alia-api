const knex = require("knex")(require("../knexfile"));

const getFriends = (_req, res) => {
    knex("friends")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Friends ${err}!`);
        });
};

module.exports = {
    getFriends
};
