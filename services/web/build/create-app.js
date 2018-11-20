"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _swaggerParser = _interopRequireDefault(require("swagger-parser"));

var _swaggerRoutesExpress = _interopRequireDefault(require("swagger-routes-express"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(function* () {
  const parser = new _swaggerParser.default({
    apiSeparator: '_',
    scopes: {}
  });
  const apiDescription = yield parser.validate('api.yml');
  const connect = (0, _swaggerRoutesExpress.default)(_api.default, apiDescription);
  const app = (0, _express.default)(); // do any other app stuff, such as wire in passport, use cors etc
  // then attach the routes

  connect(app); // add any error handlers last

  return app;
});

exports.default = _default;