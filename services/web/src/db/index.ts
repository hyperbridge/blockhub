import mysql from 'mysql'

import config from '../config'
import UserModel from '../models/user'
import ProjectModel from '../models/project'


const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    debug: false
})

export type UpdateTokenRequest = {
    id: number,
    personId: number,
    accessToken1: string,
    accessToken2: string,
    snType: string,
};

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

export const fetchProjectMembers = async (projectId: number, isAdmin: boolean) => {
    let projectRecord = await ProjectModel
        .query()
        .eager('members(onlyMembers)', {
            onlyMembers: (builder) => {
                builder.where('is_admin', isAdmin ? 1 : 0)
            }
        })
        .findById(projectId)

    return Promise.resolve(projectRecord!.members)
}

export const findSocalProfile = async (uId: string, snType: string) => {
    return new Promise((resolve, reject) => {
        let queryString = 'SELECT * from social_profile where sn_uid=? AND sn_type=?'
        connection.query(queryString, [uId, snType], function(
            error,
            results
        ) {
            if (error) {
                reject(error)
            }
            resolve(results)
        })
    })
}

export const storeToken = async (personId: number, accessToken1: string, accessToken2: string, snType: string, snUid: string) => {
    return new Promise((resolve, reject) => {
        let queryString = 'INSERT INTO social_profile (user_id, access_token_1, access_token_2, sn_type, sn_uid) VALUES(?,?,?,?,?)'
        connection.query(
            queryString,
            [personId, accessToken1, accessToken2, snType, snUid],
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            }
        )
    })
}

export const updateToken = async (req: UpdateTokenRequest) => {
    return new Promise((resolve, reject) => {
        let queryString = 'UPDATE social_profile set user_id = ?, access_token_1 = ?, access_token_2 =? , sn_type = ? where id = ? '
        connection.query(
            queryString,
            [req.personId, req.accessToken1, req.accessToken2, req.snType, req.id],
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            }
        )
    })
}


export const createUser = async (email: string, firstName: string, lastName: string) => {
    return new Promise((resolve, reject) => {
        let queryString = 'INSERT INTO person (Email, FirstName, LastName) VALUES(?,?,?)'
        connection.query(
            queryString,
            [email, firstName, lastName],
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            }
        )
    })
}

export const fetchUser = async ({ uuid, email, fieldKey }): Promise<UserModel | undefined> => {
    let result = await UserModel
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? uuid : email)

    if (!result) { return Promise.resolve(result) } //If no record is found

    result.is_active = result.is_active || !!result.password_hash

    return Promise.resolve(result)
}

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
