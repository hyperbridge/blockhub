<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12" v-if="!curatorMode">
                <c-block title="Curator Application" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    <p>Welcome</p>
                </c-block>

                <div v-if="!curatorMode" style="text-align: center">
                    <c-user-card
                        class="col-3 margin-auto"
                        :user="chosenProfile"
                        :previewMode="true"
                        :class="{ 'default': true }"
                    />
                    <br />
                    <c-button class="underline" @click="$store.commit('application/showProfileChooser', true)">Choose Different Profile</c-button>

                    <br /><br />

                    <c-button class="c-btn-lg outline-white margin-top-20" @click="convertProfile">Convert to Curator</c-button>
                </div>
            </div>
            <div class="col-12" v-if="curatorMode">
                <c-block title="Congratulations" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    Your profile is all setup. You are Curator #{{ chosenProfile.developerId }}

                    <br /><br />

                    <c-button href="#/meta">Go to dashboard</c-button>
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
            let developerProfile = this.$store.state.application.account.profiles.find(profile => profile.curatorId !== undefined)
            let chosenProfile = this.$store.state.application.account.profiles.find(profile => profile.id == this.$store.state.application.account.activeProfile.id)

            if (!chosenProfile && this.$store.state.application.account.profiles.length) {
                chosenProfile = this.$store.state.application.account.profiles[0]
            }

            return {
                profiles: this.$store.state.application.account.profiles,
                chosenProfile: chosenProfile,
                developerProfile: developerProfile,
                errors: []
            }
        },
        methods: {
            convertProfile() {
                Bridge.sendCommand('createCuratorRequest', this.chosenProfile).then((data) => {
                    this.chosenProfile.curatorId = data
                    this.developerProfile = this.chosenProfile
                    this.$store.state.application.curatorMode = true
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
