import config from '../config'
import User from '../models/user'
import Project from '../models/project'

// const pg = require('pg')

// const connection = new pg.Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
// })

// connection.connect(function(err) {
//     if (err) {
//         return console.error('Could not connect to Postgres', err)
//     }
// })

// const connection = mysql.createConnection({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     debug: false
// })

export type UpdateTokenRequest = {
    id: number,
    userId: number,
    accessToken1: string,
    accessToken2: string,
    snType: string,
}

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

export const fetchProjectMembers = async (projectId: number, isAdmin: boolean) => {
    let projectRecord = await Project
        .query()
        .eager('members(onlyMembers)', {
            onlyMembers: (builder) => {
                builder.where('isAdmin', isAdmin ? 1 : 0)
            }
        })
        .findById(projectId)

    return Promise.resolve(projectRecord!.members)
}

export const findSocalProfile = async (uId: string, snType: string) => {
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
    })
}

export const storeToken = async (userId: number, accessToken1: string, accessToken2: string, snType: string, snUid: string) => {
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
    })
}

export const updateToken = async (req: UpdateTokenRequest) => {
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
    })
}


export const createUser = async (email: string, firstName: string, lastName: string): Promise<User | undefined> => {
    let user = await User
        .query()
        .insertAndFetch({
            email,
            firstName,
            lastName
        })

    return Promise.resolve(user)

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
}

export const getUsers = async (isAdmin: boolean) => {
    const userRecords = await User
        .query()
        .pick(['id', 'firstName', 'lastName', 'email'])
    // .eager('members(onlyMembers)', {
    //     onlyMembers: (builder) => {
    //         builder.where('isAdmin', isAdmin ? 1 : 0)
    //     }
    // })
    //.groupBy('id')

    return Promise.resolve(userRecords)
}

export const fetchUser = async ({ uuid, email, fieldKey }): Promise<User | undefined> => {
    let result = await User
        .query()
        .findOne(fieldKey, fieldKey === 'id' ? uuid : email)

    if (!result) { return Promise.resolve(result) } //If no record is found

    result.isActive = result.isActive || !!result.passwordHash

    return Promise.resolve(result)
}

// export const fetchProject = async (uuid: number): Promise<Project> => {
//     return new Promise((resolve, reject) => {
//         const queryString = 'select id, name from `projects` where id = ?'
//         connection.query(
//             queryString,
//             [ uuid ],
//             (error: ?string, results: Array<Object>) => {
//                 if (error) {
//                     return reject(error)
//                 }

//                 const record: Project = new Project()

//                 resolve(record)
//             }
//         )
//     })
// }
