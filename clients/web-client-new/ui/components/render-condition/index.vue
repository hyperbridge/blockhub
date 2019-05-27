<template>
    <div>
        <slot v-if="satisfied" />
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                validator: (val) => ['initialized', 'authenticated', 'user', 'none'].includes(val)
            }
        },
        components: {
        },
        data() {
            return {
                initialized: false,
                satisfied: false
            }
        },
        async created() {
            this.$store.state.application.signedIn = false
console.log('[BlockHub] Render condition - ' + this.type)
            if (this.type === 'initialized') {
                const jwt = this.$cookies.get('feathers-jwt')

                if (jwt) {
                    await this.authenticate()
                }
                else {
                    await this.initialize()
                    return
                }
            } else if (this.type === 'authenticated') {
                await this.authenticate()
            } else if (this.type === 'user') {
                await this.authenticate()
            }

            this.$store.dispatch('application/authenticate')

            if (this.type === 'user') {
                this.satisfied = true
            }

            if (process.client) {
                await this.$desktop.updateState({
                    module: 'application', 
                    state: {
                        activeProfile: this.$store.state.application.activeProfile,
                        profiles: Object.values(this.$store.state.profiles.keyedById)
                    }
                })
            }
        },
        watch: {
            'satisfied': function() {
                if (process.client) {
                    //document.getElementById('startup-loader').style.display = 'none'
                }
            }
        },
        computed: {
        },
        methods: {
            async authenticate() {
                if (this.$store.state.auth.accessToken) {
                    this.satisfied = true
                } else {
                    await this.$store.dispatch('auth/authenticate', {
                        strategy: 'jwt',
                        accessToken: this.$cookies.get('feathers-jwt'),
                    })
                        .catch(error => {
                            if (error.message.includes('Could not find stored JWT')) {
                                // if (this.type === 'authenticated') {
                                //     this.satisfied = true
                                // }
                                
                                // redirect to access denied screen
                                this.$router.push('/denied')
                                
                                return
                            }
                            
                            console.error(error)

                            return error
                        })

                    this.satisfied = true
                }
            },
            initialize() {
                if (this.initialized) {
                    this.satisfied = true

                    return
                }

                this.initialized = true

                this.$store.dispatch('root/updateSingle', ['application/initialized', true])

                this.satisfied = true
            },
        }
    }
</script>
