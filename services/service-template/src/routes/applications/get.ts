import Application from '../../models/Application'

export const operationId = 'applicationsGet'
export const run = async (options, db, req, res): Promise<any> => {
    const user = req.user

    const applications = await Application.query()
        .mergeContext({ user })
        .modify('permission')

    const applicationIds = applications.map(a => a.toString())

    // TODO: temp fix for multiple results due to permission
    const onlyUnique = (value, index, self): boolean => applicationIds.indexOf(value.toString()) === index

    return res.data(applications.filter(onlyUnique))
}
