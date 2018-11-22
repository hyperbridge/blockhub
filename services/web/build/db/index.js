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
const user_1 = require("../models/user");
const project_1 = require("../models/project");
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
//     firstName: string,
//     lastName: string,
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
            builder.where('isAdmin', isAdmin ? 1 : 0);
        }
    })
        .findById(projectId);
    return Promise.resolve(projectRecord.members);
});
exports.findSocalProfile = (uId, snType) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        // let queryString = 'SELECT * from socialProfile where snUid=? AND snType=?'
        // connection.query(queryString, [uId, snType], function(
        //     error,
        //     results
        // ) {
        //     if (error) {
        //         reject(error)
        //     }
        //     resolve(results)
        // })
    });
});
exports.storeToken = (userId, accessToken1, accessToken2, snType, snUid) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        // let queryString = 'INSERT INTO socialProfile (userId, accessToken1, accessToken2, snType, snUid) VALUES(?,?,?,?,?)'
        // connection.query(
        //     queryString,
        //     [userId, accessToken1, accessToken2, snType, snUid],
        //     (error, results) => {
        //         if (error) {
        //             reject(error)
        //         }
        //         resolve(results)
        //     }
        // )
    });
});
exports.updateToken = (req) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        // let queryString = 'UPDATE socialProfile set userId = ?, accessToken1 = ?, accessToken2 =? , snType = ? where id = ? '
        // connection.query(
        //     queryString,
        //     [req.userId, req.accessToken1, req.accessToken2, req.snType, req.id],
        //     (error, results) => {
        //         if (error) {
        //             reject(error)
        //         }
        //         resolve(results)
        //     }
        // )
    });
});
exports.createUser = (email, firstName, lastName) => __awaiter(this, void 0, void 0, function* () {
    let user = yield user_1.default
        .query()
        .insertAndFetch({
        email,
        firstName,
        lastName
    });
    return Promise.resolve(user);
    // return new Promise((resolve, reject) => {
    //     // let queryString = 'INSERT INTO users (email, firstName, lastName) VALUES(?,?,?)'
    //     // connection.query(
    //     //     queryString,
    //     //     [email, firstName, lastName],
    //     //     (error, results) => {
    //     //         if (error) {
    //     //             reject(error)
    //     //         }
    //     //         resolve(results)
    //     //     }
    //     // )
    // })
});
exports.getUsers = (isAdmin) => __awaiter(this, void 0, void 0, function* () {
    const userRecords = yield user_1.default
        .query()
        .pick(['id', 'firstName', 'lastName', 'email']);
    // .eager('members(onlyMembers)', {
    //     onlyMembers: (builder) => {
    //         builder.where('isAdmin', isAdmin ? 1 : 0)
    //     }
    // })
    //.groupBy('id')
    return Promise.resolve(userRecords);
});
exports.fetchUser = ({ uuid, email, fieldKey }) => __awaiter(this, void 0, void 0, function* () {
    let result = yield user_1.default
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? uuid : email);
    if (!result) {
        return Promise.resolve(result);
    } //If no record is found
    result.isActive = result.isActive || !!result.passwordHash;
    return Promise.resolve(result);
});
// export const fetchProject = async (uuid: number): Promise<ProjectModel> => {
//     return new Promise((resolve, reject) => {
//         const queryString = 'select id, name from `projects` where id = ?'
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
