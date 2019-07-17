/* eslint-disable func-names */
export default async function (options, db, req, res, next): Promise<any> {
    if (process.env.NODE_ENV !== 'production' && process.env.VERBOSE === 'true') {
        console.log('Request URL:', req.url)
        console.log('Request Query Params:', req.params)
        console.log('Request Body Params:', req.body)
        console.log('Request Options:', options)
    }

    if (!req.body) {
        return res.status(400).json({ message: 'No body provided' })
    }

    let parameter: any
    for (parameter in options.body.properties) {
        if (!options.body.required || !options.body.required.includes(parameter)) {
            continue
        }

        if (!(parameter in req.body)) {
            return res.status(400).json({ message: `Body missing: ${parameter}` })
        }

        if (parameter.type === 'string' || parameter.type === 'key') {
            if (!req.parameters[parameter]) {
                return res.status(400).json({ message: `Body invalid: ${parameter}` })
            }
        } else if (parameter.type === 'integer') {
            if (!Number.isNaN(parseInt(req.parameters[parameter], 10))) {
                return res.status(400).json({ message: `Body invalid: ${parameter}` })
            }
        } else if (parameter.type === 'boolean') {
            // Nothing
        } else if (parameter.type === 'object') {
            // Nothing
        } else if (parameter.type === 'array') {
            // Nothing
        }
    }

    for (parameter in options.parameters) {
        if (!parameter.required) {
            continue
        }
        const dest = req[parameter.in]

        if (!(parameter.name in dest)) {
            return res.status(400).json({ message: `Parameter missing: ${parameter.name}` })
        }

        if (parameter.schema.type === 'string') {
            if (!req.parameters[parameter.name]) {
                return res.status(400).json({ message: `Parameter invalid: ${parameter.name}` })
            }
        } else if (parameter.schema.type === 'integer') {
            if (!Number.isNaN(parseInt(req.parameters[parameter.name], 10))) {
                return res.status(400).json({ message: `Body invalid: ${parameter.name}` })
            }
        } else if (parameter.schema.type === 'boolean') {
            // Nothing
        } else if (parameter.schema.type === 'object') {
            // Nothing
        } else if (parameter.schema.type === 'array') {
            // Nothing
        }
    }

    next()
}
