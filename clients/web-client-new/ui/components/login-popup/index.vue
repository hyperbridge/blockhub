<template>
    <c-custom-modal
        v-if="activated"
        title="Sign In"
        @close="$store.state.application.activeModal = null">
        <div slot="modalBody"
             class=""
             style="width: 100%">
            <c-loading :enabled="loading"
                       size="lg" />

            <div v-if="!loading">
                <div class="row">
                    <div class="col-12"
                         style="text-align: center">
                        <h2>Sign in to BlockHub</h2>
                    </div>
                </div>
                <div v-darklaunch="`SOCIAL_SIGNIN`"
                     class="row">
                    <div class="col-12">
                        <c-button status="second-info"
                                  size="xl"
                                  centered
                                  class="mb-3"
                                  style="display: block">
                            Sign in with Twitter
                        </c-button>
                        <c-button status="second-info"
                                  size="xl"
                                  centered
                                  class="mb-3"
                                  style="display: block">
                            Sign in with Facebook
                        </c-button>
                    </div>
                </div>
                <div v-darklaunch="`SOCIAL_SIGNIN`"
                     class="row mb-3">
                    <div class="col-12">
                        <c-heading-bar-color colorCode="#fff"
                                             textAlign="center">
                            or sign in with email
                        </c-heading-bar-color>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input v-model="email"
                                   type="text"
                                   class="form-control"
                                   placeholder="E-mail"
                                   name="email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="password"
                                   type="password"
                                   class="form-control"
                                   placeholder="Password"
                                   name="password"
                                   @keyup.enter="next()">
                        </div>
                    </div>
                </div>

                <p v-if="errors.length"
                   class="errors">
                    <br>
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li v-for="error in errors"
                            :key="error">
                            {{ error }}
                        </li>
                    </ul>
                </p>
            </div>
        </div>

        <div v-if="!loading"
             slot="modalFooter"
             class="text-right w-100">
            <c-button status="plain"
                      style="float: left; margin-right: 20px"
                      @click="$store.commit('application/activateModal', 'register')">
                Don't have an account? Sign Up
            </c-button>
            <c-button size="md"
                      @click="next()">
                Sign In
            </c-button>
        </div>
    </c-custom-modal>
</template>

<script>
import axios from 'axios'
import FormData from 'form-data'

export default {
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
    props: ['activated'],
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

            if (email &&
                password) {
                this.$store.dispatch('application/login', { email, password })
                    .then(res => {
                        this.$store.commit('application/activateModal', null)
                        this.loading = false

                        if (this.$route.query.redirect) {
                            this.$router.push(this.$route.query.redirect)
                        }
                    })
                // Just use the returned error instead of mapping it from the store.
                    .catch(error => {
                        // Convert the error to a plain object and add a message.
                        const type = error.className
                        error = Object.assign({}, error)
                        error.message = type === 'not-authenticated'
                            ? 'Incorrect email or password.'
                            : 'An error prevented login.'
                        this.errors = [error.message]

                        this.loading = false
                    })

                return
            }

            this.errors.push('Missing fields.')
        }
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
