import fs from 'fs'
import path from 'path'

// const registerRequireContextHook = require('babel-plugin-require-context-hook/register')
// registerRequireContextHook()

const CHAR_DOT = 46
const CHAR_FORWARD_SLASH = 47

export const requireModules = (keys, root, directory, regExp, recursive) => {
    const files = fs.readdirSync(path.join(root, directory))

    files.forEach(filename => {
        // webpack adds a './' to the begining of the key
        // TODO: Check this in windows
        const entryKey = `./${path.join(directory, filename)}`
        if (regExp.test(entryKey)) {
            keys[entryKey] = require(path.join(root, directory, filename)) // eslint-disable-line
            return null
        }

        if (!recursive) {
            return null
        }

        if (fs.statSync(path.join(root, directory, filename)).isDirectory()) {
            requireModules(keys, root, path.join(directory, filename), regExp, recursive)
        }
    })
}

export const isRelativeRequest = (request) => {
    if (request.charCodeAt(0) !== CHAR_DOT) {
        return false
    }

    if (request === '.' || request === '..') {
        return true
    }

    return (
        request.charCodeAt(1) === CHAR_FORWARD_SLASH ||
        (request.charCodeAt(1) === CHAR_DOT && request.charCodeAt(2) === CHAR_FORWARD_SLASH)
    )
}

export const getFullPath = (dirname, request) => {
    if (isRelativeRequest(request) || !process.env.NODE_PATH) {
        return path.resolve(dirname, request)
    }

    return path.resolve(process.env.NODE_PATH, request)
}