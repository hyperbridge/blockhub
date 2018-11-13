<template>
    <c-layout navigationKey="store">
            <div class="row">
                <div class="col-12" v-if="!developer_mode">
                    <c-block title="Business Manager" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>We're still working on our Business Manager. If you want a sneak preview, <a href="/#/business">it's over here</a>. In the meantime, you can contact us directly at <a href="mailto:business@hyperbridge.org"><strong>business@hyperbridge.org</strong></a></p>
                    </c-block>

                    <c-block title="Why Community-Driven Development?" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances that's correct. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, <strong>they're playing the game</strong>. That's why we need to use <strong>comparison</strong> metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. We want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.</p>
                    </c-block>

                    <div v-if="!developer_mode" style="text-align: center">
                        <c-user-card
                            class="col-3 margin-auto"
                            :user="chosenIdentity"
                            :previewMode="true"
                            :class="{ 'default': true }"
                        />
                        <br />
                        <c-button class="underline" @click="$store.commit('application/showProfileChooser', true)">Choose Different Profile</c-button>

                        <br /><br />

                        <c-button class="c-btn-lg outline-white margin-top-20" @click="convertIdentity">Convert to Developer</c-button>
                    </div>
                </div>
                <div class="col-12" v-if="developer_mode">
                    <c-block title="Congratulations" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        Your profile is all setup. You are Developer #{{ chosenIdentity.developer_id }}

                        <br /><br />

                        <c-button href="/#/developer">Go to dashboard</c-button>
                    </c-block>
                </div>
            </div>
    </c-layout>
</template>

<script>
    import * as Bridge from '@/framework/desktop-bridge'
    import * as DB from '@/db'

    export default {
        components: {
            'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        },
        data() {
            let chosenIdentity = this.$store.state.application.account.identities.find(identity => identity.id == this.$store.state.application.account.current_identity.id)

            if (!chosenIdentity && this.$store.state.application.account.identities.length) {
                chosenIdentity = this.$store.state.application.account.identities[0]
            }

            return {
                errors: [],
                chosenIdentity
            }
        },
        computed: {
            identities() {
                return this.$store.state.application.account.identities
            },
            developer_mode() {
                return this.$store.state.application.developer_mode
            }
        },
        methods: {
            convertIdentity() {
                Bridge.sendCommand('createDeveloperRequest', this.chosenIdentity).then((data) => {
                    this.chosenIdentity.developer_id = data
                    this.$store.state.application.developer_mode = true

                    // TODO: just redirect here?
                })
            },
            chooseIdentity(identity) {
                this.chosenIdentity = identity
            },
        }
    }
</script>

<style lang="scss" scoped>

    .profile-picker {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }

    .profile-picker__profile {
        position: relative;
        margin: 10px 2%;
        width: 46%;
        &:hover .profile__action, &.edit .profile__action {
            display: flex;
        }
        >.default {
            $defColor: #43C981;
            border-color: $defColor !important;
            &:before {
                content: "";
                width: 26px;
                position: absolute;
                border-radius: 5px 0 0 5px;
                left: -22px;
                bottom: -1px;
                height: calc(100% + 2px);
                background: $defColor;
            }
            &:after {
                font-family: 'Font Awesome 5 Free', 'Barlow', sans-serif;
                content: "CHOSEN \F14A";
                color: #1C2032;
                font-weight: bold;
                font-size: 16px;
                position: absolute;
                transform: rotate(-90deg);
                top: 40px;
                left: -50px;
            }
        }
    }

    .profile__action {
        display: none;
        position: absolute;
        justify-content: center;
        bottom: -20px;
        width: 100%;
        height: 26px;
        .c-btn {
            margin: 0 5px;
        }
    }
</style>
