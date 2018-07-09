
export let config = {
    CHAOS_MONKEY_ENABLED: true,
    CHAOS_MONKEY_FORCED: false,
    CHAOS_MONKEY_STRENGTH: null
}

export const init = function (strength) {
    config.CHAOS_MONKEY_STRENGTH = strength

    if (!config.CHAOS_MONKEY_STRENGTH) {
        config.CHAOS_MONKEY_STRENGTH = Math.floor(Math.random() * 10)
    }

}

export const random = function () {
    if (!config.CHAOS_MONKEY_ENABLED) {
        return false
    }

    if (config.CHAOS_MONKEY_FORCED) {
        return true
    }

    const spec = {
        0: (10 - config.CHAOS_MONKEY_STRENGTH) / 100,
        1: config.CHAOS_MONKEY_STRENGTH / 100
    }

    let i, sum = 0, r = Math.random()
    for (i in spec) {
        sum += spec[i];
        if (r <= sum) return i ? true : false
    }
}

window.ChaosMonkey = {
    config,
    init,
    random
}

// testing
// ChaosMonkey.config.CHAOS_MONKEY_FORCED = true && BlockStore.dispatch('database/clean')