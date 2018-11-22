"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB = require("../db");
exports.default = (req, res) => {
    DB.createUser(req.body.email, req.body.firstName, req.body.lastName).then(() => {
        res.json({
            success: true,
            data: {
                id: 1
            }
        });
    });
};
