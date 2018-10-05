<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="350">
        <div slot="custom_close" hidden></div>
        <div class="unlock-modal" slot="custom_content">
            <c-tabs>
                <c-tab name="Account" :selected="true" :showFooter="true">
                    <div class="tab-container">
                        <div class="tab-card">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label class="sr-only">Password</label>
                                        <input type="password" name="password" ref="password" placeholder="Password" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer" class="d-flex align-items-center justify-content-end">
                        <div>
                            <c-button @click="unlock()">Unlock</c-button>
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
            unlock() {
                this.$store.dispatch('application/unlockAccount', { password: this.$refs.password })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .unlock-modal{
        background: transparent;
        color: #fff;
    }
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
</style>
