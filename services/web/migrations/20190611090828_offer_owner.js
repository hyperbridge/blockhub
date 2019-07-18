exports.up = knex => knex.schema
    .table('offers', table => {
        table
            .integer('ownerId')
            .unsigned()
            .references('id')
            .inTable('profiles')
            .onDelete('SET NULL')
    })

exports.down = knex => knex.schema
