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
        return 'projects';
    }
    static get relationMappings() {
        return {
            members: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: User_1.default,
                join: {
                    from: 'projects.id',
                    through: {
                        from: 'project_members.projectId',
                        to: 'project_members.userId',
                        modelClass: project_member_1.default,
                        extra: ['isAdmin']
                    },
                    to: 'users.id'
                }
            }
        };
    }
}
exports.default = ProjectModel;
