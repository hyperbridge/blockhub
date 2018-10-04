<template>
    <c-layout navigationKey="account-navigation" :showLeftPanel="false" :showRightPanel="false">
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <p class="errors" v-if="errors.length">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <c-tabs :currentStep="current_step">
                        <c-tab name="Account Verification" :selected="true" :showFooter="true">
                            <div class="tab-container">
                                <div class="tab-card padding-20">
                                    <h3>Verify your identity (KYC)</h3>
                                    <div v-if="!verificationLink">
                                        <p>
                                            Submit proof of identity by providing your legal name, country of residence, and documentation.<br />
                                            KYC means Know Your Customer. BlockHub is required by law to collect this information so that we know the source of money (money laundering prevention). This is important particularly because we're working with cryptocurrencies, with unknown account holders.
                                        </p>
                                        <p>Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your identity verification. You will need to use the same information as you've used here.</p>
                                        <br /><br />

                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">First Name</label>
                                                    <input type="text" class="form-control" placeholder="First Name"
                                                            name="first_name" v-model="account.first_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Last Name</label>
                                                    <input type="text" class="form-control" placeholder="Last Name"
                                                            name="last_name" v-model="account.last_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Document Type</label>
                                                    <select id="document_type" name="document_type" class="form-control" v-model="account.document_type">
                                                        <option value="" selected>Choose Document Type</option>
                                                        <option value="government_id">Government ID</option>
                                                        <option value="passport">Passport</option>
                                                        <option value="drivers_license">Drivers License</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Document Number</label>
                                                    <input type="text" class="form-control" placeholder="Document Number"
                                                            name="documentNumber" v-model="account.document_number">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Ethereum Public Address</label>
                                                    <input type="text" class="form-control" placeholder="Ethereum Public Address"
                                                            name="public_address" v-model="account.public_address">
                                                </div>
                                            </div>
                                        </div>

                                        <br /><br />
                                        <c-button
                                            @click="startVerification()"
                                        >Start Verification</c-button>
                                    </div>
                                    <div v-if="verificationLink">
                                        <p>Great. We've told Veriff you're coming!</p>

                                        <c-button
                                            :href="verificationLink"
                                            v-if="verificationLink"
                                        >Continue to Veriff</c-button>
                                    </div>
                                </div>
                            </div>
                        </c-tab>
                    </c-tabs>
                </div>
            </div>
        </div>
    </c-layout>
</template>


<script>
    import Veriff from '@veriff/js-sdk'
    import axios from 'axios'

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve)
        },
        data() {
            return {
                errors: [],
                account: {
                    first_name: this.$store.state.application.account.first_name,
                    last_name: this.$store.state.application.account.last_name,
                    public_address: this.$store.state.application.account.public_address,
                    document_type: '',
                    document_number: ''
                },
                verificationLink: null
            }
        },
        methods: {
            signIn() {
                this.$store.dispatch('application/signIn')

                this.$router.push('/')
            },
            startVerification() {
                if (
                    this.account.first_name
                    && this.account.last_name
                    && this.account.document_type
                    && this.account.document_number
                    && this.account.public_address
                ) {
                    const data = {
                        verification: {
                            features: [ 'selfid' ],
                            person: {
                                firstName: this.account.first_name,
                                lastName: this.account.last_name,
                                idNumber: this.account.document_number
                            },
                            additionalData: {
                                eth: this.account.public_address,
                                secret: this.$store.state.application.account.secret_answer_2
                            },
                            timestamp: (new Date).toISOString()
                        }
                    }

                    axios({
                        method: 'post',
                        url: 'https://magic.veriff.me/v1/sessions',
                        data: data,
                        headers: {
                            'x-auth-client': 'ceba96be-5fd6-48ed-87d6-e5aaf80f9718',
                            'Accept': 'application/json, text/plain, */*'
                        }
                    })
                    .then((res) => {
                        this.verificationLink = res.data.verification.url
                    })
                    .catch((err) => {
                        this.errors.push('Could not contact verification service. Please contact support with this error: ' + JSON.stringify(err))
                    })

                    return
                }

                if (!this.account.first_name) {
                    this.errors.push('First Name required.')
                }
                if (!this.account.last_name) {
                    this.errors.push('Last Name required.')
                }
                if (!this.account.document_type) {
                    this.errors.push('Document Type required.')
                }
                if (!this.account.document_number) {
                    this.errors.push('Document Number required.')
                }
                if (!this.account.public_address) {
                    this.errors.push('Ethereum Public Address required.')
                }
            }
        }
    }
</script>


<style lang="scss">
    .tab-card {
        background: #383853;
        border-radius: 5px;
        padding: 8px 10px;
        border: 1px solid #373752;
        margin-bottom: 15px;
        &:last-child {
            margin: 0;
        }
        input {
            border: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
            background: #303049;
        }
    }
    .veriff-container {
        margin-top: 10px;

        input {
            order: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.4) inset;
            background: #303049;
            color: #dfdfe9;
        }
    }

</style>


