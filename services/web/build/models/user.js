"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const project_1 = require("./project");
const project_member_1 = require("./project-member");
class UserModel extends objection_1.Model {
    constructor() {
        super(...arguments);
        this.email = '';
        this.first_name = '';
        this.last_name = '';
        this.is_active = false;
        this.password_hash = '';
    }
    static get tableName() {
        return 'user';
    }
    static get relationMappings() {
        return {
            projects: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: project_1.default,
                join: {
                    from: 'user.id',
                    through: {
                        from: 'project_member.user_id',
                        to: 'project_member.group_id',
                        modelClass: project_member_1.default,
                        extra: ['is_admin']
                    },
                    to: 'project.id'
                }
            }
        };
    }
}
exports.default = UserModel;
