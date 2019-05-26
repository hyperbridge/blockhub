"use strict";
require('dotenv').config();
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
        min: 0,
        max: 15
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};
