import express from 'express'
import SwaggerParser from 'swagger-parser'
import swaggerRoutes from 'swagger-routes-express'
import api from './api'

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