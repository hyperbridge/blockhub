// Use this hook to manipulate incoming or outgoing data.

module.exports = function(options = {}) {
    return async context => {
        const { data } = context

        // Throw an error if we didn't get a text
        if (!data.text) {
            throw new Error('A message must have a text')
        }

        // The authenticated user
        const user = context.params.user

        // The actual message text
        const text = context.data.text
            // Messages can't be longer than 400 characters
            .substring(0, 400)

        if (!user.id) {
            throw new Error('A message must have a user')
        }

        // Override the original data (so that people can't submit additional stuff)
        context.data = {
            text,
            // Set the user id
            userId: user.id,
            // Add the current date
            createdAt: new Date()
        }

        // Best practise, hooks should always return the context
        return context
    }
}