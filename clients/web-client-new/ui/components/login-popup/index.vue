<template>
    <c-custom-modal 
        title="Sign In"
        @close="$store.state.application.activeModal = null"
        v-if="activated"
    >
        <div class="" slot="modalBody" style="width: 100%">
            <c-loading :enabled="loading" size="lg" />
            
            <div v-if="!loading">
                <div class="row">
                    <div class="col-12" style="text-align: center">
                        <h2>Sign in to BlockHub</h2>
                    </div>
                </div>
                <div class="row" v-darklaunch="`SOCIAL_SIGNIN`">
                    <div class="col-12">
                        <c-button status="second-info" size="xl" centered class="mb-3" style="display: block">
                            Sign in with Twitter
                        </c-button>
                        <c-button status="second-info" size="xl" centered class="mb-3" style="display: block">
                            Sign in with Facebook
                        </c-button>
                    </div>
                </div>
                <div class="row mb-3" v-darklaunch="`SOCIAL_SIGNIN`">
                    <div class="col-12">
                        <c-heading-bar-color colorCode="#fff" textAlign="center">or sign in with email</c-heading-bar-color>
                    </div>
                </div>
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
                                    name="password" v-model="password" @keyup.enter="next()">
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

        <div slot="modalFooter" class="text-right w-100" v-if="!loading">
            <c-button status="plain" @click="$store.commit('application/activateModal', 'register')" style="float: left; margin-right: 20px">Don't have an account? Sign Up</c-button>
            <c-button size="md" @click="next()">Sign In</c-button>
        </div>
    </c-custom-modal>
</template>

<script>
    import axios from 'axios'
    import FormData from 'form-data'

    export default {
        props: ['activated'],
        components: {
            'c-popup': () => import('~/components/popups').then(m => m.default || m),
            'c-terms-popup': () => import('~/components/popups/terms').then(m => m.default || m),
            'c-custom-modal': () => import('~/components/modal/custom').then(m => m.default || m),
            'c-tabs': () => import('~/components/tab/tabs-universal').then(m => m.default || m),
            'c-tab': () => import('~/components/tab/tab-universal').then(m => m.default || m),
            'c-heading-bar-color': () => import('~/components/heading-bar/simple-colored').then(m => m.default || m),
            'c-terms-block': () => import('~/components/terms-block').then(m => m.default || m),
            'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
        },
        data() {
            return {
                errors: [],
                email: null,
                password: null,
                loading: false
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
                        .then((res) => {
                            this.$store.commit('application/activateModal', null)
                            this.loading = false

                            if (this.$route.query.redirect) {
                                this.$router.push(this.$route.query.redirect)
                            }
                        })
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
