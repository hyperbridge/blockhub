
exports.up = function(knex, Promise) {
    return knex.schema
        .table('messages', function (table) {
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .notNull();
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('messages')
                .onDelete('CASCADE')
        })
        .table('discussions', function(table){
            table.text('content');
            table.integer('parentId').unsigned();
            table.integer('rootMessageId').unsigned();
            table.enum('type', ['discussion', 'chat', 'both']).defaultTo('discussion');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .table('messages', function (table) {
            table.dropColumn('ownerId')
            table.dropColumn('parentId')
        })
        .table('discussions', function(table){
            table.dropColumn('content');
            table.dropColumn('parentId');
            table.dropColumn('rootMessageId');
            table.dropColumn('type');
        });
};
