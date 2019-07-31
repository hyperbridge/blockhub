<template>
    <Layout navigationKey="store">
        <div class="row">
            <div
                v-if="!$store.state.application.curatorMode"
                class="col-12">
                <Block
                    title="Curator Application"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <p>Welcome to the curator portal. If you'd like to submit curations and proposals, please choose your profile and fill out this quick form.</p>
                    <p>Current profile: {{ activeProfile.name }}</p>

                    <Button
                        class="underline"
                        @click="$store.commit('application/showProfileChooser', true)">
                        Choose Different Profile
                    </Button>

                    <br><br>

                    <Button
                        class="Button--lg outline-white margin-top-20"
                        @click="convertProfile">
                        Submit application
                    </Button>
                </Block>
            </div>
            <div
                v-if="$store.state.application.curatorMode"
                class="col-12">
                <Block
                    title="Congratulations"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    This profile is already setup as a curator.

                    <br><br>

                    <Button to="/meta">
                        Go to dashboard
                    </Button>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Curator Application | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub curator application process` },
                { hid: 'keywords', name: 'keywords', content: 'blockhub, curators, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'UserCard': () => import('@ericmuyser/hyper-ui').then(m => m.UserCard)
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

