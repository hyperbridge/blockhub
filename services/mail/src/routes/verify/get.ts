export const operationId = 'verify'
export const run = async (options, db, req, res): Promise<any> => res.data({
    userId: req.user.userId,
    username: req.user.username,
    createdAt: req.user.createdAt,
    editedAt: req.user.editedAt,
    passwordEditedAt: req.user.passwordEditedAt,
    meta: req.user.meta,
    roles: req.user.roles
})
