// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.
import loggerLib from '../logger'

// To see more detailed messages, uncomment the following line
// logger.level = 'debug'

export default function() {
    return context => {
        // This debugs the service call and a stringified version of the hook context
        // You can customize the mssage (and logger) to your needs
        loggerLib.info(`${context.type} app.service('${context.path}').${context.method}()`)

        if (typeof context.toJSON === 'function') {
            loggerLib.debug('Hook Context', JSON.stringify(context, null, '  '))
        }

        if (context.error) {
            loggerLib.error(context.error)
        }
    }
}