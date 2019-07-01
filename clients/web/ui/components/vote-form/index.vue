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
                    <c-notification-hidden
                        :objCheck="objTypecheck"
                        :closeCheck="closeTypeCheck"
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
                        :objCheck="objIdcheck"
                        :closeCheck="closeIdCheck"
                        type="warning"
                        size="md"
                        class="my-4 warning">
                        ObjectId is required!
                    </c-notification-hidden>
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
    components: {
        'c-notification-hidden': () => import('~/components/notification/hidden.vue').then(m => m.default || m)
    },
    props: {

    },
    data() {
        return {
            closeTypeCheck:true,
            closeIdCheck:true,
            objTypecheck:false,
            objIdcheck:false,
            vote:'',
            objectType:'',
            objectId:''
        }
    },
    methods: {
        onChangeType(event) {
            if(event.target.value){
                this.closeTypeCheck = false;
            }
        },
        onChangeId(event) {
            if(event.target.value){
                this.closeIdCheck = false;
            }
        },
        getVote:function(vote){
            if  (!this.objectType)  {
                this.objTypecheck = true;
            }  else  {
                this.objTypecheck = false;
            }
            this.closeCheck = true 
            if  (!this.objectId)  {
                this.objIdcheck = true;
            }   else  {
                this.objIdcheck = false;
            }
            this.closeTypeCheck = true;
            this.closeIdCheck = true;
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
