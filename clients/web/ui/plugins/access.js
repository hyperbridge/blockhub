import Vue from 'vue'
import sdk from '../../../../sdks/node/build/src'

export default ({ app, store }) => {
    // access = access.default.access
    console.log(sdk.access, 'bbbb')

    const $access = sdk.access.validator

    if (store.state.auth.user) {
        const { user } = store.state.auth

        let permissions = {}

        for (const role of user.roles) {
            for (const key in role.meta.permissions) {
                if (permissions[key]) {
                    permissions[key] = { ...permissions[key], ...role.meta.permissions[key] }
                } else {
                    permissions[key] = role.meta.permissions[key]
                }
            }
        }

        permissions = {
            ...permissions,
            ...user.meta.permissions
        }

        sdk.access.setUserId(user.id)
        sdk.access.setUserPermissions(user.id, permissions)
    }

    const plugin = {
        install() {
            Vue.mixin({
                created() {
                    this.$access = $access
                    this.$accessConfig = sdk.access
                }
            })
        }
    }

    Vue.use(plugin)

    Vue.directive('access', {
        bind(el, binding, vnode, oldVnode) {
            const { value } = binding

            el.hidden = true

            if ($access(value)) {
                el.hidden = false
            }

            if (store.state.application.accessOverride) {
                el.hidden = false
            }
        }
    })

    app.$access = $access
    app.$accessConfig = sdk.access
    store.$access = $access
    store.$accessConfig = sdk.access
}
