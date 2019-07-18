/* eslint-disable @typescript-eslint/no-use-before-define */
import bodyParser = require('body-parser')
import Knex = require('knex')
import cors = require('cors')
import { Model } from 'objection'
import config = require('../config')
import feathers = require('@feathersjs/feathers')
import express = require('@feathersjs/express')
import rest = require('@feathersjs/express/rest')
import errorHandler = require('@feathersjs/express/errors')

import channels from './channels'
import services from './services'
import loggerLib from './logger'

import * as appHooks from './hooks/app'

import authentication = require('@feathersjs/authentication')
import local = require('@feathersjs/authentication-local')
import jwt = require('@feathersjs/authentication-jwt')
import socketio = require('@feathersjs/socketio')
import session = require('express-session')

// Google Login
import passport = require('passport')
import oauth2 = require('@feathersjs/authentication-oauth2')
import { CLIENT_RENEG_WINDOW } from 'tls'


import GoogleStrategy = require('passport-google-oauth2')

require('dotenv').config()

const KnexSessionStore = require('connect-session-knex')(session)

const knexfile = require('./knexfile')
const knex = Knex(knexfile)

knex.on('query', (query): any => {
    console.log(query)
})

Model.knex(knex)

const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions' // optional. Defaults to 'sessions'
})

export default async () => {
    const app = express(feathers())

    app.configure(socketio())
    app.configure(rest())

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

    app.configure(authentication(config.authentication))

    // Google login

    const {
        GOOGLE_CLIENT_ID: googleClientID,
        GOOGLE_CLIENT_SECRET: googleClientSecret
    } = process.env

    // app.configure(oauth2({
    //     name: 'google',
    //     Strategy,
    //     clientID: googleClientID,
    //     clientSecret: googleClientSecret,
    //     scope: ['email'],
    //     passReqToCallback: true,
    //     callbackURL: 'http://localhost:9001/auth/google/callbackURL'
    // }))

    app.configure(local())
    app.configure(jwt())

    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 10000 // ten seconds, for testing
        },
        store: store
    }))

    app.use('/schema', async (req, res, next): Promise<any> => {
        const result = {}
        const tables = await knex('pg_catalog.pg_tables')
            .select('tablename')
            .where({ schemaname: 'public' })

        for (const i in tables) {
            const tableInfo = await knex.table(tables[i].tablename).columnInfo()

            result[tables[i].tablename] = tableInfo
        }

        res.end(JSON.stringify(result))
    })

    app.set('knex', knex)

    // Setup channels
    app.configure(channels)

    // Setup services
    for (const key in services) {
        app.configure(services[key])
    }

    app.service('/authentication').hooks({
        before: {
            all: [
                // You can chain multiple strategies
                authentication.hooks.authenticate(config.authentication.strategies)
            ],
            remove: [
                authentication.hooks.authenticate('jwt')
            ]
        },
        after: {
            create: [
                (context): any => {
                    console.log('auth.check', context.params.user.id)
                    context.result.accountId = context.params.user.id
                    context.result.profiles = context.params.user.profiles
                    return context
                }
            ]
        }
    })

    // add any error handlers
    app.use(errorHandler({ logger: loggerLib }))

    // app.configure(oauth2({
    //     name: 'google',
    //     Strategy,
    //     clientID: googleClientID,
    //     clientSecret: googleClientSecret,
    //     scope: ['email'],
    //     passReqToCallback: true,
    //     callbackURL: 'http://localhost:9001/auth/google/callbackURL'
    // }))

    // passport.use(
    //     new GoogleStrategy(
    //         {
    //             clientID: googleClientID,
    //             clientSecret: googleClientSecret,
    //             callbackURL: 'http://localhost:9001/auth/google/callbackURL',
    //             accessType: 'offline',
    //             userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    //         },
    //         (accessToken, refreshToken, profile, cb) => {
    //         // Extract the minimal profile information we need from the profile object
    //         // provided by Google
    //             console.log('profile')
    //             console.log(profile)
    //         }
    //     )
    // )

    app.get('/auth/google/callbackURL',
        passport.authenticate('google', { scope: ['profile'] }),
        // Redirect back to the original page, if any
        (req, res) => {
            console.log('call_back_chek')
            console.log(req)
            res.send('call_back_check')
        })

    app.use('/ping', {
        async find (params) {
            return {
                name: 'test',
                description: 'test',
                version: '0.1',
                uptime: process.uptime()
            }
        }
    })

    app.use('/version', {
        async find (params) {
            return [
                '0.8.1'
            ]
        }
    })
    app.use('/version', {
        async find (params) {
            return [
                '0.8.1'
            ]
        }
    })
    // app hooks last
    app.hooks(appHooks)

    return app
}
