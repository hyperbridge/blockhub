<template>
    <transition name="slideDown">
        <div class="cookie-policy" v-if="!settings.client.cookie_policy_accepted">
            <p class="p-0 m-0">
                By using this website you agree to our
                <c-button status="link" class="p-0 m-0">cookie policy</c-button>
            </p>
            <c-button status="info" class="margin-left-20" icon_hide @click="updateClientSettings()">
                Dismiss
            </c-button>
        </div>
    </transition>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: 'cookie-policy',
        methods: {
            ...mapMutations(['UPDATE_CLIENT_SETTINGS']),
            updateClientSettings() {
                this.$store.commit('network/UPDATE_CLIENT_SETTINGS', 'cookie_policy_accepted');
            },
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
        background: rgba(42, 43, 68, 0.7);
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
