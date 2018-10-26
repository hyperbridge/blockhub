<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="550" @close="$emit('close')">
        <div slot="custom_close" hidden></div>
        <div class="claim-modal" slot="custom_content">
            <c-tabs>
                <c-tab name="Product Verification" :selected="true" :showFooter="true">
                    <div>
                        What's the name of your company?
                        [ name ]

                        What's the name of your product?
                        [ name ]

                        By continuing you agree to the following Terms and Services and Privacy Policy

                        [ Next ]

                        Step 2

                        Please fill in your information

                        [ website url ]

                        [ contact name ]

                        [ contact number ]

                        Step 3

                        <h3>Finish verifying this listing</h3>

                        <p>
                            To manage your listing, you'll need to verify your connection with this company. What you'll get with verification:
                            <br />
                            <i class="fas fa-check"></i> Allow new customers to find you on BlockHub Search
                            <i class="fas fa-check"></i> Promote your business with bounties
                            <i class="fas fa-check"></i> Track product analytics to understand your customers
                            <i class="fas fa-check"></i> Respond to customer reviews
                            <i class="fas fa-check"></i> And much more
                            <br />
                        </p>
                        <c-button>Finish</c-button>
                    </div>
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button @click="$emit('close')">Close</c-button>
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
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup__content {
        background: transparent;
        color: #fff;
    }
</style>
