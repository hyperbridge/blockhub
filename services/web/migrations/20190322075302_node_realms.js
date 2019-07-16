exports.up = knex => knex.schema
    .table('nodes', table => {
        table
            .integer('fromRealmId')
            .unsigned()
            .references('id')
            .inTable('realms')
            .onDelete('CASCADE')
        table
            .integer('toRealmId')
            .unsigned()
            .references('id')
            .inTable('realms')
            .onDelete('CASCADE')
    })
    .raw(`
        alter table "nodes"
            drop constraint "from_is_set" restrict;

        alter table "nodes"
            drop constraint "to_is_set" restrict;
            
        DROP FUNCTION count_not_nulls;

        CREATE FUNCTION count_not_nulls(variadic p_array anyarray)
            RETURNS BIGINT AS
            $$
                SELECT count(x) FROM unnest($1) AS x
            $$ LANGUAGE SQL IMMUTABLE;

        alter table "nodes"
            add constraint "from_is_set" check(count_not_nulls(
                "fromAccountId",
                "fromProfileId",
                "fromIdeaId",
                "fromProjectId",
                "fromProductId",
                "fromTagId",
                "fromRealmId"
            ) = 1);
            
        alter table "nodes"
            add constraint "to_is_set" check(count_not_nulls(
                "toAccountId",
                "toProfileId",
                "toIdeaId",
                "toProjectId",
                "toProductId",
                "toTagId",
                "toRealmId"
            ) = 1);
    `)

exports.down = knex => knex.schema
    .table('nodes', table => {
        table.dropColumn('fromRealmId')
        table.dropColumn('toRealmId')
    })
