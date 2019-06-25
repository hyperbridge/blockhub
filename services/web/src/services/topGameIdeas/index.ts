export default function(app) {
    const paginate = app.get('paginate')

    class Service {
        options: Object

        constructor() {
            this.options = {
                paginate: {
                    default: 10,
                    max: 25,
                    ...paginate
                }
            }
        }

        async find(params) {
            return [
                'sss'
            ]
        }
    }

    app.use('topGameIdeas', new Service())
}