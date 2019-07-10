import Discussions, { DiscussionType } from './models/discussion';
import Project from "../src/models/project";

export default function(app) {
    app.on('connection', connection => {
        // On a new real-time connection, add it to the anonymous channel
        // app.channel('anonymous').join(connection)
        // it says nothing about anonymous channels
    });

    app.on('login', async (authResult, { connection }) => {
        console.log('login', connection);
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // Obtain the logged in account from the connection
            // const account = connection.account

            // The connection is no longer anonymous, remove it
            //app.channel('anonymous').leave(connection)

            const commonChannels = await Discussions
                .query()
                .where('type', DiscussionType.Chat);
            commonChannels.forEach(item => {
                // Add it to the authenticated account channel
                app.channel(item.key).join(connection)
            });
        }
    });

    app.publish((data, hook) => {
        // Publish all service events to all authenticated accounts
        console.log(data, hook);
        return app.channel('authenticated')
    })
}
