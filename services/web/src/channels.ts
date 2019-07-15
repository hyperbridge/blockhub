import Discussions, { DiscussionType } from './models/discussion';
import Project from "../src/models/project";

export default async function(app) {
    app.on('connection', connection => {
        // On a new real-time connection, add it to the anonymous channel
        // app.channel('anonymous').join(connection)
        // it says nothing about anonymous channels
    });

    const commonChannels = await Discussions
        .query()
        .whereIn('type', [DiscussionType.Chat, DiscussionType.Both])

    app.on('login', async (authResult, { connection }) => {
        console.log('loging inn app.on(..,');
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // Obtain the logged in account from the connection
            // const account = connection.account

            // The connection is no longer anonymous, remove it
            //app.channel('anonymous').leave(connection)
            commonChannels.forEach(item => {
                // Add it to the authenticated account channel
                const channel = app.channel(item.key);
                // making sure one login at the time
                channel.connections.forEach((conn) => {
                    if (conn.accountId == connection.accountId) channel.leave(conn)
                })
                channel.join(connection)
            });
        }
    });

    app.service('messages').publish((data, context) =>
        commonChannels.map(channel => app.channel(channel.key))
    );
}
