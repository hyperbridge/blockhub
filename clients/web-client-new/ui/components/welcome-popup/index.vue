<template>
    <c-popup ref="modal"
             :activated="activated"
             type="custom"
             width="850"
             @close="$emit('close')">
        <div slot="customClose"
             hidden />
        <div slot="customContent"
             class="welcome-modal">
            <c-tabs>
                <c-tab name="Welcome"
                       :selected="true"
                       :showFooter="true">
                    <div>
                        <c-welcome-box :prompt="true" />
                    </div>
                    <div slot="footer"
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
        'c-tabs': () => import('~/components/tab/tabs').then(m => m.default || m),
        'c-tab': () => import('~/components/tab/tab').then(m => m.default || m),
        'c-welcome-box': () => import('~/components/welcome-box').then(m => m.default || m)
    },
    props: ['activated'],
    data() {
        return {
        }
    },
    methods: {
        download() {
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
