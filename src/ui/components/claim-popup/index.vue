<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="550" @close="$emit('close')">
        <div slot="custom_close" hidden></div>
        <div class="c-popup__content" slot="custom_content">
            <c-tabs
                :active_tab_prop="currentStep"
                @click="changeTab($event)"
            >
                <c-tab name="Done" :tab_id="2" :selected="true" :showFooter="true" v-if="complete">
                    <div>
                        <p>Product verification request has been submit. We'll be in touch soon. Thank you!</p>
                    </div>
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div class="text-right w-100">
                            <c-button status="success" icon_hide @click="$emit('close')">
                                OK
                            </c-button>
                        </div>
                    </div>
                </c-tab>
                <c-tab name="Product Verification" :tab_id="1" :selected="true" :showFooter="true" v-if="!complete">
                    <div>
                        <p>
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
                                <p>What's the name of your company?</p>
                                <div class="form-group">
                                    <label class="sr-only">Company Name</label>
                                    <input type="text" class="form-control" placeholder="Company Name"
                                            name="companyName" v-model="companyName">
                                </div>
                            </div>
                            <div class="col">
                                <p>What's the name of your product?</p>
                                <div class="form-group">
                                    <label class="sr-only">Product Name</label>
                                    <input type="text" class="form-control" placeholder="Product Name"
                                            name="productName" v-model="productName">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>What's your developer profile address?</p>
                                <div class="form-group">
                                    <label class="sr-only">Developer Profile Address</label>
                                    <input type="text" class="form-control" placeholder="Developer Profile Address"
                                            name="developerProfileAddress" v-model="developerProfileAddress">
                                </div>
                                <c-button class="underline" @click="$store.commit('application/showProfileChooser', true)">Choose Different Profile</c-button>
                            </div>
                        </div>
                        <div class="row" hidden>
                            <div class="col">
                                <br /><br />
                                <p>By continuing you agree to the following Terms and Services and Privacy Policy</p>
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
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div class="text-right w-100">
                            <c-button @click="$emit('close')">Cancel</c-button>
                            <c-button status="success" icon_hide @click="nextStep()">
                                Continue
                            </c-button>
                        </div>
                    </div>
                </c-tab>
                <c-tab name="Contact" :tab_id="2" :showFooter="true" v-if="!complete">
                    <div>
                        <div class="row">
                            <div class="col">
                                <p>Website URL</p>
                                <div class="form-group">
                                    <label class="sr-only">Website URL</label>
                                    <input type="text" class="form-control" placeholder="Website URL"
                                            name="companyWebsite" v-model="companyWebsite">
                                </div>
                            </div>
                            <div class="col">
                                <p>Contact Name</p>
                                <div class="form-group">
                                    <label class="sr-only">Contact Name</label>
                                    <input type="text" class="form-control" placeholder="Contact Name"
                                            name="contactName" v-model="contactName">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>Contact Email</p>
                                <div class="form-group">
                                    <label class="sr-only">Contact Email</label>
                                    <input type="text" class="form-control" placeholder="Contact Email"
                                            name="contactEmail" v-model="contactEmail">
                                </div>
                            </div>
                            <div class="col">
                                <p>Contact Number</p>
                                <div class="form-group">
                                    <label class="sr-only">Contact Number</label>
                                    <input type="text" class="form-control" placeholder="Contact Name"
                                            name="contactNumber" v-model="contactNumber">
                                </div>
                            </div>
                        </div>

                        <p class="errors" v-if="errors.length">
                            <strong>Please correct the following error(s):</strong>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>
                    </div>
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div class="text-right w-100">
                            <c-button @click="$emit('close')">Cancel</c-button>
                            <c-button status="success" icon_hide @click="nextStep()">
                                Finish
                            </c-button>
                        </div>
                    </div>
                </c-tab>
            </c-tabs>
        </div>
    </c-popup>
</template>

<script>
    import axios from 'axios'
    import FormData from 'form-data'

    export default {
        props: ['activated'],
        components: {
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        },
        data() {
            return {
                currentStep: 1,
                complete: false,
                errors: [],
                companyName: null,
                productName: null,
                contactName: null,
                contactNumber: null,
                contactEmail: null,
                companyWebsite: null
            }
        },
        computed: {
            developerProfileAddress() { return this.$store.state.application.account.current_identity.public_address }
        },
        methods: {
            changeTab(step) {
                if (step > this.currentStep) {
                    this.nextStep()
                } else {
                    this.currentStep = step
                }
            },
            nextStep() {
                this.errors = []

                if (this.currentStep === 1) {
                    if (this.companyName
                    && this.productName) {
                        this.currentStep = 2
                        return
                    }

                    this.errors.push('Missing fields.')
                } else if (this.currentStep === 2) {
                    if (this.companyName
                    && this.productName
                    && this.contactName
                    && this.contactNumber
                    && this.contactEmail
                    && this.companyWebsite
                    && this.developerProfileAddres) {
                        const bodyFormData = new FormData()

                        bodyFormData.set('entry.524169597', this.companyName)
                        bodyFormData.set('entry.399172045', this.productName)
                        bodyFormData.set('entry.1527852888', this.contactName)
                        bodyFormData.set('entry.903832048', this.contactNumber)
                        bodyFormData.set('entry.2146275482', this.contactEmail)
                        bodyFormData.set('entry.817087000', this.companyWebsite)
                        bodyFormData.set('entry.199140031', this.developerProfileAddres)

                        axios({
                            method: 'post',
                            url: 'https://docs.google.com/forms/d/1X0LukIIimTL9egE9dbtHYECXG9W-y3HFj_kGRKk7cww/formResponse',
                            data: bodyFormData,
                            config: { headers: {'Content-Type': 'multipart/form-data' } }
                        })
                        .then((res) => {
                            this.complete = true
                        })
                        .catch((err) => {
                            this.errors.push('An error occurred. Please check your input or try again later.')
                        })

                        // $.ajax({
                        //     url: "https://docs.google.com/forms/d/1X0LukIIimTL9egE9dbtHYECXG9W-y3HFj_kGRKk7cww/formResponse",
                        //     data: data,
                        //     type: "POST",
                        //     dataType: "xml",
                        //     statusCode: {
                        //         0: function() {
                        //             //Success message
                        //         },
                        //         200: function() {
                        //             //Success Message
                        //         }
                        //     }
                        // });

                        return
                    }

                    this.errors.push('Missing fields.')
                }
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
