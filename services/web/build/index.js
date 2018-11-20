"use strict";

var _createApp = _interopRequireDefault(require("./create-app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _createApp.default)().then(app => app.listen(9001)).then(() => {
  console.log('Server started');
}).catch(err => {
  console.error('caught error', err);
});