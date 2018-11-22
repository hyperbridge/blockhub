import express = require('express')
import morgan = require('morgan')
import bodyParser = require('body-parser')
import SwaggerParser = require('swagger-parser')
import swaggerRoutes = require('swagger-routes-express')
import api from './api'
import { Model } from 'objection'
import config from './config'

const knexfile = require('../knexfile')
console.log(knexfile)
Model.knex(require('knex')(knexfile))

export default async () => {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    })

    const apiDescription = await parser.validate('api.yml')
    const connect = swaggerRoutes(api, apiDescription)

    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.use(morgan('tiny'))


    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app)

    // add any error handlers last
    return app
}