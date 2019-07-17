
exports.seed = async function (knex) {
    await knex('users').del()

    // mysuperpassword
    const password = '$dasd10$uH.WEEpxP7x0HIN/pdx6Y.xPhpCyLdDddto7DQRevyVG9IhI5kZC'

    return knex('users').insert([
        {
            userId: 1,
            username: 'god',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    god: true
                }
            })
        },
        {
            userId: 4,
            username: 'onlyJobs',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: [1],
                    job: true
                }
            })
        },
        {
            userId: 5,
            username: 'onlyRoles',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: [1],
                    role: true
                }
            })
        },
        {
            userId: 6,
            username: 'onlyUsers',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: [1],
                    user: true
                }
            })
        },
        {
            userId: 7,
            username: 'onlyApplications',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: true
                }
            })
        },
        {
            userId: 9,
            username: 'onlyApplication1',
            password,
            enabled: 1,
            applicationId: 1,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: [1]
                }
            })
        },
        {
            userId: 10,
            username: 'onlyApplication2',
            password,
            enabled: 1,
            applicationId: 2,
            meta: JSON.stringify({
                permissions: {
                    adminPanel: true,
                    application: [2]
                }
            })
        }
    ])
}
