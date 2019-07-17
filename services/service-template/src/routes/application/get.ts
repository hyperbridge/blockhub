import Application from '../../models/Application'

export const operationId = 'applicationGet'
export const run = async (options, db, req, res): Promise<any> => {
    const { applicationId } = req.params

    if (!req.$can('application.read', applicationId)) return res.unauthorized()

    const application = await Application.query().findById(applicationId)
    if (!application) return res.status(404).end()

    const { name, logo } = application

    return res.data({
        applicationId,
        name,
        logo
    })
}
