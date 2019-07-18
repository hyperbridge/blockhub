import now from '../../utils/time/now'
import Job from '../../models/Job'
import JobSnapshot from '../../models/JobSnapshot'

export const operationId = 'createJob'
export const run = async (options, db, req, res): Promise<any> => {
    const { lang, templates } = req.body
    const { applicationId } = req.headers

    const jobId = parseInt(applicationId, 10)

    if (!req.$access('job.read', jobId)) return res.unauthorized()

    const data = {
        jobId,
        applicationId,
        type: 'job',
        lang: lang || ['en', 'jp', 'zh'],
        templates: templates || [],
        createdAt: now(),
        createdBy: req.user.userId
    }

    const job = await Job.query().upsertGraph(data, { insertMissing: true })

    await JobSnapshot.query().insertGraph({
        jobId: job.jobId,
        createdAt: now(),
        createdBy: req.user.userId
    })

    return res.data({
        jobId: job.jobId
    })
}
