<template>
    <c-layout>
        <div class="col-md-12">
            <c-vote-form :votes="0" v-on:getVote="getVote($event)" />            
        </div>                          
    </c-layout>    
</template>
<script>
export default {
    head() {
        return {
            title: `Vote`
        }
    },
    components: {   
        'c-vote-form': () => import('~/components/vote-form/index.vue').then(m => m.default || m)
    },
    methods: {
        getVote(data){
            console.log('profile check')
            console.log(this.$store.state.profiles)
            if(data.objectType && data.objectId && data.vote) console.log('send');
        },
    },
    computed: {
    },

}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>
