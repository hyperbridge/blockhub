import Application from '../models/Application'

/* eslint-disable func-names */
export default async function (options, db, req, res, next): Promise<any> {
    req.headers.applicationId = req.headers.applicationid

    if (!options.parameters.filter(p => p.name === 'applicationId' && p.required).length) return next()
    if (!req.headers.applicationId) return res.status(401).json({ message: 'No applicationId supplied' })

    const application = await Application.query().findById(req.headers.applicationId)
    if (!application) return res.status(404).json({ message: 'Application not found' })
    next()
}
