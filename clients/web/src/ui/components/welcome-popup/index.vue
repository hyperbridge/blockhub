<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="850" @close="$emit('close')">
        <div slot="customClose" hidden></div>
        <div class="welcome-modal" slot="customContent">
            <c-tabs>
                <c-tab name="Welcome" :selected="true" :showFooter="true">
                    <div>
                        <c-welcome-box :prompt="true" />
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
            'c-welcome-box': (resolve) => require(['@/ui/components/welcome-box'], resolve),
        },
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
