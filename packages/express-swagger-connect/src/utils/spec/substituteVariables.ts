export default (str: string, variables: {}): string => {
    let result = Buffer.from(str).toString()

    Object.keys(variables).forEach(variable => {
        const pattern = new RegExp(`{${variable}}`, 'g')
        result = result.replace(pattern, variables[variable])
    })

    return result
}
