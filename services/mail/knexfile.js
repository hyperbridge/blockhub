
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            port: process.env.DATABASE_PORT,
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            port: process.env.DATABASE_PORT,
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            port: process.env.DATABASE_PORT,
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './migrations',
            tableName: 'knex_migrations'
        }
    }
}
