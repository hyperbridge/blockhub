import express = require('express')
import SwaggerParser = require('swagger-parser')
import swaggerRoutes = require('swagger-routes-express')
import api from './api'
import { Model } from 'objection'
import config from './config'

Model.knex(require('knex')(config.db))

export default async () => {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    })

    const apiDescription = await parser.validate('api.yml')
    const connect = swaggerRoutes(api, apiDescription)

    const app = express()

    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app)

    // add any error handlers last
    return app
}