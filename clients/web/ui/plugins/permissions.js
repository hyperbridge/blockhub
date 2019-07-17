import Vue from 'vue'

export default ({ app, store }) => {
    let defaultUserId = null

    const permissions = {
        'anonymous': {}
    }

    const $access = function(keys, id, options) {
        if (typeof keys === 'string') {
            keys = [keys]
        }

        if (typeof id === 'object') {
            options = id
            id = undefined
        }

        if (!options) {
            options = {}
        }

        for (const key of keys) {
            const userId = options.userId || defaultUserId || 'anonymous'

            if (!permissions[userId]) {
                continue
            }

            // This is in expanded form to make reading the logic clearer
            if (id) {
                if (Array.isArray(permissions[userId][key])) {
                    if (permissions[userId][key].includes(id)) {
                        return true
                    }
                } else if (permissions[userId][key]) {
                    return true
                }
            } else if (permissions[userId][key]) {
                return true
            }
        }

        return false
    }

    $access.setUserPermissions = function setUserPermissions(userId, userPermissions) {
        permissions[userId] = userPermissions || {}
    }

    $access.setUserId = function setUserId(userId) {
        defaultUserId = userId
    }

    app.$access = $access
    store.$access = $access

    const plugin = {
        install() {
            Vue.mixin({
                created() {
                    this.$access = $access
                }
            })
        }
    }

    Vue.use(plugin)
}
