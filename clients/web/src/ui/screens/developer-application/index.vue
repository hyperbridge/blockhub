<template>
    <c-layout navigationKey="store">
        <div class="row" v-if="!$store.state.application.signed_in">
            <p>Interested in developing with BlockHub? Please contact us at developers@hyperbridge.org</p>
        </div>
        <div class="row" v-if="$store.state.application.signed_in">
            <div class="col-12" v-if="!developerMode">
                <c-block title="Business Manager" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true" hidden>
                    <p>We're still working on our Business Manager. If you want a sneak preview, <a href="#/business">it's over here</a>. In the meantime, you can contact us directly at <a href="mailto:business@hyperbridge.org"><strong>business@hyperbridge.org</strong></a></p>
                </c-block>

                <c-block title="Why Community-Driven Development?" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true" hidden>
                    <p>You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances that's correct. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, <strong>they're playing the game</strong>. That's why we need to use <strong>comparison</strong> metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. We want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.</p>
                </c-block>

                <div v-if="!developerMode" style="text-align: center">
                    <c-user-card
                        class="col-3 margin-auto"
                        :user="chosenProfile"
                        :previewMode="true"
                        :class="{ 'default': true }"
                    />
                    <br />
                    <c-button class="underline" @click="$store.commit('application/showProfileChooser', true)">Choose Different Profile</c-button>

                    <br /><br />

                    <c-button class="c-btn-lg outline-white margin-top-20" @click="convertProfile">Convert to Developer</c-button>
                </div>
            </div>
            <div class="col-12" v-if="developerMode">
                <c-block title="Congratulations" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    Your profile is all setup. You are Developer #{{ chosenProfile.developerId }}

                    <br /><br />

                    <c-button href="#/developer">Go to dashboard</c-button>
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
            let chosenProfile = this.$store.state.application.account.profiles.find(profile => profile.id == this.$store.state.application.account.activeProfile.id)

            if (!chosenProfile && this.$store.state.application.account.profiles.length) {
                chosenProfile = this.$store.state.application.account.profiles[0]
            }

            return {
                errors: [],
                chosenProfile
            }
        },
        computed: {
            profiles() {
                return this.$store.state.application.account.profiles
            },
            developerMode() {
                return this.$store.state.application.developerMode
            }
        },
        methods: {
            convertProfile() {
                Bridge.sendCommand('createDeveloperRequest', this.chosenProfile).then((data) => {
                    this.chosenProfile.developerId = data
                    this.$store.state.application.developerMode = true

                    // TODO: just redirect here?
                })
            },
            chooseProfile(profile) {
                this.chosenProfile = profile
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
