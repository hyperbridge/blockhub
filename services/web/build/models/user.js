"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const project_1 = require("./project");
const project_member_1 = require("./project-member");
class UserModel extends objection_1.Model {
    constructor() {
        super(...arguments);
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.isActive = false;
        this.passwordHash = '';
    }
    static get tableName() {
        return 'users';
    }
    static get relationMappings() {
        return {
            projects: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: project_1.default,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'project_members.userId',
                        to: 'project_members.groupId',
                        modelClass: project_member_1.default,
                        extra: ['isAdmin']
                    },
                    to: 'projects.id'
                }
            }
        };
    }
}
exports.default = UserModel;
