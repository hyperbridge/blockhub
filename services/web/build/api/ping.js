"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  name,
  version,
  description
} = require('../../package.json');

var _default = (req, res) => {
  res.json({
    name,
    description,
    version,
    uptime: process.uptime()
  });
};

exports.default = _default;