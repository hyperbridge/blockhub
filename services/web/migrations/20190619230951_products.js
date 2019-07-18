exports.up = knex => knex.schema
    .table('products', table => {
        table.enum('type', ['game', 'physical', 'software', 'media', 'other']).defaultTo('game')
        table.timestamp('releaseDate')
    })

exports.down = knex => knex.schema
