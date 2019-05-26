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
            if (this.type === 'initialized') {
                await this.initialize()

                return
            } else if (this.type === 'authenticated') {
                await this.authenticate()
            } else if (this.type === 'user') {
                await this.authenticate()
            }

            await this.$store.dispatch('profiles/find', {
                query: {
                    accountId: this.$store.state.auth.user.id,
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })

            this.$store.state.application.activeProfile = this.$store.state.profiles.keyedById[this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.id || 1]
            this.$store.state.application.developerMode = this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.role === 'developer'
            this.$store.state.application.editorMode = 'viewing'
            this.$store.state.application.signedIn = true

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
                    if (this.type === 'authenticated') {
                        this.satisfied = true
                    }
                } else {
                    await this.$store.dispatch('auth/authenticate')
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

                    if (this.type === 'authenticated') {
                        this.satisfied = true
                    }
                }
            },
            initialize() {
                if (this.initialized) {
                    if (this.type === 'initialized') {
                        this.satisfied = true
                    }

                    return
                }

                this.initialized = true

                this.$store.dispatch('root/updateSingle', ['application/initialized', true])

                if (this.type === 'initialized') {
                    this.satisfied = true
                }
            },
        }
    }
</script>
