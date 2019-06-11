exports.up = knex => {
    return knex.schema
        .table('offers', function (table) {
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('SET NULL')
        })
}

exports.down = knex => {
    return knex.schema
}
