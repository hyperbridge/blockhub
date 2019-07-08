import { Model } from 'objection'
import Profile from './profile'
import Role from './role'
import BaseModel from './base'

export default class Permission extends BaseModel {
	static get tableName() {
		return 'permissions'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['key'],

			properties: {
				permissionId: { type: 'integer' },
				key: { type: 'string' },
			}
		}
	}

	static get relationMappings() {
		return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                join: {
                    from: 'permissions.id',
                    to: 'profiles.id',
                    through: {
                        from: 'profiles_permissions.permissionId',
                        to: 'profiles_permissions.userId'
                    }
                }
            },
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'permissions.id',
                    to: 'roles.id',
                    through: {
                        from: 'roles_permissions.permissionId',
                        to: 'roles_permissions.roleId'
                    }
                }
            },
		}
	}
}
