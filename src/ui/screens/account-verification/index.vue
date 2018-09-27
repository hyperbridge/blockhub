<template>
    <c-layout navigationKey="account-navigation">
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
                                    <p>
                                        Submit a proof of identity by providing your legal name, country of residence, and government identification number.<br />
                                        KYC stands for Know Your Customer. BlockHub is required by law to collect this information, so that we know the source of money (money laundering prevention).
                                    </p>
                                    <div v-if="!verificationLink">
                                        <p>Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your identity verification. For "Id number" use the same government ID number you will use for the next step.</p>
                                        <div id="veriff-root"></div>
                                    </div>
                                    <div v-if="verificationLink">
                                        <c-button
                                            :href="verificationLink"
                                            target="_blank"
                                            icon="angle-right"
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

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve)
        },
        data() {
            return {
                errors: [],
                installed: {
                    veriff: false
                },
                verificationLink: null
            }
        },
        methods: {
            signIn() {
                this.$store.dispatch('network/signIn')

                this.$router.push('/store')
            },
            installVeriff() {
                if (this.installed.veriff) return

                const veriff = Veriff({
                    env: 'production', // or 'staging'
                    apiKey: 'ceba96be-5fd6-48ed-87d6-e5aaf80f9718',
                    parentId: 'veriff-root',
                    onSession: (err, response) => {
                        if (!response || err) {
                            this.errors.push('Could not contact verification service. Please contact support. ' + JSON.stringify(err))
                        }

                        this.verificationLink = response.verification.url
                    }
                })

                veriff.mount()

                this.installed.veriff = true
            }
        },
        updated: function () {
            this.$nextTick(() => {
                this.installVeriff()
            })
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


