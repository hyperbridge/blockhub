exports.up = knex => {
    return knex.schema
        .table('communities', function (table) {
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
        })
        .table('ratings', function (table) {
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
        })
}

exports.down = knex => {
    return knex.schema
        .table('communities', function (table) {
            table.dropColumn('ownerId')
        })
        .table('ratings', function (table) {
            table.dropColumn('ownerId')
        })
}