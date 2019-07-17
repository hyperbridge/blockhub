export default security => (security
    ? security[0].default.reduce((res, cur) => {
        res[cur] = true
        return res
    }, {})
    : null)
