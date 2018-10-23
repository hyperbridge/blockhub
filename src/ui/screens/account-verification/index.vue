<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false">
        <div class="content login-container" id="content">
            <div class="container">
                <div class="col-12">
                    <c-tabs :currentStep="current_step">
                        <c-tab name="Account Verification" :selected="true" :showFooter="true">
                            <div class="tab-container">
                                <div class="tab-card padding-20" v-if="is_verified">
                                    <p>Your account has been verified. You can request approval for additional profiles below.</p>

                                    <div class="profile-picker">
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
                                    </div>

                                    <br />

                                    <c-button @click="verifyIdentity">
                                        Send Verification Request
                                    </c-button>
                                </div>
                                <div class="tab-card padding-20" v-if="is_verifying">
                                    <div class="col-12 mb-4 text-center">
                                        <h2><img src="/static/img/success.png" style="max-width: 40px;" /> Account Verification Requested</h2>
                                        <p>Account is undergoing verification. You can now close this browser tab.</p>
                                        <br />
                                        <p v-if="!been1hour">Something wrong? You can submit again in 1 hour</p>
                                        <p v-if="been1hour">Something wrong? <c-button @click="overrideForm">Show Form</c-button></p>
                                    </div>
                                </div>
                                <div class="tab-card padding-20" v-if="!(is_verified || is_verifying) || been1hour || manual_override">
                                    <div v-if="!verificationLink">
                                        <p>
                                            Submit proof of identity for KYC by providing your legal name, country of residence, and documentation.<br /><br />
                                            KYC stands for Know Your Customer. BlockHub is required by law to collect this information so that we know the source of money and comply with anti-money laundering laws by assessing potential risks of illegal intentions. As we are handling cryptocurrencies, account holders are entirely unknown, and we want to be very safe by following strict KYC procedure. We do anticipate these procedures can be relaxed post-launch, and will work with our lawyers on that, as our token represents the same utility as many existing point systems.<br /><br />
                                            Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your identity verification. You will need to use the same information as you've used here.<br /><br />
                                            <strong>Disclaimer:</strong> We're working with our lawyers in multiple jurisdictions to determine which countries can purchase. As of this moment we know for certain these countries cannot participate: China, Canada. We're very sorry and hope we can extend support worldwide in the future.
                                        </p>
                                        <br /><br />

                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Given Name</label>
                                                    <input type="text" class="form-control" placeholder="Given Name"
                                                            name="first_name" v-model="first_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Family Name</label>
                                                    <input type="text" class="form-control" placeholder="Family Name"
                                                            name="last_name" v-model="last_name">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">E-mail</label>
                                                    <input type="text" class="form-control" placeholder="E-mail"
                                                            name="email" v-model="email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Document Type</label>
                                                    <select id="document_type" name="document_type" class="form-control" v-model="document_type">
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
                                                            name="documentNumber" v-model="document_number">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Ethereum Public Address</label>
                                                    <input type="text" class="form-control" placeholder="Ethereum Public Address"
                                                            name="public_address" v-model="public_address">
                                                </div>
                                            </div>
                                        </div>

                                        <br />
                                        <p class="errors" v-if="errors.length">
                                            <strong>Please correct the following error(s):</strong>
                                            <ul>
                                                <li v-for="error in errors" :key="error">{{ error }}</li>
                                            </ul>
                                        </p>
                                        <br />
                                        
                                        <c-button
                                            class="c-btn-lg"
                                            @click="verifyAccount()"
                                        >Start Verification</c-button>
                                    </div>
                                    <div v-if="verificationLink">
                                        <p>Great. We've told Veriff you're coming!</p>

                                        <c-button
                                            class="c-btn-lg"
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
            const account = this.$store.state.application.account

            let been1hour = false

            if (account.verification_timestamp) {
                been1hour = (Math.abs(new Date() - new Date(account.verification_timestamp)) / 36e5) > 1
            }

            return {
                errors: [],
                identities: { ...account.identities },
                chosenIdentity: null,
                manual_override: false,
                been1hour: been1hour,
                document_type: '',
                document_number: '',
                email: account.email,
                first_name: account.first_name,
                last_name: account.last_name,
                public_address: account.public_address,
                account: account,
                is_verified: account.is_verified, //account.is_verified,
                is_verifying: account.is_verifying,
                verification_timestamp: account.verification_timestamp,
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
                // manual override for now lol
                this.manual_override = true
            },
            verifyAccount() {
                if (
                    this.first_name
                    && this.last_name
                    && this.email
                    && this.document_type
                    && this.document_number
                    && this.public_address
                ) {
                    const data = {
                        verification: {
                            features: [ 'selfid' ],
                            callback: window.location.href + '',
                            person: {
                                firstName: this.first_name,
                                lastName: this.last_name,
                                idNumber: this.document_number
                            },
                            additionalData: {
                                eth: this.public_address,
                                email: this.email,
                                secret: this.account.secret_answer_2,
                                identity: this.account.current_identity && this.account.current_identity.public_address
                            },
                            timestamp: (new Date).toISOString()
                        }
                    }

                    axios({
                        method: 'post',
                        url: 'https://magic.veriff.me/v1/sessions',
                        data: data,
                        headers: {
                            'x-auth-client': 'a5464742-28a4-42d0-8105-4ef414341214',
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

                if (!this.first_name) {
                    this.errors.push('First Name required.')
                }
                if (!this.last_name) {
                    this.errors.push('Last Name required.')
                }
                if (!this.document_type) {
                    this.errors.push('Document Type required.')
                }
                if (!this.document_number) {
                    this.errors.push('Document Number required.')
                }
                if (!this.public_address) {
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

    p {
        font-size: 14px;
        line-height: 18px;
    }


    .profile-picker {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }

    .profile-picker__profile {
        position: relative;
        margin: 10px 2%;
        width: 46%;
        &:hover .profile__action, &.edit .profile__action {
            display: flex;
        }
        >.default {
            $defColor: #43C981;
            border-color: $defColor !important;
            &:before {
                content: "";
                width: 26px;
                position: absolute;
                border-radius: 5px 0 0 5px;
                left: -22px;
                bottom: -1px;
                height: calc(100% + 2px);
                background: $defColor;
            }
            &:after {
                font-family: 'Font Awesome 5 Free', 'Barlow', sans-serif;
                content: "CHOSEN \F14A";
                color: #1C2032;
                font-weight: bold;
                font-size: 16px;
                position: absolute;
                transform: rotate(-90deg);
                top: 40px;
                left: -50px;
            }
        }
    }

    .profile__action {
        display: none;
        position: absolute;
        justify-content: center;
        bottom: -20px;
        width: 100%;
        height: 26px;
        .c-btn {
            margin: 0 5px;
        }
    }

</style>


