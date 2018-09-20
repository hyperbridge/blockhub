
import fs from 'fs';
import path from 'path';

// const registerRequireContextHook = require('babel-plugin-require-context-hook/register')
// registerRequireContextHook()

export const requireModules = function requireModules(keys, root, directory, regExp, recursive) {
    const files = fs.readdirSync(path.join(root, directory));

    files.forEach(filename => {
        // webpack adds a './' to the begining of the key
        // TODO: Check this in windows
        const entryKey = `./${path.join(directory, filename)}`;
        if (regExp.test(entryKey)) {
            keys[entryKey] = require(path.join(root, directory, filename)); // eslint-disable-line
            return;
        }

        if (!recursive) {
            return;
        }

        if (fs.statSync(path.join(root, directory, filename)).isDirectory()) {
            requireModules(keys, root, path.join(directory, filename), regExp, recursive);
        }
    });
}

export const isRelativeRequest = function isRelativeRequest(request) {
    if (request.charCodeAt(0) !== 46) {
    /* . */ return false;
    }

    if (request === '.' || '..') {
        return true;
    }

    return (
        request.charCodeAt(1) === 47 /* / */ ||
        (request.charCodeAt(1) === 46 /* . */ && request.charCodeAt(2) === 47) /* / */
    );
}

export const getFullPath = function getFullPath(dirname, request) {
    if (isRelativeRequest(request) || !process.env.NODE_PATH) {
        return path.resolve(dirname, request);
    }

    return path.resolve(process.env.NODE_PATH, request);
}