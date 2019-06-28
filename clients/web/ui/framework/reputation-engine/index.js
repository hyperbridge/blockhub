const local = {
    store: null,
    router: null,
    cache: {
        profileId: null,
        eventsKeyedByAward: {}
    }
}

export const getProfile = () => {
    const profile = local.store.state.application.activeProfile
        ? local.store.state.application.activeProfile
        : local.store.state.application.pendingProfile

    if (!profile) return

    if (local.cache.profileId !== profile.id) {
        local.cache.profileId = profile.id

        recacheEvents()
    }

    if (!profile.events) {
        profile.events = []
    }

    return profile
}

export const recacheEvents = () => {
    const profile = getProfile()

    if (!profile) return

    getProfile().events.forEach(event => {
        local.cache.eventsKeyedByAward[event.key + event.meta.award] = true
    })
}

export const getReputation = () => getProfile().reputation

export const recalculateReputation = () => {

}

export const notify = notice => {
    if (process.client) {
        window.BlockHub.Notification && window.BlockHub.Notification.info(notice.body, notice.title, {
            timeout: 5000,
            pauseOnHover: true
        })
    }
}

export const addEvent = (title, message, event) => {
    const profile = getProfile()

    if (!profile) return

    profile.events.push(event)
    profile.reputation += event.value

    local.cache.eventsKeyedByAward[event.key + event.meta.award] = true

    if (event.key === 'REPUTATION') {
        notify({
            title,
            body: message
        })
    }
}

export const hasAward = award => Boolean(local.cache.eventsKeyedByAward[`REPUTATION${award}`])

export const browseAward = () => {
    const award = 'BROWSE'

    if (hasAward(award)) {
        return
    }

    addEvent(`Achievement Unlocked`, `50 - First Browse`, {
        key: 'REPUTATION',
        value: 50,
        meta: {
            award
        }
    })
}

export const signInAward = () => {
    const award = 'SIGN_IN'

    if (hasAward(award)) {
        return
    }

    if (local.store.state.application.signedIn) {
        addEvent(`Achievement Unlocked`, `100 - Signed In`, {
            key: 'REPUTATION',
            value: 100,
            meta: {
                award
            }
        })
    }
}

export const monitor = () => {
    // local.router.afterEach((to, from) => {
    //     browseAward()
    // })

    const check = () => {
        signInAward()

        setTimeout(check, 1000)
    }

    check()
}

export const init = (store, router) => {
    local.store = store
    local.router = router
}
