"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB = require("../db");
exports.default = (req, res) => {
    DB.getUsers(false).then((users) => {
        res.json({
            success: true,
            data: {
                users: users
            }
        });
    });
};
