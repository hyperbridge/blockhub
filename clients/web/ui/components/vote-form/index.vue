<template>
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
                         v-model.lazy="objectType">
                        <option
                            value=""
                            selected>
                            Select Object type
                        </option>
                        <option value="product">
                            product
                        </option>
                        <option value="project">
                            project
                        </option>
                        <option value="idea">
                            idea
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <c-notification-inline
                        type="danger"
                        size="md"
                        class="my-4 type-danger">
                        Object type is required!
                    </c-notification-inline>
                </div>                
            </div>
            <div class="invert">
                <div class="form-group">
                    <c-input
                        v-model.lazy="objectId"
                        type="text"
                        class="form-control"
                        placeholder="Input objectId"
                    />
                </div>
                <div class="form-group">
                    <c-notification-inline
                        type="danger"
                        size="md"
                        class="my-4 type-danger">
                        ObjectId is required!
                    </c-notification-inline>
                </div> 
            </div>
            <div class="invert">
                <div class="form-group">
                    <c-simple-vote :votes="value" v-on:upVote="getVote($event)" v-on:downVote="getVote($event)" />
                </div>
            </div>
        </div>
    </c-block>
</template>

<script>
export default {
    props: {
        getChanges: {
            type: Function,
        }
    },
    data() {
        return {
            vote:'',
            objectType:'',
            objectId:''
        }
    },
    methods: {
        getData:function(){
            console.log('getVote');
            this.$emit('getData',{'objectType':this.objectType,'objectId':this.objectId});
        },
        getVote:function(vote){
           let data = {
                'vote':vote,
                'objectType':this.objectType,
                'objectId':this.objectId
            }
            this.$emit('getVote',data)
        },
    },
    computed:{
        value() {
            return this.votes
        }
    },
}
</script>

<style lang="scss" scoped>
    .vote-form{
        display: flex;
        flex-direction: column;
    }
</style>
