export default function(app) {
    const paginate = app.get('paginate')

    class Service {
        constructor () {
            this.options = {
                paginate: {
                    default: 10,
                    max: 25,
                    ...paginate
                }
            }
        }
        
        async get (id, params) {
            return {
                id
            }
        }
    }

    app.use('topGameIdeas', new Service())
}