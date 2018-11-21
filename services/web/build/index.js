"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_app_1 = require("./create-app");
create_app_1.default()
    .then(app => app.listen(9001))
    .then(() => {
    console.log('Server started');
})
    .catch(err => {
    console.error('caught error', err);
});
