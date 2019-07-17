import now from '../../utils/time/now'
import Application from '../../models/Application'

export const operationId = 'applicationCreate'
export const run = async (options, db, req, res): Promise<any> => {
    const { name, logo } = req.body

    if (!req.$can('application.create')) return res.unauthorized()

    const data = {
        name,
        logo,
        type: 'app',
        createdAt: now(),
        createdBy: req.user.userId
    }

    const application = await Application.query().insertGraph(data)

    return res.data({
        applicationId: application.applicationId
    })
}
