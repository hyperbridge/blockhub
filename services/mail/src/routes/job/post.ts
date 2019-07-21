import now from '../../utils/time/now'

export const operationId = 'jobCreate'
export const run = async (options, db, req, res): Promise<any> => {
    const { email, firstName, lastName } = req.body

    return res.data({
        success: true
    })
}
