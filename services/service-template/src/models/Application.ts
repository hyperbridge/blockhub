import { Model, RelationMappings, JsonSchema, Modifiers } from 'objection'

export default class Application extends Model {
    public applicationId!: number
    public name!: string
    public logo!: string
    public type!: string
    public createdAt!: Date
    public createdBy!: number

    public static get idColumn (): any {
        return 'applicationId'
    }

    public static get tableName (): any {
        return 'applications'
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['name', 'logo'],

            properties: {
                applicationId: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                logo: { type: 'string', minLength: 1, maxLength: 255 }
            }
        }
    }

    public static get relationMappings (): RelationMappings {
        return {
        }
    }

    public static get modifiers (): Modifiers {
        const knex = this.knex()
        return {
            permission (query) {
                const userId = query.context().user.userId

                query
                // .innerJoinRelation('users', user)
                    .join('users', 'users.userId', '=', userId)
                    .leftJoin('users_roles', 'users_roles.userId', '=', 'users.userId')
                    .leftJoin('roles', 'roles.roleId', '=', 'users_roles.roleId')
                    .where(knex.raw(`JSON_CONTAINS(roles.meta, CAST(CONCAT('{ "permissions": { "god": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(roles.meta, CAST(CONCAT('{ "permissions": { "application": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(roles.meta, CAST(CONCAT('{ "permissions": { "application": [', applications.applicationId, ']}}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(roles.meta, CAST(CONCAT('{ "permissions": { "application.read": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(roles.meta, CAST(CONCAT('{ "permissions": { "application.read": [', applications.applicationId, ']}}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(users.meta, CAST(CONCAT('{ "permissions": { "god": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(users.meta, CAST(CONCAT('{ "permissions": { "application": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(users.meta, CAST(CONCAT('{ "permissions": { "application": [', applications.applicationId, ']}}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(users.meta, CAST(CONCAT('{ "permissions": { "application.read": true }}') AS JSON), '$')`))
                    .orWhere(knex.raw(`JSON_CONTAINS(users.meta, CAST(CONCAT('{ "permissions": { "application.read": [', applications.applicationId, ']}}') AS JSON), '$')`))
            }
        }
    }

    public toString (): string {
        return String(this.applicationId)
    }
}
