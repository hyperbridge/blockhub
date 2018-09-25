<template>
    <c-popup :activated="activated" type="custom" ref="modal" title="Sending Funds" width="650">
        <!-- <c-custom-modal title="Login"
                        v-if="login_modal"
                        @close="login_modal = false"
                        id="login_modal"
                        modal_class="login-modal">
            <template slot="modal_body">
                <div class="w-100">
                    <div class="modal-title">
                        <h3>Welcome to BlockHub</h3>
                        <h5>Please enter your login details</h5>
                    </div>
                    <div class="card">
                        <form action="">
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                        </form>
                    </div>
                </div>
            </template>
            <template slot="modal_footer">
                <div>
                    <a href="#3" class="btn btn-sm btn-link">Recover Password</a><br>
                    <a href="#3" class="btn btn-sm btn-link">Create Account</a>
                </div>
                <div>
                    <a href="#3" class="btn btn-sm btn-success text-uppercase font-weight-bold">Log-in <i class="fas fa-angle-double-right"></i></a>
                </div>
            </template>
        </c-custom-modal> -->
    </c-popup>
</template>

<script>
    import Tabs from '../tab/tabs.vue'
    import Tab from '../tab/tab.vue'
    import Switch from '../switch/index'
    import Buttons from '../buttons/index.vue'
    import PopUp from '../popups/index'

    export default {
        props: ['activated'],
        components: {
            'c-tab': Tab,
            'c-tabs': Tabs,
            'c-switch': Switch,
            'c-button': Buttons,
            'c-popup': PopUp,
        },
        data() {
            return {
                agreement: true,
                sending: false
            }
        },
        methods: {
            toggleSteps: function () {
                this.agreement = false;
                this.sending = true;
            }
        }
    }

</script>

<style lang="scss">

</style>