<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="550" @close="$emit('close')">
        <div slot="customClose" hidden></div>
        <div class="download-modal" slot="customContent">
            <c-tabs>
                <c-tab name="Download" :selected="true" :showFooter="true">
                    <div>
                        <c-download-block :showPreview="false" />
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
            'c-popup': () => import('~/components/popups').then(m => m.default || m),
            'c-tabs': () => import('~/components/tab/tabs').then(m => m.default || m),
            'c-tab': () => import('~/components/tab/tab').then(m => m.default || m),
            'c-download-block': () => import('~/components/download-block').then(m => m.default || m),
        },
        data() {
            return {
            }
        },
        methods: {
            download() {
                this.$store.dispatch('application/downloadAccount', { password: this.$refs.password })
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
