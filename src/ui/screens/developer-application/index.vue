<template>
    <c-layout navigationKey="store">
            <div class="row">
                <div class="col-12">
                    <c-block title="Business Manager" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>We're still working on our Business Manager. In the meantime, you can contact us directly at <a href="mailto:business@hyperbridge.org"><strong>business@hyperbridge.org</strong></a></p>
                    </c-block>

                    <c-block title="Why Community-Driven Development?" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances you may be right. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, THEY'RE PLAYING THE GAME. That's why we need to use COMPARISON metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. Ultimately you do decide, but we want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.</p>
                    </c-block>

                    <div v-if="!chosenIdentity.developer_id" style="text-align:center">
                        <c-block title="Choose Profile" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <div class="profile-picker">
                                <div
                                    class="profile-picker__profile"
                                    v-for="identity in identities"
                                    :key="identity.id"
                                    v-if="identities && identities.length"
                                >
                                    <c-user-card
                                        :user="identity"
                                        :previewMode="true"
                                        :class="{ 'default': chosenIdentity && identity.id == chosenIdentity.id }"
                                    />
                                    <div class="profile__action">
                                        <c-button
                                            status="info"
                                            icon="check"
                                            @click="chooseIdentity(identity)"
                                            v-if="!chosenIdentity || identity.id != chosenIdentity.id"
                                        >Choose</c-button>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <c-button href="/#/account/identities">New Profile</c-button>
                        </c-block>

                        <br /><br />

                        <c-button class="c-btn-lg outline-success" @click="convertIdentity">Convert to Developer</c-button>
                    </div>
                    <div v-if="chosenIdentity.developer_id">
                        Congratulations, your developer profile is all setup. You are Developer #{{ this.chosenIdentity.developer_id }}

                        <br /><br />

                        <c-button href="/#/developer">Go to dashboard</c-button>
                    </div>
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
