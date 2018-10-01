<template>
    <transition name="fade">
        <div class="cookie-policy" v-if="!settings.client.cookie_policy_accepted">
            <p class="p-0 m-0">
                By using this website, you agree to our
                <c-button status="plain" class="p-0 m-0" @click="showPopup">cookie policy</c-button>
            </p>
            <c-button status="info" class="margin-left-20" icon_hide @click="updateClientSettings()">
                Dismiss
            </c-button>
            <c-popup :activated="show" @close="closePopup" title="Cookie Policy">
                <p>
                    We use cookies to make interactions with our websites and services easy and meaningful,
                    to better understand how they are used and to tailor advertising.</p>
                <p>
                    You can <c-button status="plain" href="#3">read more</c-button>
                    and <c-button status="plain" href="#4">make you cookies choices here</c-button>.
                </p>
                <p>
                    By continuing to use this site you are giving
                    us your consent to do this.
                </p><template slot="footer">
                <div class="text-right w-100">
                    <c-button status="success" icon_hide @click="updateClientSettings()">
                        Accept
                    </c-button>
                </div>
            </template>
            </c-popup>
        </div>
    </transition>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'cookie-policy',
        components:{
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        },
        data(){
            return{
                show: false
            }
        },
        methods: {
            ...mapMutations(['UPDATE_CLIENT_SETTINGS']),
            updateClientSettings() {
                this.$store.commit('network/UPDATE_CLIENT_SETTINGS', 'cookie_policy_accepted');
                this.show = false;
            },
            showPopup(){
                this.show = true;
            },
            closePopup(){
                this.show = false;
            }
        },
        computed: {
            settings() {
                return this.$store.state.network.account.settings;
            }
        }
    }
</script>

<style lang="scss">
    .cookie-policy{
        position: fixed;
        right: 55px;
        bottom: 20px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .13);
        border-radius: 5px;
        padding: 10px;
        display: flex;
        align-items: center;
        z-index: 999;
        justify-content: space-between;
    }
</style>
