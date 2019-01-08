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
                validator: (val) => ['initialized', 'authenticated', 'user'].includes(val)
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
        created() {
            this.authenticate()

            //setTimeout(this.initialize.bind(this), 3000) // TODO: remove arbitrary delay
        },
        watch: {
            'type'() {
                this.authenticate()
            },
            '$store.state.auth.accessToken'(newVal) {
                if (newVal) {
                    this.authenticate()
                }
            },
            '$store.state.auth.user'(newVal) {
                if (newVal) {
                    this.$store.dispatch('profiles/find', {
                        query: {
                            accountId: this.$store.state.auth.user.id,
                            $sort: {
                                createdAt: -1
                            },
                            $limit: 25
                        }
                    })
                }
            },
            '$store.state.profiles.ids'(newVal) {
                if (newVal) {
                    this.$store.state.application.activeProfile = this.$store.state.profiles.keyedById[this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.id || 1]
                    this.$store.state.application.developerMode = this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.role === 'developer'
                    this.$store.state.application.editorMode = 'viewing'
                    this.$store.state.application.signedIn = true
                    
                    if (this.type === 'user') {
                        this.satisfied = true
                    }

                    window.BlockHub.Bridge.updateState({
                        module: 'application', 
                        state: {
                            activeProfile: this.$store.state.application.activeProfile,
                            profiles: Object.values(this.$store.state.profiles.keyedById)
                        }
                    }).then(() => {})
                }
            }
        },
        computed: {
        },
        methods: {
            authenticate() {
                if (this.$store.state.auth.accessToken) {
                    if (this.type === 'authenticated') {
                        this.satisfied = true
                    }
                } else {
                    this.$store.dispatch('auth/authenticate')
                        .catch(error => {
                            if (error.message.includes('Could not find stored JWT')) {
                                // if (this.type === 'authenticated') {
                                //     this.satisfied = true
                                // }
                                return
                            }
                            
                            console.error(error)

                            return error
                        })
                        .then(() => {
                            if (this.type === 'authenticated') {
                                this.satisfied = true
                            }

                            this.initialize()
                        })
                }
            },
            initialize() {
                if (this.initialized) {
                    if (this.type === 'initialized') {
                        this.satisfied = true
                    }

                    return
                }

                this.initialized = window.BlockHub.initialized = true

                this.$store.commit('updateSingle', ['application/initialized', true])

                if (this.type === 'initialized') {
                    this.satisfied = true
                }
            },
        }
    }
</script>
