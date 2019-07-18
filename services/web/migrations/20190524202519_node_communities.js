exports.up = knex => knex.schema
    .table('nodes', table => {
        table
            .integer('fromCommunityId')
            .unsigned()
            .references('id')
            .inTable('communities')
            .onDelete('CASCADE')
        table
            .integer('toCommunityId')
            .unsigned()
            .references('id')
            .inTable('communities')
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
                "fromRealmId",
                "fromCollectionId",
                "fromCommunityId"
            ) = 1);
            
        alter table "nodes"
            add constraint "to_is_set" check(count_not_nulls(
                "toAccountId",
                "toProfileId",
                "toIdeaId",
                "toProjectId",
                "toProductId",
                "toTagId",
                "toRealmId",
                "toCollectionId",
                "toCommunityId"
            ) = 1);
    `)

exports.down = knex => knex.schema
    .table('nodes', table => {
        table.dropColumn('fromCommunityId')
        table.dropColumn('toCommunityId')
    })
