export default function(app) {
    app.on('connection', connection => {
        // On a new real-time connection, add it to the anonymous channel
        app.channel('anonymous').join(connection)
    })

    app.on('login', (authResult, { connection }) => {
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // Obtain the logged in user from the connection
            // const user = connection.user

            // The connection is no longer anonymous, remove it
            app.channel('anonymous').leave(connection)

            // Add it to the authenticated user channel
            app.channel('authenticated').join(connection)
        }
    })

    app.publish((data, hook) => {
        // Publish all service events to all authenticated users
        return app.channel('authenticated')
    })
}