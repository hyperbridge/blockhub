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
                         @change="onChangeType($event)"
                         v-model.lazy="objectType">
                        <option
                            value=""
                            selected>
                            Select Object type
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
                <div class="form-group">
                    <c-notification-hidden
                        :visibleNotification="visibleTypeNotification"
                        type="warning"
                        size="md"
                        class="my-4 warning">
                        Object type is required!
                    </c-notification-hidden>
                </div>                
            </div>
            <div class="invert">
                <div class="form-group">
                    <c-input
                        @input.native="onChangeId($event)"
                        v-model.lazy="objectId"
                        type="text"
                        class="form-control"
                        placeholder="Input objectId"
                    />
                </div>
                <div class="form-group">
                    <c-notification-hidden
                        :visibleNotification="visibleIdNotification"
                        type="warning"
                        size="md"
                        class="my-4 warning">
                        ObjectId is required!
                    </c-notification-hidden>
                </div> 
            </div>
            <div class="invert">
                <div class="form-group">
                    <c-vote :votes="value" :actived="vote_actived" v-on:upVote="getVote($event)" v-on:downVote="getVote($event)" />
                </div>
            </div>
        </div>
    </c-block>
</template>

<script>
export default {
    components: {
        'c-notification-hidden': () => import('~/components/notification/hidden.vue').then(m => m.default || m),
        'c-vote': () => import('~/components/vote/form.vue').then(m => m.default || m)
    },
    props: {

    },
    data() {
        return {
            vote_actived:false,
            visibleTypeNotification:false,
            visibleIdNotification:false,
            vote:'',
            objectType:'',
            objectId:''
        }
    },
    methods: {
        onChangeType(event) {
            if (event.target.value) {
                this.visibleTypeNotification = false;
            } else {
                this.visibleTypeNotification = true;
            }
        },
        onChangeId(event) {
            if (event.target.value) {
                this.visibleIdNotification = false;
            } else {
                this.visibleIdNotification = true;
            }
        },
        getVote:function(vote){
            if (!this.objectType) {
                this.visibleTypeNotification = true;
            }
            if (!this.objectId) {
                this.visibleIdNotification = true;
            }
            if (this.objectType && this.objectId) {
                this.vote_actived = true
            } else {
                this.vote_actived = false
            }
           let data = {
                'vote':vote,
                'objectType':this.objectType,
                'objectId':this.objectId
            }
            this.$emit('getVote',data)
        },
        actionOnClose(){
            this.closeCheck = false;
        }
    },
    computed:{
        value() {
            return this.votes;
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
