<template>
    <c-popup :activated="activated" type="custom" ref="modal" width="250">
        <div slot="custom_close" hidden></div>
        <div class="unlock-modal" slot="custom_content">
            <div class="tab-container">
                <div class="tab-card">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <h3>Password</h3>
                                <label class="sr-only">Password</label>
                                <input type="password" name="password" ref="password" placeholder="Password" class="form-control" @keyup.enter="unlock()" v-focus />
                                <br />
                                <c-button ref="submit" class="c-btn-lg" @click="unlock()">Unlock</c-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-popup>
</template>

<script>
    import * as DesktopBridge from '@/framework/desktop-bridge'

    export default {
        props: ['activated'],
        components: {
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
            'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        },
        methods: {
            unlock() {
                $(this.$refs.submit.$el).removeClass('wrong')

                this.$store.dispatch('application/unlockAccount', { password: this.$refs.password })
            }
        },
        created() {
            DesktopBridge.on('promptPasswordRequest', (data) => {
                if (data.error) {console.log(this.$refs.submit.$el, $(this.$refs.submit.$el))
                    $(this.$refs.submit.$el).addClass('wrong')
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup {
        background: #383853 !important;
    }
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
        .c-btn {
            &.wrong {
                position: relative;
                left: 0;
                border: 2px solid #ed1c24;
                animation: wrong-log 0.3s;
            }
        }
    }

    @keyframes wrong-log {
        0%, 100% {left: 0px;}
        20%, 60% {left: 15px;}
        40% , 80% {left: -15px;}
    }
</style>
