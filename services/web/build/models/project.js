"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const project_member_1 = require("./project-member");
const User_1 = require("./User");
class ProjectModel extends objection_1.Model {
    constructor() {
        super(...arguments);
        this.name = '';
        this.members = [];
    }
    static get tableName() {
        return 'project';
    }
    static get relationMappings() {
        return {
            members: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: User_1.default,
                join: {
                    from: 'project.id',
                    through: {
                        from: 'project_member.project_id',
                        to: 'project_member.user_id',
                        modelClass: project_member_1.default,
                        extra: ['is_admin']
                    },
                    to: 'user.id'
                }
            }
        };
    }
}
exports.default = ProjectModel;
