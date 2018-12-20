<template>
    <c-custom-modal 
        title="Sign Up"
        @close="$store.state.application.activeModal = null"
        v-if="activated"
    >
        <div class="" slot="modal_body" style="width: 100%">
            <c-loading :enabled="loading" />
            
            <div v-if="!loading">
                <p hidden>
                    To manage your product listing, you'll need to verify your connection with this company. <br />
                    What you'll get with verification:
                    <br /><br />
                    <i class="fas fa-check"></i> Allow new customers to find you on BlockHub Search<br />
                    <i class="fas fa-check"></i> Promote your business with bounties<br />
                    <i class="fas fa-check"></i> Track product analytics to understand your customers<br />
                    <i class="fas fa-check"></i> Respond to customer reviews<br />
                    <i class="fas fa-check"></i> And much more<br />
                    <br />
                </p>
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
                    <div class="col">
                        <div class="form-group">
                            <label>Repeat Password</label>
                            <input type="password" class="form-control" placeholder="Repeat Password"
                                    name="repeatPassword" v-model="repeatPassword">
                        </div>
                    </div>
                </div>
                <div class="row" hidden>
                    <div class="col">
                        <c-switch
                            v-model="agreement"
                            label_position="right"
                            :customLabel="true"
                        >
                            <template slot="label">
                                I agree to the
                                <c-button status="plain" @click="terms = true">terms</c-button> and
                                <c-button status="plain" @click="privacy = true">privacy policy</c-button>
                            </template>
                        </c-switch>
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
            <c-button status="plain" @click="$store.commit('application/activateModal', 'login')" style="float: left">Already registered? Sign In</c-button>
            <c-button size="md" @click="next()">Continue</c-button>
        </div>
        
        <c-terms-popup title="Terms" :activated="terms" @close="terms = false" width="800">
            <div class="h4" slot="header">Terms and Conditions for BlockHub</div>
            <div slot="body">
                <div class="terms_block">
                    <c-terms-block />
                </div>
            </div>
        </c-terms-popup>

        <c-terms-popup title="Privacy" :activated="privacy" @close="privacy = false" width="800">
            <div class="h4" slot="header">Privacy Policy for BlockHub</div>
            <div slot="body">
                <div class="terms_block">
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
                repeatPassword: null,
                loading: false,
                agreement: null,
                terms: null,
                privacy: null
            }
        },
        watch: {
            '$store.state.application.signedIn'(newVal) {
                if (newVal === true) {
                    //this.$router.push({ path: '/' })
                }
            }
        },
        computed: {
        },
        methods: {
            next() {
                const { email, password } = this
                this.errors = []
                this.$store.commit('accounts/clearCreateError')

                this.loading = true

                if (email
                && password) {
                    // Automatically log the user in after successful signup.
                    this.$store.dispatch('accounts/create', { email, password })
                        .then(response => this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password }))
                        // Just use the returned error instead of mapping it from the store.
                        .catch(error => {
                            // Convert the error to a plain object and add a message.
                            let type = error.errorType
                            error = Object.assign({}, error)
                            error.message = (type === 'uniqueViolated')
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
