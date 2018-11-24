// Use this hook to manipulate incoming or outgoing data.

module.exports = function(options = { key: 'profile', columnName: 'profileId' }) {
    return async context => {
        // Get `app`, `method`, `params` and `result` from the hook context
        const { app, method, result, params } = context

        // Make sure that we always have a list of items either by wrapping
        // a single item into an array or by getting the `data` from the `find` method result
        const items = method === 'find' ? result.data : [result]

        // Asynchronously get profile object from each items `profileId`
        // and add it to the item
        await Promise.all(items.map(async item => {
            // We'll also pass the original `params` to the service call
            // so that it has the same information available (e.g. who is requesting it)
            const profile = await app.service('profiles').get(item[options.columnName]) //, params) removed params causing error

            item[options.key] = profile
        }))

        // Best practise, hooks should always return the context
        return context
    }
}