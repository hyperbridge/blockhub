import Job from '../../models/Job'

export const operationId = 'getJob'
export const run = async (options, db, req, res): Promise<any> => {
    const { applicationId } = req.headers
    let { jobId } = req.params
    const { includeDeleted = false } = req.query

    if (!req.$access('job.read', jobId)) return res.unauthorized()

    let job

    if (jobId) {
        job = await Job.query().findById(jobId)
    } else {
        job = await Job.query().where({
            applicationId
        }).first()
    }

    if (!job) return res.status(404).end()

    jobId = job.jobId

    const { type, lang } = job
    let { templates } = job

    if (!includeDeleted) {
        templates = templates.filter(t => !t.deleted)
    }

    return res.data({
        jobId,
        type,
        lang,
        templates
    })
}
