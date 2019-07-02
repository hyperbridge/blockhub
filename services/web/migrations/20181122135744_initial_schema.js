const charset = 'utf8mb4'
const collation = 'utf8mb4_unicode_ci'

exports.up = knex => {
    const defaults = (table) => {
        table.charset(charset)
        table.collate(collation)

        table.increments('id').primary()

        table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updatedAt').nullable()
        table.timestamp('deletedAt').nullable()

        table.integer('createdBy')
            .unsigned()
            .notNullable()
            .references('accounts.accountId')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('editedBy')
            .unsigned()
            .nullable()
            .references('accounts.accountId')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('deletedBy')
            .unsigned()
            .nullable()
            .references('accounts.accountId')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
        table.string('key', 100)
        table.text('value')
        table.enum('status', ['active', 'disabled', 'removed']).defaultTo('active')
        table.jsonb('meta')

        table.index('key', 'idx_key')
        table.index('status', 'idx_status')
        table.index(['createdAt', 'editedAt'], 'mul_timestamp')
        table.index('deletedAt', 'idx_deleted_at')
    }

    return knex.schema
        .createTable('accounts', table => {
            defaults(table)

            table.string('email', 100)
            table.string('firstName', 50)
            table.string('lastName', 50)
            table.string('address', 150)
            table.string('avatar', 100)
            table.string('password', 550)
        })
        .createTable('profiles', table => {
            defaults(table)

            table
                .integer('accountId')
                .unsigned()
                .references('id')
                .inTable('accounts')
                .onDelete('SET NULL')
            table.string('name', 100)
            table.string('address', 100)
            table.string('avatar', 100)
            table.enum('role', ['user', 'developer', 'curator', 'admin']).defaultTo('user')
        })
        .createTable('licenses', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('achievements', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('communities', table => {
            defaults(table)

            table.string('name', 100)
            table.integer('currentActiveUsers').unsigned()
            table.integer('dailyActiveUsers').unsigned()
            table.integer('monthlyActiveUsers').unsigned()
        })
        .createTable('assets', table => {
            defaults(table)

            table.string('type', 100)
            table.string('standard', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('licenseId')
                .unsigned()
                .references('id')
                .inTable('licenses')
                .onDelete('SET NULL')
        })
        .createTable('realms', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('products', table => {
            defaults(table)

            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('communityId')
                .unsigned()
                .references('id')
                .inTable('communities')
                .onDelete('SET NULL')
        })
        .createTable('ratings', table => {
            defaults(table)
        })
        .createTable('ideas', table => {
            defaults(table)

            table.string('name', 100)
            table.string('type', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('SET NULL')
            table
                .integer('communityId')
                .unsigned()
                .references('id')
                .inTable('communities')
                .onDelete('SET NULL')
        })
        .createTable('reviews', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('projects', table => {
            defaults(table)
            
            table.enum('status', ['Inactive', 'Draft', 'Pending', 'Contributable', 'InDevelopment', 'Refundable', 'Rejected', 'Completed']).defaultTo('Draft')

            table.string('name', 100)
            table
                .integer('ownerId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('SET NULL')
            table
                .integer('parentId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('SET NULL')
            table
                .integer('realmId')
                .unsigned()
                .references('id')
                .inTable('realms')
                .onDelete('SET NULL')
            table
                .integer('communityId')
                .unsigned()
                .references('id')
                .inTable('communities')
                .onDelete('SET NULL')
            table
                .integer('productId')
                .unsigned()
                .references('id')
                .inTable('products')
                .onDelete('SET NULL')
            table
                .integer('ratingId')
                .unsigned()
                .references('id')
                .inTable('ratings')
                .onDelete('SET NULL')
        })
        .createTable('badges', table => {
            defaults(table)
        })
        .createTable('battlepasses', table => {
        })
        .createTable('bounties', table => {            defaults(table)

            table.string('name', 100)
        })
        .createTable('collections', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('discussions', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('events', table => {
            defaults(table)
        })
        .createTable('files', table => {
            defaults(table)

            table.string('storageType', 100)
            table.string('accessType', 100)

            table.string('name', 100)
        })
        .createTable('leaderboards', table => {
            defaults(table)

            table.string('name', 100)
            table
                .integer('productId')
                .unsigned()
                .references('id')
                .inTable('products')
                .onDelete('SET NULL')
        })
        .createTable('logs', table => {
            defaults(table)
        })
        .createTable('messages', table => {
            defaults(table)

            table.string('type', 100)
            table
                .integer('replyToId')
                .unsigned()
                .references('id')
                .inTable('messages')
                .onDelete('SET NULL')
        })
        .createTable('offers', table => {
            defaults(table)
        })
        .createTable('orders', table => {
            defaults(table)
        })
        .createTable('servers', table => {
            defaults(table)
        })
        .createTable('suggestions', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('tags', table => {
            defaults(table)
        })
        .createTable('tournaments', table => {
            defaults(table)

            table.string('name', 100)
        })
        .createTable('votes', table => {
            defaults(table)

            table
                .integer('ratingId')
                .unsigned()
                .references('id')
                .inTable('ratings')
                .onDelete('CASCADE')
        })
        .createTable('nodes', table => {
            defaults(table)

            table.string('relationKey', 100)
            table
                .integer('fromAccountId')
                .unsigned()
                .references('id')
                .inTable('accounts')
                .onDelete('CASCADE')
            table
                .integer('toAccountId')
                .unsigned()
                .references('id')
                .inTable('accounts')
                .onDelete('CASCADE')
            table
                .integer('fromProfileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('toProfileId')
                .unsigned()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
            table
                .integer('fromIdeaId')
                .unsigned()
                .references('id')
                .inTable('ideas')
                .onDelete('CASCADE')
            table
                .integer('toIdeaId')
                .unsigned()
                .references('id')
                .inTable('ideas')
                .onDelete('CASCADE')
            table
                .integer('fromProjectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table
                .integer('toProjectId')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
            table
                .integer('fromProductId')
                .unsigned()
                .references('id')
                .inTable('products')
                .onDelete('CASCADE')
            table
                .integer('toProductId')
                .unsigned()
                .references('id')
                .inTable('products')
                .onDelete('CASCADE')
            table
                .integer('fromMessageId')
                .unsigned()
                .references('id')
                .inTable('messages')
                .onDelete('CASCADE')
            table
                .integer('toMessageId')
                .unsigned()
                .references('id')
                .inTable('messages')
                .onDelete('CASCADE')
            table
                .integer('fromTagId')
                .unsigned()
                .references('id')
                .inTable('tags')
                .onDelete('CASCADE')
            table
                .integer('toTagId')
                .unsigned()
                .references('id')
                .inTable('tags')
                .onDelete('CASCADE')
        })
        .raw(`
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
                    "fromTagId"
                ) = 1);
                
            alter table "nodes"
                add constraint "to_is_set" check(count_not_nulls(
                    "toAccountId",
                    "toProfileId",
                    "toIdeaId",
                    "toProjectId",
                    "toProductId",
                    "toTagId"
                ) = 1);
        `)

        // .raw(`
        //     alter table "nodes"
        //     add constraint "exactly_one" check(
        //         (
        //             "fromAccountId" is not null 
        //             and "toAccountId" is null
        //         )
        //         or
        //         (
        //             "fromAchievementId" is null 
        //             and "toAchievementId" is not null
        //         )
        //     )
        // `)
        // .createTable('project_members', table => {
        //     table.increments('id').primary()
        //     table
        //         .integer('profileId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table
        //         .integer('projectId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('projects')
        //         .onDelete('CASCADE')
        // })
        // .createTable('project_pledges', table => {
        //     table.increments('id').primary()
        //     table
        //         .integer('profileId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table
        //         .integer('projectId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('projects')
        //         .onDelete('CASCADE')
        //     table.jsonb('meta')
        // })
        // .createTable('asset_offers', table => {
        //     table.increments('id').primary()
        //     table.string('type', 100)
        //     table.string('text', 500)
        //     table
        //         .integer('assetId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('assets')
        //         .onDelete('SET NULL')
        //     table
        //         .integer('fromId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table
        //         .integer('toId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        //     table.timestamp('updatedAt')
        //     table.jsonb('meta')
        // })
        // .createTable('profile_friends', table => {
        //     table.increments('id').primary()
        //     table.string('type', 100)
        //     table.string('text', 500)
        //     table
        //         .integer('fromId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table
        //         .integer('toId')
        //         .unsigned()
        //         .references('id')
        //         .inTable('profiles')
        //         .onDelete('CASCADE')
        //     table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        //     table.timestamp('updatedAt')
        //     table.jsonb('meta')
        // })
        // .createTable('sessions', table => {
        //     table.string('sid').primary()
        //     table.jsonb('sess').notNullable()
        //     table.timestamp('expired').notNullable()
        // })
}

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('accounts')
        .dropTableIfExists('achievements')
        .dropTableIfExists('assets')
        .dropTableIfExists('badges')
        .dropTableIfExists('battlepasses')
        .dropTableIfExists('bounties')
        .dropTableIfExists('collections')
        .dropTableIfExists('communities')
        .dropTableIfExists('discussions')
        .dropTableIfExists('events')
        .dropTableIfExists('files')
        .dropTableIfExists('ideas')
        .dropTableIfExists('leaderboards')
        .dropTableIfExists('licenses')
        .dropTableIfExists('logs')
        .dropTableIfExists('messages')
        .dropTableIfExists('nodes')
        .dropTableIfExists('offers')
        .dropTableIfExists('orders')
        .dropTableIfExists('products')
        .dropTableIfExists('profiles')
        .dropTableIfExists('ratings')
        .dropTableIfExists('realms')
        .dropTableIfExists('reviews')
        .dropTableIfExists('servers')
        .dropTableIfExists('suggestions')
        .dropTableIfExists('tags')
        .dropTableIfExists('tournaments')
        .dropTableIfExists('votes')
        // table.dropIndex ALTER TABLE 'x' DROP CONSTRAINT IF EXISTS 'x_y_foreign' 
    // knex.schema.table('me', function (t) {
    //     t.dropForeign('other_id');
    //     t.dropColumn('other_id');
    // });
//     return knex.schema.raw(`
//     ALTER TABLE "car"
//     DROP CONSTRAINT "car_fuel_type_check",
//     ADD CONSTRAINT "car_fuel_type_check" 
//     CHECK (fuel_type IN ('HYBRID', 'ELECTRIC', 'PETROL', 'DIESEL'))
//   `);
    // return knex.schema
    //     .alterTable('images', (table) => {
    //         table.string('checksum').nullable().alter();
    //     });
        //.dropTableIfExists('profile_friends')
        // .dropTableIfExists('project_pledges')
        // .dropTableIfExists('project_members')
        // .dropTableIfExists('asset_offers')
}