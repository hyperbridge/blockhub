"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devConfig = require('./development.json');
const productionConfig = require('./production.json');
let config = devConfig;
switch (process.env.NODE_ENV) {
    case 'production':
        config = Object.assign({}, config, productionConfig);
        break;
}
exports.default = config;
