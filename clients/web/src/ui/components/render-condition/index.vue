<template>
    <div>
        <slot v-if="satisfied" />
    </div>
</template>

<script>
    export default {
        props: ['type'],
        components: {
        },
        data() {
            return {
                initialized: false,
                satisfied: false
            }
        },
        created() {
            if (this.$store.state.auth.accessToken) {
                this.authenticate()
            } else {
                this.$store.dispatch('auth/authenticate')
                    .then(() => {
                        this.authenticate()
                    })
                    .catch(error => {
                        if (error && !error.message.includes('Could not find stored JWT')) {
                            console.error(error)
                        }
                    })
            }

            //setTimeout(this.initialize.bind(this), 3000) // TODO: remove arbitrary delay
        },
        watch: {
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
                }
            }
        },
        computed: {
        },
        methods: {
            authenticate() {
                if (this.type === 'authenticated') {
                    this.satisfied = true
                }

                this.initialize()
            },
            initialize() {
                if (this.initialized) {
                    return
                }

                this.initialized = BlockHub.initialized = true

                this.$store.commit('updateSingle', ['application/initialized', true])

                if (this.type === 'initialized') {
                    this.satisfied = true
                }
            },
        }
    }
</script>
