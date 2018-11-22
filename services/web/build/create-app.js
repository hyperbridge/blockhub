"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const Knex = require("knex");
const SwaggerParser = require("swagger-parser");
const swaggerRoutes = require("swagger-routes-express");
const api_1 = require("./api");
const objection_1 = require("objection");
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knexfile = require('../knexfile');
const knex = Knex(knexfile);
objection_1.Model.knex(knex);
const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions' // optional. Defaults to 'sessions'
});
exports.default = () => __awaiter(this, void 0, void 0, function* () {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    });
    const apiDescription = yield parser.validate('api.yml');
    const connect = swaggerRoutes(api_1.default, apiDescription);
    const app = express();
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use(morgan('tiny'));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 10000 // ten seconds, for testing
        },
        store: store
    }));
    // var count = 0
    // app.use('/test', function(req, res, next) {
    //     var n = req.session.views || 0
    //     req.session.views = ++n
    //     res.end(n + ' views')
    // })
    app.use('/schema', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {};
            const tables = yield knex('pg_catalog.pg_tables')
                .select('tablename')
                .where({ schemaname: 'public' });
            for (let i in tables) {
                const tableInfo = yield knex.table(tables[i].tablename).columnInfo();
                result[tables[i].tablename] = tableInfo;
            }
            res.end(JSON.stringify(result));
        });
    });
    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app);
    // add any error handlers last
    return app;
});
