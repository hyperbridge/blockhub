<template>
    <c-layout navigationKey="account">
        <c-block :title="`${profile.name} · ${section}`">
            <div class="row" data-demo-profile-items>
                <div v-for="item in items" :key="item.id" class="col-md-4 mb-4">
                    <c-block :title="item.name || item.title">
                        <c-img :src="item.image || item.img || item.meta.images.main" class="img-fluid" />
                        <p v-if="section === 'bounties'" class="mt-3">{{ item.meta.description }}</p>
                        <c-button v-else class="mt-3" :to="itemRoute(item)">View {{ section }}</c-button>
                    </c-block>
                </div>
            </div>
            <c-button :to="`/profile/${profile.id}`">Back to Profile</c-button>
        </c-block>
    </c-layout>
</template>
<script>
export default {
    computed: {
        section() { return this.$route.path.split('/').pop() },
        profile() { return this.$store.getters['profiles/get'](this.$route.params.id) },
        items() {
            const name = this.section === 'contacts' ? 'profiles' : this.section
            return this.$demo.world[name].map(item => ({ ...item, image: item.image || item.img || (item.meta.images || {}).main || `${process.env.PAGES_BASE}img/user.png` }))
        }
    },
    methods: {
        itemRoute(item) { return `/${{ contacts: 'profile', projects: 'project', assets: 'asset' }[this.section]}/${item.id}` }
    }
}
</script>
