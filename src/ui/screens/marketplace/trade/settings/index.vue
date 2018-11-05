<template>
    <article>
        <section class="trade-settings__url">
            <h3>Your trade URL</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="trade-settings__url-form">
                <c-icon name="copy"/>
                <c-input
                    class="trade-settings__url-input"
                    @click="copyTradeURL()"
                    :value="tradeURL"
                    readonly
                />
            </div>
            <c-button
                @click="$store.dispatch('application/createTradeURL')"
                status="info"
                icon_hide
            >
                Generate new trade URL
            </c-button>
        </section>
    </article>
</template>

<script>
    export default {
        computed: {
            account() {
                return this.$store.state.application.account;
            },
            tradeURL() {
                const { id, tradeURLId } = this.account;
                return `http://blockhub.gg/tradeoffer/new/?partner=${id}&id=${tradeURLId}`;
            }
        },
        methods: {
            copyTradeURL() {
                navigator.clipboard.writeText(this.tradeURL)
                    .then(() => this.$snotify.info('TradeURL has been copied'))
                    .catch(err => this.$snotify.warning('TradeURL could not be copied'));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .trade-settings__url {
        padding: 15px;
        border-radius: 4px;
        background: rgba(255,255,255,.025);
    }
    .trade-settings__url-input {
        border: 1px solid rgb(100, 119, 230);
        width: 100%;
        cursor: copy;
        &:focus {
            animation: pop-in .5s ease;
        }
        @keyframes pop-in {
            0% { transform: scale(1); }
            25% { transform: scale(1.09); }
            55% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    }
    .trade-settings__url-form {
        position: relative;
        margin: 30px 0;
        .fas {
            position: absolute;
            right: 14px;
            top: calc(50% - 6.5px);
        }
    }
</style>

