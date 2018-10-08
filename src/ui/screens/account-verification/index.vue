<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false">
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
                                <div class="tab-card padding-20" v-if="account.is_verified">
                                    <p>Your account has been verified!</p>
                                    <p>You can request approval for your identities below.</p>

                                    <div
                                        class="profile-picker__profile"
                                        v-for="identity in identities"
                                        :key="identity.id"
                                    >
                                        <c-user-card
                                            :user="identity"
                                            :previewMode="true"
                                            :class="{ 'default': identity.chosen }"
                                        />
                                        <div class="profile__action">
                                            <c-button
                                                status="info"
                                                icon="check"
                                                @click="chooseIdentity(identity)"
                                                v-if="!identity.chosen"
                                            >Choose</c-button>
                                        </div>
                                    </div>

                                    <c-button @click="verifyIdentity">
                                        Send Verification Request
                                    </c-button>
                                </div>
                                <div class="tab-card padding-20" v-if="account.is_verifying">
                                    <p>Your account is undergoing verification!</p>
                                    <p v-if="!been1hour">Something wrong? You can submit again in 1 hour</p>
                                    <p v-if="been1hour">Something wrong? <c-button @click="overrideForm">Show Form</c-button></p>
                                </div>
                                <div class="tab-card padding-20" v-if="!(account.is_verified || account.is_verifying) || !manual_override">
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
                                            @click="verifyAccount()"
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
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        },
        data() {
            let been1hour = true

            if (this.$store.state.application.account.verification_timestamp) {
                been1hour = (Math.abs(new Date() - new Date(this.$store.state.application.account.verification_timestamp)) / 36e5) > 1
            }
been1hour = true
            return {
                errors: [],
                identities: {...this.$store.state.application.identities},
                chosenIdentity: null,
                manual_override: false,
                been1hour: been1hour,
                account: {
                    first_name: this.$store.state.application.account.first_name,
                    last_name: this.$store.state.application.account.last_name,
                    public_address: this.$store.state.application.account.public_address,
                    document_type: '',
                    document_number: '',
                    is_verified: true, //this.$store.state.application.account.is_verified,
                    is_verifying: this.$store.state.application.account.is_verifying,
                    verification_timestamp: this.$store.state.application.account.verification_timestamp
                },
                verificationLink: null
            }
        },
        methods: {
            overrideForm() {
                this.manual_override = true
            },
            chooseIdentity(identity) {
                if (this.chosenIdentity) this.chosenIdentity.chosen = false;
                identity.chosen = true;
            },
            verifyIdentity() {
                // send a contract call
                // encrypt identity with the secret answer #2
            },
            verifyAccount() {
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
                            callback: window.location.href + '',
                            person: {
                                firstName: this.account.first_name,
                                lastName: this.account.last_name,
                                idNumber: this.account.document_number
                            },
                            additionalData: {
                                eth: this.account.public_address,
                                secret: this.$store.state.application.account.secret_answer_2,
                                identity1: this.$store.state.application.account.current_identity && this.$store.state.application.account.current_identity.public_address
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
                        BlockHub.DB.application.config.data[0].account.is_verifying = true
                        BlockHub.DB.application.config.data[0].account.verification_timestamp = new Date()
                        BlockHub.DB.save()

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


