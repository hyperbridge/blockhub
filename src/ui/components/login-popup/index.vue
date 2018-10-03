<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="550" @close="$emit('close')">
        <div slot="custom_close" hidden></div>
        <div class="download-modal" slot="custom_content">
            <c-tabs>
                <c-tab name="Sign In" :selected="true" :showFooter="true">
                    <div>
                        Sign in here // @signIn()
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
            signIn() {
                this.$store.dispatch('application/signIn', { password: this.$refs.password })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup__content {
        background: transparent;
        color: #fff;
    }
</style>
