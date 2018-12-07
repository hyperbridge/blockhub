const Objection = require('objection')
const File = require('../build/src/models/file').default
const files = require('./data/files')

exports.seed = function (knex) {
    return File
        .query(knex)
        .upsertGraph(files)
}
