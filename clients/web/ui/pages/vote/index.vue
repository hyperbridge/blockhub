<template>
    <c-layout>
        <div class="col-md-12">
            <c-vote-form :votes="0" v-on:getVote="getVote($event)" />            
        </div>                          
    </c-layout>    
</template>
<script>
import axios from 'axios'
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
        async getVote(data){
            console.log('profile_id',this.$store.state.application.activeProfile.id)
            console.log('vote',data.vote)
            
            if(this.$store.state.application.activeProfile.id){
                if(data.objectType && data.objectId && data.vote) {
             
            let request = { 
                            value: data.vote ,
                            ownerId:  this.$store.state.application.activeProfile.id,                                 
                            accountId: this.$store.state.application.activeProfile.accountId,
                            objectType: data.objectType,
                            objectId: data.objectId,
                }        
                    console.log('request',request)
                    let data1 = await this.$store.dispatch('votes/find')

                    console.log('vote_result_dispatch');
                    let data3 = await this.$store.dispatch('votes/create',request) 
                    console.log('result',data3)
                    }   
            }
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
