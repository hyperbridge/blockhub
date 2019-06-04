export const service = serviceKey => {
    console.log(`[BlockHub] Service: ${serviceKey}`)

    if (BlockHub.Bridge.isConnected()) { // && BlockHub.Bridge.canFulfillRequest(endpoint
        return {
            find(params) {
                BlockHub.Bridge.sendCommand('service', {
                    service,
                    type: 'find',
                    params
                })
            }
        }
    }
    return BlockHub.WebClient.service(serviceKey)
}
