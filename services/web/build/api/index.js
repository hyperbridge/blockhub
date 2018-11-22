"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versions_1 = require("./versions");
const ping_1 = require("./ping");
const createUser_1 = require("./createUser");
const getUsers_1 = require("./getUsers");
exports.default = {
    versions: versions_1.default,
    ping: ping_1.default,
    createUser: createUser_1.default,
    getUsers: getUsers_1.default
};
