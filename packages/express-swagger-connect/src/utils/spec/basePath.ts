import substituteVariables from './substituteVariables'

export default (servers: Array<any>, variables: {}): string | null => (Array.isArray(servers)
    ? servers.reduce(
        (acc, { url }) =>
            (acc !== '' || !url.startsWith('/')
                ? acc
                : substituteVariables(url, variables)),
        ''
    )
    : null)
