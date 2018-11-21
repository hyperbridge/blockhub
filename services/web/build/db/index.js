"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const config_1 = require("../config");
const user_1 = require("../models/user");
const project_1 = require("../models/project");
const connection = mysql_1.default.createConnection({
    host: config_1.default.db.host,
    user: config_1.default.db.user,
    database: config_1.default.db.database,
    debug: false
});
// export type Project = {
//     uuid: number,
//     name: string
// }
// export type User = {
//     uuid: number,
//     email: string,
//     firstName: string,
//     lastName: string,
//     isActive: number,
//     pastMatches?: Array<any>
// }
// type UserRecord = {
//     id: number,
//     email: string,
//     first_name: string,
//     last_name: string,
//     is_active: number
// }
// type ProjectRecord = {
//     id: number,
//     name: string,
//     members: Array<UserRecord>
// }
exports.fetchProjectMembers = (projectId, isAdmin) => __awaiter(this, void 0, void 0, function* () {
    let projectRecord = yield project_1.default
        .query()
        .eager('members(onlyMembers)', {
        onlyMembers: (builder) => {
            builder.where('is_admin', isAdmin ? 1 : 0);
        }
    })
        .findById(projectId);
    return Promise.resolve(projectRecord.members);
});
exports.findSocalProfile = (uId, snType) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        let queryString = 'SELECT * from social_profile where sn_uid=? AND sn_type=?';
        connection.query(queryString, [uId, snType], function (error, results) {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
});
exports.storeToken = (personId, accessToken1, accessToken2, snType, snUid) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        let queryString = 'INSERT INTO social_profile (user_id, access_token_1, access_token_2, sn_type, sn_uid) VALUES(?,?,?,?,?)';
        connection.query(queryString, [personId, accessToken1, accessToken2, snType, snUid], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
});
exports.updateToken = (req) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        let queryString = 'UPDATE social_profile set user_id = ?, access_token_1 = ?, access_token_2 =? , sn_type = ? where id = ? ';
        connection.query(queryString, [req.personId, req.accessToken1, req.accessToken2, req.snType, req.id], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
});
exports.createUser = (email, firstName, lastName) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        let queryString = 'INSERT INTO person (Email, FirstName, LastName) VALUES(?,?,?)';
        connection.query(queryString, [email, firstName, lastName], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    });
});
exports.fetchUser = ({ uuid, email, fieldKey }) => __awaiter(this, void 0, void 0, function* () {
    let result = yield user_1.default
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? uuid : email);
    if (!result) {
        return Promise.resolve(result);
    } //If no record is found
    result.is_active = result.is_active || !!result.password_hash;
    return Promise.resolve(result);
});
// export const fetchProject = async (uuid: number): Promise<ProjectModel> => {
//     return new Promise((resolve, reject) => {
//         const queryString = 'select id, name from `project` where id = ?'
//         connection.query(
//             queryString,
//             [ uuid ],
//             (error: ?string, results: Array<Object>) => {
//                 if (error) {
//                     return reject(error)
//                 }
//                 const record: ProjectModel = new ProjectModel()
//                 resolve(record)
//             }
//         )
//     })
// }
