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

            setTimeout(this.initialize.bind(this), 3000) // TODO: remove arbitrary delay
        },
        watch: {
            '$store.state.auth.user'(newVal) {
                if (newVal) {
                    if (this.type === 'user') {
                        this.satisfied = true
                    }
                }
            },
            '$store.state.auth.accessToken'() {
                if (newVal) {
                    this.authenticate()
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
