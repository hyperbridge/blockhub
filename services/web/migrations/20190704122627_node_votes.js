exports.up = knex => knex.schema
    .table('nodes', table => {
        table
            .integer('fromVoteId')
            .unsigned()
            .references('id')
            .inTable('votes')
            .onDelete('CASCADE')
        table
            .integer('toVoteId')
            .unsigned()
            .references('id')
            .inTable('votes')
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
                "fromMessageId",
                "fromIdeaId",
                "fromProjectId",
                "fromProductId",
                "fromTagId",
                "fromRealmId",
                "fromCollectionId",
                "fromCommunityId",
                "fromDiscussionId",
                "fromVoteId"
            ) = 1);

        alter table "nodes"
            add constraint "to_is_set" check(count_not_nulls(
                "toAccountId",
                "toProfileId",
                "toMessageId",
                "toIdeaId",
                "toProjectId",
                "toProductId",
                "toTagId",
                "toRealmId",
                "toCollectionId",
                "toCommunityId",
                "toDiscussionId",
                "toVoteId"
            ) = 1);
    `)

exports.down = knex => knex.schema
    .table('nodes', table => {
        table.dropColumn('fromVoteId')
        table.dropColumn('toVoteId')
    })
