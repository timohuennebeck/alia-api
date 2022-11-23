const knex = require("knex")(require("../knexfile"));

const getFiles = (_req, res) => {
    knex("files")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Files ${err}!`);
        });
};

const getFilesId = (req, res) => {
    knex("files")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving File ${req.params.id}, ${err}`);
        });
};

module.exports = {
    getFiles,
    getFilesId
}
