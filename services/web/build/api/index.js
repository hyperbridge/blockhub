"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versions_1 = require("./versions");
const ping_1 = require("./ping");
const registerAccount_1 = require("./registerAccount");
exports.default = {
    versions: versions_1.default,
    ping: ping_1.default,
    registerAccount: registerAccount_1.default
};
