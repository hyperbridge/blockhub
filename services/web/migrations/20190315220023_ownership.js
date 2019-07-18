exports.up = knex => knex.schema
    .table('communities', table => {
        table
            .integer('ownerId')
            .unsigned()
            .references('id')
            .inTable('profiles')
            .onDelete('CASCADE')
    })
    .table('ratings', table => {
        table
            .integer('ownerId')
            .unsigned()
            .references('id')
            .inTable('profiles')
            .onDelete('CASCADE')
    })

exports.down = knex => knex.schema
    .table('communities', table => {
        table.dropColumn('ownerId')
    })
    .table('ratings', table => {
        table.dropColumn('ownerId')
    })
