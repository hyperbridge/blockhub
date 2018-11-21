"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { name, version, description } = require('../../../package.json');
exports.default = (_, res) => {
    res.json({
        name,
        description,
        version,
        uptime: process.uptime()
    });
};
