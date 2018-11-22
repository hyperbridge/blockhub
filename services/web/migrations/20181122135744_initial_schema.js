exports.up = knex => {
    return knex.schema
        .createTable('users', table => {
            table.increments('id').primary()
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('SET NULL')
            table.string('email')
            table.string('firstName')
            table.string('lastName')
            table.boolean('isActive')
            table.string('passwordHash')
            table.json('meta')
        })
        .createTable('projects', table => {
            table.increments('id').primary()
            table.string('name')
        })
        .createTable('project_members', table => {
            table.increments('id').primary()
            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table
                .integer('projectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
        })
}

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('project_members')
        .dropTableIfExists('projects')
        .dropTableIfExists('users')
}