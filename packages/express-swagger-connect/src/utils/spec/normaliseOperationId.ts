export default (operationId: string): string | null =>
    (operationId ? operationId.replace(/\//g, '_') : null)
