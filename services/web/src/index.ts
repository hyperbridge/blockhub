import createApp from './create-app'

createApp()
    .then(app => app.listen(process.env.PORT))
    .then(app => {
        console.log('Server started')
        return app
    })
    .catch(err => {
        console.error('caught error', err)
    })
