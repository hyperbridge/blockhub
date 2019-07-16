exports.up = knex => knex.schema
    .table('products', table => {
        table.specificType('tags', 'text[]').notNull().default('{}')
    })
    .raw(`
        create index tags_index on products using gin (tags);
    `)

exports.down = knex => knex.schema
