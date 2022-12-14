exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("username").notNullable();
            table.string("email").notNullable();
            table.string("image_url");
            table.text("description");
            table.string("time_zone");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("friends", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("events", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("name");
            table.string("time_at");
            table.string("location_url");
            table.string("status").defaultTo("Favorite");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("meetings", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("name");
            table.string("time_at");
            table.string("location_url");
            table.string("status").defaultTo("Favorite");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("files", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("name");
            table.string("link_url");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("hubs", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("name");
            table.string("image_url");
            table.string("status").defaultTo("Favorite");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("posts", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("hubs_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("hubs")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.text("message");
            table.string("status").defaultTo("Favorite");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .createTable("comments", (table) => {
            table.increments("id").primary();
            table
                .integer("users_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .integer("posts_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("posts")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.text("message");
            table.string("status").defaultTo("Favorite");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("friends")
        .dropTable("events")
        .dropTable("meetings")
        .dropTable("files")
        .dropTable("comments")
        .dropTable("posts")
        .dropTable("hubs")
        .dropTable("users");
};
