"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { version, description } = require('../../package.json');
exports.default = (_, res) => {
    res.json({
        name: 'sss',
        description,
        version,
        uptime: process.uptime()
    });
};
