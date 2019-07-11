export default function (app): any {
    const paginate = app.get('paginate')

    class Service {
        public options: Record<string, any>

        public constructor () {
            this.options = {
                paginate: {
                    default: 10,
                    max: 25,
                    ...paginate
                }
            }
        }

        public async find (params): Promise<any> {
            return [
                'sss'
            ]
        }
    }

    app.use('topGameIdeas', new Service())
}
