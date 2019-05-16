export const extract = (object, props) => ['id', 'name', ...props]
    .reduce((extracted, prop) => object[prop]
        ? { ...extracted, [prop]: object[prop] }
        : extracted
    , {})

export const skip = (object, props) => {
    const copy = { ...object }
    for (let prop in props) {
        delete copy[prop]
    }
    return copy
}

export const getId = () => Math.floor(Math.random() * 10000)

export const mergeId = (id, object) => ({ ...object, data: { ...object.data, id }, id })

export const normalize = (data, fn = (i) => i) =>
    (Array.isArray(data) ? data : Object.values(data))
        .reduce((normalized, item, index) => ({
            ...normalized,
            [item.id]: typeof fn === 'function'
                ? { ...item, ...fn(item, index) }
                : { ...item, ...fn }
        }), {})
