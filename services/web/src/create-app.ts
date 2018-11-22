import express = require('express')
import morgan = require('morgan')
import bodyParser = require('body-parser')
import helmet = require('helmet')
import Knex = require('knex')
import SwaggerParser = require('swagger-parser')
import swaggerRoutes = require('swagger-routes-express')
import api from './api'
import { Model } from 'objection'
import config from './config'

const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const knexfile = require('../knexfile')
const knex = Knex(knexfile)

Model.knex(knex)

const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions' // optional. Defaults to 'sessions'
})

export default async () => {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    })

    const apiDescription = await parser.validate('api.yml')
    const connect = swaggerRoutes(api, apiDescription)

    const app = express()

    app.use(helmet())

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.use(morgan('tiny'))

    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 10000 // ten seconds, for testing
        },
        store: store
    }))

    // var count = 0

    // app.use('/test', function(req, res, next) {
    //     var n = req.session.views || 0
    //     req.session.views = ++n
    //     res.end(n + ' views')
    // })

    app.use('/schema', async function(req, res, next) {
        const result = {}
        const tables = await knex('pg_catalog.pg_tables')
            .select('tablename')
            .where({ schemaname: 'public' })

        for (let i in tables) {
            const tableInfo = await knex.table(tables[i].tablename).columnInfo()

            result[tables[i].tablename] = tableInfo
        }
        
        res.end(JSON.stringify(result))
    })


    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app)

    // add any error handlers last
    return app
}