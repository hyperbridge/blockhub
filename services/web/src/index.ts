import createApp from './create-app'

createApp()
    .then(app => app.listen(process.env.PORT))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })