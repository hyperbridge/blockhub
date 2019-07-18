/* eslint-disable promise/prefer-await-to-callbacks */
import createApp from './create-app'

createApp()
    .then(app => app.listen(process.env.PORT, '0.0.0.0'))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })
