export let config = {
    ENABLED: true,
    FORCED: false,
    STRENGTH: null
}

export const init = function (strength) {
    config.STRENGTH = strength

    if (!config.STRENGTH) {
        config.STRENGTH = Math.floor(Math.random() * 10)
    }

}

export const random = function () {
    if (!config.ENABLED) {
        return false
    }

    if (config.FORCED) {
        return true
    }

    const spec = {
        0: (10 - config.STRENGTH) / 100,
        1: config.STRENGTH / 100
    }

    let i, sum = 0, r = Math.random()
    for (i in spec) {
        sum += spec[i];
        if (r <= sum) return i ? true : false
    }
}