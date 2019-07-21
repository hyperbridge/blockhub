import basePath from './basePath'
import normaliseSecurity from './normaliseSecurity'
import normaliseRoute from './normaliseRoute'
import normaliseOperationId from './normaliseOperationId'

const METHODS = ['get', 'post', 'patch', 'put', 'delete']

export interface ExtractPathType {
    method?: string;
    route?: string;
    operationId?: string;
    parameters?: string;
    responses?: string[];
    body?: string;
    security?: string | null;
}

export default ({ security, servers, paths }: { security: []; servers: string[]; paths: string[] }): Array<ExtractPathType> => {
    const variables: any = {}

    const defaultBasePath = basePath(servers, variables)
    const defaultSecurity = normaliseSecurity(security)

    const reduceRoutes = (acc: any, elem: string): {} => {
        METHODS.forEach(method => {
            const op = paths[elem][method]
            if (!op) return

            const base =
        (op.servers ? basePath(op.servers, variables) : defaultBasePath) || ''
            const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base

            acc.push({
                method,
                route: normaliseRoute(`${trimmedBase}${elem}`),
                operationId: normaliseOperationId(op.operationId),
                parameters: op.parameters,
                responses: op.responses,
                body: op.requestBody && op.requestBody.content['application/json'].schema,
                security: op.security && op.security.length ? normaliseSecurity(op.security) : defaultSecurity
            })
        })

        return acc
    }

    return Object.keys(paths).reduce(reduceRoutes, [])
}
