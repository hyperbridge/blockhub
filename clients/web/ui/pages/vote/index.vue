<template>
    <c-layout>
        <c-block
            title="Vote Form"
            noGutter
            :bgColor="false">
            <div class="vote-from">
                <p>
                    Please vote!
                </p>
                <div class="invert">
                    <div class="form-group">
                        <select
                            class="form-control"
                            @change="onChangeType($event)">
                            <option
                                value=""
                                selected>
                                Please Select Object.
                            </option>
                            <option value="Product">
                                product 
                            </option>
                            <option value="Project">
                                project
                            </option>
                            <option value="Idea">
                                idea
                            </option>
                        </select>
                    </div>          
                </div>
                <div v-if="selectObject" class="invert">
                    <div class="form-group">
                        <select
                            class="form-control"
                            @change="onChangeId($event)">
                            <option v-for="object in objects" v-bind:value="object.id" :key="object.id">
                                {{object.name}}
                            </option>
                        </select>
                    </div>
                </div>
                <div v-if="selectObject && selectObjectId" class="invert">
                    <div class="form-group">
                        <c-vote ref="myVote" :votes="0"  v-on:getVote="getVote" />
                    </div>
                </div>
            </div>
        </c-block>                         
    </c-layout>    
</template>
<script>
export default {
    head() {
        return {
            title: 'Vote'
        }
    },
    components: {   
        'c-vote': () => import('~/components/vote').then(m => m.default || m)
    },
    data() {
        return {
            vote:'0',
            selectObject: false,
            selectObjectId: false,
            selectedObject: 'Object',
            selectedObjectId: ''
        }
    },
    methods: {
        async getVote(value) {
            console.log('profileId',this.$store.state.application.activeProfile.id);
            if (this.$store.state.application.activeProfile.id) {
                if (this.selectedObject && this.selectedObjectId && value) {                    
                    let request = { 
                            value: String(value),
                            ownerId:  this.$store.state.application.activeProfile.id,                                 
                            objectType: this.selectedObject,
                            objectId: this.selectedObjectId
                        }        
                        console.log('requestCheck',request)

                        let result = await this.$api.service('votes/check').find({
                            query: {
                                type: 'HBX',
                                objectType: request.objectType,
                                objectId: request.objectId,
                                profileId: request.ownerId
                            }
                        })
                        console.log('result',result);

                        if(result.voted){                          
                            let update_data = await this.$store.dispatch('votes/get',result.id) 
                            let data3;
                                console.log('updatedData',update_data)
                                update_data.value = String(value);
                                update_data.meta = {};
                                update_data.objectType = request.objectType;
                                update_data.objectId = request.objectId;
                                update_data.ownerId = request.ownerId;
                                update_data = await this.$store.dispatch('votes/update',
                                [
                                    result.id,
                                    update_data
                                ]) 
                                console.log('updateResult',update_data)
                        } else {                            
                            let data3 = await this.$store.dispatch('votes/create',request) 
                            console.log('createResult',data3)
                        }
                }   
            }
        },
        onChangeType(event) {
            this.selectObject = Boolean(event.target.value);
            this.selectedObject = event.target.value||'Object';
        },
        onChangeId(event) {
            this.selectObjectId = Boolean(event.target.value)
            this.selectedObjectId = event.target.value||'';
        },
    },
    computed: {
        objects() {
            if (this.selectedObject != 'Object') {
                let object = this.selectedObject.toLowerCase();
                return this.$store.getters[`${object}s/list`]
            }
            return;
        }
    },
    mounted() {
        this.$store.dispatch('projects/find')
        this.$store.dispatch('products/find');
        this.$store.dispatch('ideas/find');
    }
}
</script>

<style lang="scss" scoped>
</style>
