const Objection = require('objection')
const Product = require('../build/src/models/product').default
const products = require('./data/products')

exports.seed = function(knex) {
    return Product
        .query(knex)
        .upsertGraph(products)
}
