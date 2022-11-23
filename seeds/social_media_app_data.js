const commentsData = require("../seed_data/comments");
const eventsData = require("../seed_data/events");
const filesData = require("../seed_data/files");
const hubsData = require("../seed_data/hubs");
const meetingsData = require("../seed_data/meetings");
const postsData = require("../seed_data/posts");
const usersData = require("../seed_data/users");

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(function () {
            return knex("users").insert(usersData);
        })
        .then(() => {
            return knex("events").del();
        })
        .then(() => {
            return knex("events").insert(eventsData);
        })
        .then(() => {
            return knex("meetings").del();
        })
        .then(() => {
            return knex("meetings").insert(meetingsData);
        })
        .then(() => {
            return knex("files").del();
        })
        .then(() => {
            return knex("files").insert(filesData);
        })
        .then(() => {
            return knex("hubs").del();
        })
        .then(() => {
            return knex("hubs").insert(hubsData);
        })
        .then(() => {
            return knex("posts").del();
        })
        .then(() => {
            return knex("posts").insert(postsData);
        })
        .then(() => {
            return knex("comments").del();
        })
        .then(() => {
            return knex("comments").insert(commentsData);
        });
};
