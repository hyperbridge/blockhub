<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div
                v-if="!curatorMode"
                class="col-12">
                <c-block
                    title="Curator Application"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <p>Welcome</p>
                </c-block>

                <div
                    v-if="!curatorMode"
                    style="text-align: center">
                    <c-user-card
                        class="col-3 margin-auto"
                        :user="activeProfile"
                        :previewMode="true"
                        :class="{ 'default': true }" />
                    <br>
                    <c-button
                        class="underline"
                        @click="$store.commit('application/showProfileChooser', true)">
                        Choose Different Profile
                    </c-button>

                    <br><br>

                    <c-button
                        class="c-button--lg outline-white margin-top-20"
                        @click="convertProfile">
                        Convert to Curator
                    </c-button>
                </div>
            </div>
            <div
                v-if="curatorMode"
                class="col-12">
                <c-block
                    title="Congratulations"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    Your profile is all setup.

                    <br><br>

                    <c-button to="/meta">
                        Go to dashboard
                    </c-button>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-user-card': () => import('~/components/user-card').then(m => m.default || m)
    },
    data() {
        const curatorProfile = Object.values(this.$store.state.profiles.keyedById).find(profile => profile.role !== 'curator')
        let activeProfile = Object.values(this.$store.state.profiles.keyedById).find(profile => profile.id == this.$store.state.application.activeProfile.id)

        if (!activeProfile && Object.values(this.$store.state.profiles.keyedById).length) {
            activeProfile = Object.values(this.$store.state.profiles.keyedById)[0]
        }

        return {
            profiles: Object.values(this.$store.state.profiles.keyedById),
            activeProfile,
            curatorProfile,
            errors: []
        }
    },
    methods: {
        convertProfile() {
            this.$desktop.sendCommand('createCuratorRequest', this.activeProfile).then(data => {
                this.activeProfile.role = 'curator'
                this.curatorProfile = this.activeProfile
                this.$store.state.application.curatorMode = true
            })
        },
        chooseProfile(profile) {
            this.activeProfile = profile
        }
    }
}
</script>

