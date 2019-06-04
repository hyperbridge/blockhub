<template>
    <c-custom-modal
        v-if="activated"
        title="Sign Up"
        @close="$store.state.application.activeModal = null">
        <div
            slot="modalBody"
            class=""
            style="width: 100%">
            <c-loading
                :enabled="loading"
                size="lg" />

            <div v-if="!loading">
                <p hidden>
                    To manage your product listing, you'll need to verify your connection with this company. <br>
                    What you'll get with verification:
                    <br><br>
                    <i class="fas fa-check" /> Allow new customers to find you on BlockHub Search<br>
                    <i class="fas fa-check" /> Promote your business with bounties<br>
                    <i class="fas fa-check" /> Track product analytics to understand your customers<br>
                    <i class="fas fa-check" /> Respond to customer reviews<br>
                    <i class="fas fa-check" /> And much more<br>
                    <br>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input
                                v-model="email"
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
                            <input
                                v-model="password"
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                name="password"
                                @keyup.enter="next()">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label>Repeat Password</label>
                            <input
                                v-model="repeatPassword"
                                type="password"
                                class="form-control"
                                placeholder="Repeat Password"
                                name="repeatPassword"
                                @keyup.enter="next()">
                        </div>
                    </div>
                </div>
                <div
                    class="row"
                    hidden>
                    <div class="col">
                        <c-switch
                            v-model="agreement"
                            label_position="right"
                            :customLabel="true">
                            <template slot="label">
                                I agree to the
                                <c-button
                                    status="plain"
                                    @click="terms = true">
                                    terms
                                </c-button> and
                                <c-button
                                    status="plain"
                                    @click="privacy = true">
                                    privacy policy
                                </c-button>
                            </template>
                        </c-switch>
                    </div>
                </div>

                <p
                    v-if="errors.length"
                    class="errors">
                    <br>
                    <strong>Please correct the following error(s):</strong>
                    <ul>
                        <li
                            v-for="error in errors"
                            :key="error">
                            {{ error }}
                        </li>
                    </ul>
                </p>
            </div>
        </div>

        <div
            v-if="!loading"
            slot="modalFooter"
            class="text-right w-100">
            <c-button
                status="plain"
                style="float: left"
                @click="$store.commit('application/activateModal', 'login')">
                Already registered? Sign In
            </c-button>
            <c-button
                size="md"
                @click="next()">
                Continue
            </c-button>
        </div>

        <c-terms-popup
            title="Terms"
            :activated="terms"
            width="800"
            @close="terms = false">
            <div
                slot="header"
                class="h4">
                Terms and Conditions for BlockHub
            </div>
            <div slot="body">
                <div class="termsBlock">
                    <c-terms-block />
                </div>
            </div>
        </c-terms-popup>

        <c-terms-popup
            title="Privacy"
            :activated="privacy"
            width="800"
            @close="privacy = false">
            <div
                slot="header"
                class="h4">
                Privacy Policy for BlockHub
            </div>
            <div slot="body">
                <div class="termsBlock">
                    <c-privacy-block />
                </div>
            </div>
        </c-terms-popup>
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
        'c-terms-block': () => import('~/components/terms-block').then(m => m.default || m),
        'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
    },
    props: ['activated'],
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            repeatPassword: null,
            loading: false,
            agreement: null,
            terms: null,
            privacy: null
        }
    },
    methods: {
        next() {
            const { email, password } = this
            this.errors = []
            this.$store.commit('accounts/clearCreateError')

            this.loading = true

            if (email &&
                password) {
                // Automatically log the user in after successful signup.
                this.$store.dispatch('accounts/create', { email, password })
                    .then(res => {
                        this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password })
                        this.$store.commit('application/activateModal', null)
                        this.loading = false
                    })
                // .then(response => this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password }))
                // Just use the returned error instead of mapping it from the store.
                    .catch(error => {
                        // Convert the error to a plain object and add a message.
                        const type = error.errorType
                        error = Object.assign({}, error)
                        error.message = type === 'uniqueViolated'
                            ? 'That email address is unavailable.'
                            : 'An error prevented signup.'
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
