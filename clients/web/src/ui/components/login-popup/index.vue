<template>
    <c-custom-modal 
        title="Sign In"
        @close="$store.state.application.activeModal = null"
        v-if="activated"
    >
        <div class="" slot="modal_body" style="width: 100%">
            <c-loading :enabled="loading" />
            
            <div v-if="!loading">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="text" class="form-control" placeholder="E-mail"
                                    name="email" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password"
                                    name="password" v-model="password">
                        </div>
                    </div>
                </div>

                <p class="errors" v-if="errors.length">
                    <br />
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p>
            </div>
        </div>

        <div slot="modal_footer" class="text-right w-100" v-if="!loading">
            <c-button status="plain" @click="$store.commit('application/activateModal', 'register')" style="float: left; margin-right: 20px">Don't have an account? Sign Up</c-button>
            <c-button size="md" @click="next()">Continue</c-button>
        </div>
    </c-custom-modal>
</template>

<script>
    import axios from 'axios'
    import FormData from 'form-data'

    export default {
        props: ['activated'],
        components: {
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-terms-popup': (resolve) => require(['@/ui/components/popups/terms'], resolve),
            'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
            'c-terms-block': (resolve) => require(['@/ui/components/terms-block'], resolve),
            'c-privacy-block': (resolve) => require(['@/ui/components/privacy-block'], resolve)
        },
        data() {
            return {
                errors: [],
                email: null,
                password: null,
                loading: false
            }
        },
        computed: {
        },
        watch: {
            '$store.state.auth.user'(newVal) {
                //this.$router.push({ path: '/' })
                //this.$store.commit('application/activateModal', null)
            }
        },
        methods: {
            next() {
                const { email, password } = this
                this.errors = []
                this.$store.commit('auth/clearAuthenticateError')

                this.loading = true

                if (email
                && password) {
                    this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password })
                        // Just use the returned error instead of mapping it from the store.
                        .catch(error => {
                            // Convert the error to a plain object and add a message.
                            let type = error.className
                            error = Object.assign({}, error)
                            error.message = (type === 'not-authenticated')
                                ? 'Incorrect email or password.'
                                : 'An error prevented login.'
                            this.errors = [error.message]

                            this.loading = false
                        })
                    
                    return
                }

                this.errors.push('Missing fields.')
            },
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup__content {
        background: transparent;
        color: #fff;
        text-align: left;
    }
</style>
