exports.up = knex => {
    return knex.schema
        .table('products', function (table) {
            table.enum('type', ['game', 'physical', 'software', 'media', 'other']).defaultTo('game')
            table.timestamp('releaseDate')
        })
}

exports.down = knex => {
    return knex.schema
}