<template>
    <div>{{ type }}
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
                satisfied: false
            }
        },
        created() {
            if (this.$store.state.auth.accessToken) {
                this.initialize()
            } else {
                this.$store.dispatch('auth/authenticate')
                    .then(() => {
                        this.initialize()
                    })
                    .catch(error => {
                        this.initialize()

                        if (error) {
                            if (!error.message.includes('Could not find stored JWT')) {
                                console.error(error)
                            }
                            return
                        }

                    })
            }
        },
        watch: {
            '$store.state.auth.user'(newVal) {console.log(4444444)
                if (newVal) {
                    if (this.type === 'user') {
                        this.satisfied = true
                    }
                }
            },
            '$store.state.auth.accessToken'() {
                this.initialize()
            }
        },
        computed: {
        },
        methods: {
            initialize() {
                if (this.initialized) {
                    return
                }

                this.initialized = this.$store.state.application.initialized = BlockHub.initialized = true

                if (this.type === 'initialized') {
                    this.satisfied = true
                }
            },
        }
    }
</script>
