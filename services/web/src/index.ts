import createApp from './create-app'

createApp()
    .then(app => app.listen(9001))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })