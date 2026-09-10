<template>
    <c-layout navigationKey="store">
        <c-block :title="title">
            <p>Explore the sample BlockHub profiles and their games, collections, and projects.</p>
            <div class="row">
                <div v-for="profile in profiles" :key="profile.id" class="col-12 col-md-6 col-lg-4 mb-4" :data-demo-person="profile.id">
                    <c-user-card :user="profile" :previewMode="true" />
                    <c-button :to="`/profile/${profile.id}`" status="info" class="mt-3" :data-demo-person-open="profile.id">View {{ profile.name }}</c-button>
                </div>
            </div>
        </c-block>
    </c-layout>
</template>
<script>
export default {
    components: {
        'c-user-card': () => import('~/components/user-card').then(module => module.default || module)
    },
    computed: {
        title() { return this.$route.path === '/curators' ? 'Curators' : 'Contacts' },
        profiles() { return this.$demo.world.profiles }
    }
}
</script>
