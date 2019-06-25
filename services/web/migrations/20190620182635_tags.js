exports.up = knex => {
    return knex.schema
        .table('products', function (table) {
            table.specificType('tags', 'text[]').notNull().default('{}')
        })
        .raw(`
            create index tags_index on products using gin (tags);
        `)
}

exports.down = knex => {
    return knex.schema
}