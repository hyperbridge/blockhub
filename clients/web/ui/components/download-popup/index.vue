<template>
    <c-popup
        ref="modal"
        :activated="activated"
        type="custom"
        width="550"
        @close="$emit('close')">
        <div
            slot="customClose"
            hidden />
        <div
            slot="customContent"
            class="download-modal">
            <c-tabs :tabNames="['Download']">
                <c-tab :tabId="1">
                    <div>
                        <c-download-block :showPreview="false" />
                    </div>
                    <div
                        slot="footer"
                        class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button @click="$emit('close')">
                                Close
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
    components: {
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-tabs': () => import('~/components/tab/tabs-universal').then(m => m.default || m),
        'c-tab': () => import('~/components/tab/tab-universal').then(m => m.default || m),
        'c-download-block': () => import('~/components/download-block').then(m => m.default || m)
    },
    props: ['activated'],
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
