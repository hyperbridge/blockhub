// Application hooks that run for every service
import loggerLib from './logger'

export const before = {
    all: [loggerLib()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}

export const after = {
    all: [loggerLib()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}

export const error = {
    all: [loggerLib()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}