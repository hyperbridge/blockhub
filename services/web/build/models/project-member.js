"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class ProjectMemberModel extends objection_1.Model {
    static get tableName() {
        return 'project_members';
    }
}
exports.default = ProjectMemberModel;
