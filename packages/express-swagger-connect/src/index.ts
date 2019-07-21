import * as fs from 'fs'
import * as dotenv from 'dotenv'

dotenv.config()

import * as express from 'express'
import * as helmet from 'helmet'
import * as cors from 'cors'
import * as RateLimit from 'express-rate-limit'
import * as bodyParser from 'body-parser'
import * as jetpack from 'fs-jetpack'
import * as path from 'path'
import * as morgan from 'morgan'
import * as Knex from 'knex'
import * as Objection from 'objection'
import * as SwaggerParser from 'swagger-parser'
import extractPaths, { ExtractPathType } from './utils/spec/extractPaths'
import middleware from './middleware'

// TODO: (Kevin) Remove this completely once it's decided if ElasticSearch is gonna be a thing or not. No ETA.
// const ElasticSearch = require('./utils/ElasticSearch');

const port = process.env.API_PORT || 7001
const server = express()

const knex: Knex = Knex({
    client: 'mysql',
    connection: {
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        typeCast (field: any, next: any) {
            if (field.type === 'TINY' && field.length === 1) {
                return field.string() === '1'
            }
            return next()
        }
    }
} as Knex.Config)

knex.on('query', query => {
    console.log(query)
})

Objection.Model.knex(knex)

// TODO: (Kevin) Remove this completely once it's decided if ElasticSearch is gonna be a thing or not. No ETA.
const db = {}

// @ts-ignore
const rateLimiter = new RateLimit({
    windowMs: 2,
    max: 5
})

const initServer = (): any => {
    // Security related
    server.set('trust proxy', 1)
    server.use(helmet())
    server.use(cors({ allowedHeaders: ['Accept', 'Authorization', 'Cache-Control', 'X-Requested-With', 'Content-Type', 'applicationId'] }))

    // Accept json and other formats in the body
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    // Apply ratelimit
    server.use(rateLimiter)

    // Logging
    server.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
}

const initRoutes = async (): Promise<any> => {
    const api = {}
    const spec = await SwaggerParser.validate('../spec/index.yml')
    const paths = extractPaths(spec)
    paths.forEach(el => console.log(`> Loading route ${el.route} - ${el.method.toUpperCase()}`))

    // Folder with our routes
    const routesFolder = path.join(__dirname, 'routes')

    const routeFiles = jetpack.find(routesFolder, { matching: '*.ts' })

    for (const routeFile of routeFiles) {
        const route = await import(path.join('..', routeFile))

        if (route.override && process.env.NODE_ENV !== 'production') {
            let path = paths.find(p => p.operationId === route.operationId)

            if (!path) {
                path = {}
                paths.push(path)
            }

            Object.assign(path, route, route.override)
        }

        api[route.operationId] = function (options, db, req, res) {
            return route.run(options, db, req, res).catch(error => {
                console.log(`Route error:`, error.stack)

                // TODO: Be able to overwrite the message and if not fall back to the spec
                if (error.code === 'ER_DUP_ENTRY') return res.status(400).json({ message: 'The supplied key already exists' })

                res.status(500).json({ message: `Error encountered: ${error}` })
            })
        }
    }

    const notFound = (options: {}, db: {}, req: {}, res: any): void => res.status(404).end()
    const notImplemented = (options: {}, db: {}, req: {}, res: any): void => res.status(501).end()

    paths.forEach((p: ExtractPathType) => {
        const runSequence = []
        const options = {
            body: p.body || [],
            parameters: p.parameters || [],
            responses: p.responses || {},
            security: p.security || {}
        }

        let routeRun = notFound

        if (p.operationId) {
            if (typeof api[p.operationId] === 'function') {
                routeRun = api[p.operationId]
            } else {
                routeRun = notImplemented
            }
        }

        for (const item of middleware) {
            runSequence.push(item.bind(null, options, db))
        }

        runSequence.push(routeRun.bind(null, options, db))

        server[p.method](
            p.route,
            ...runSequence
        )
    })

    console.log(`:: Backend ready and listening on port ${port}`)
}

initServer()
initRoutes()

server.listen(port)

export { }
