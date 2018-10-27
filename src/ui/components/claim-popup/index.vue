<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="550" @close="$emit('close')">
        <div slot="custom_close" hidden></div>
        <div class="c-popup__content" slot="custom_content">
            <c-tabs
                :active_tab_prop="currentStep"
                @click="changeTab($event)"
            >
                <c-tab name="Product Verification" :tab_id="1" :selected="true" :showFooter="true">
                    <div>
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
                                <p>By continuing you agree to the following Terms and Services and Privacy Policy</p>
                            </div>
                        </div>
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
                <c-tab name="Step 2" :tab_id="2" :showFooter="true">
                    <div>
                        <p>Please fill in your information</p>

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
                <c-tab name="Step 3" :tab_id="3" :showFooter="true">
                    <div>
                        <p>
                            To manage your listing, you'll need to verify your connection with this company. What you'll get with verification:
                            <br /><br />
                            <i class="fas fa-check"></i> Allow new customers to find you on BlockHub Search<br />
                            <i class="fas fa-check"></i> Promote your business with bounties<br />
                            <i class="fas fa-check"></i> Track product analytics to understand your customers<br />
                            <i class="fas fa-check"></i> Respond to customer reviews<br />
                            <i class="fas fa-check"></i> And much more<br />
                            <br />
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
                companyName: null,
                productName: null,
                contactName: null,
                contactNumber: null,
                contactEmail: null,
                companyWebsite: null
            }
        },
        methods: {
            changeTab(step) {
                if (step > this.currentStep) {
                    this.nextStep();
                } else {
                    this.currentStep = step;
                }
            },
            nextStep() {
                if (this.currentStep === 3) {
                    // submit to google form
                } else {
                    this.currentStep += 1
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
