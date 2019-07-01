import { Model } from 'objection'
import Profile from './profile'
import Permission from './permission'
import BaseModel from './base'

export default class Role extends BaseModel {
	static get tableName() {
		return 'roles'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name'],

			properties: {
				roleId: { type: 'integer' },
				name: { type: 'string' },
				description: { type: 'string' }
			}
		}
	}

	static get relationMappings() {
		return {
            permissions: {
                relation: Model.ManyToManyRelation,
                modelClass: Permission,
                join: {
                    from: 'roles.roleId',
                    to: 'permissions.permissionId',
                    through: {
                        from: 'roles_permissions.roleId',
                        to: 'roles_permissions.permissionId'
                    }
                }
            },
            profiles: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                join: {
                    from: 'roles.id',
                    to: 'profiles.id',
                    through: {
                        from: 'roles_profiles.roleId',
                        to: 'roles_profiles.userId'
                    }
                }
            },
		}
	}
}