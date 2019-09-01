<template>
    <Layout>
        <Block
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
                            <option v-for="object in objects" :key="object.id" :value="object.id">
                                {{ object.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div v-if="selectObject && selectObjectId" class="invert">
                    <div class="form-group">
                        <Vote ref="myVote" :votes="0" @getVote="getVote" />
                    </div>
                </div>
            </div>
        </Block>
    </Layout>
</template>
<script>
export default {
    head() {
        return {
            title: 'Vote'
        }
    },
    components: {
        'Vote': () => import('@ericmuyser/hyper-ui').then(m => m.Vote)
    },
    data() {
        return {
            vote: '0',
            selectObject: false,
            selectObjectId: false,
            selectedObject: 'Object',
            selectedObjectId: ''
        }
    },
    computed: {
        objects() {
            if (this.selectedObject !== 'Object') {
                const object = this.selectedObject.toLowerCase()
                return this.$store.getters[`${object}s/list`]
            }
            return 0
        }
    },
    mounted() {
        this.$store.dispatch('projects/find')
        this.$store.dispatch('products/find')
        this.$store.dispatch('ideas/find')
    },
    methods: {
        async getVote(value) {
            console.log('profileId', this.$store.state.application.activeProfile.id)
            if (!this.$store.state.application.activeProfile.id) return
            if (!(this.selectedObject && this.selectedObjectId && value)) return
            const request = {
                value: String(value),
                ownerId: this.$store.state.application.activeProfile.id,
                objectType: this.selectedObject,
                objectId: this.selectedObjectId
            }
            console.log('requestCheck', request)

            const result = await this.$api.service('vote/check').find({
                query: {
                    objectType: request.objectType,
                    objectId: request.objectId,
                    profileId: request.ownerId
                }
            })
            console.log('result', result)
            if (result.voted) {
                const updateData = await this.$store.dispatch('votes/get', result.id)
                console.log('updateData', updateData)
                updateData.value = String(value)
                updateData.meta = {}
                updateData.objectType = request.objectType
                updateData.objectId = request.objectId
                updateData.ownerId = request.ownerId
                const updatedData = await this.$store.dispatch('votes/update',
                    [
                        updateData.id,
                        updateData
                    ])
                console.log('updatedResult', updatedData)
            } else {
                const data3 = await this.$store.dispatch('votes/create', request)
                console.log('createResult', data3)
            }
        },
        onChangeType(event) {
            this.selectObject = Boolean(event.target.value)
            this.selectedObject = event.target.value || 'Object'
        },
        onChangeId(event) {
            this.selectObjectId = Boolean(event.target.value)
            this.selectedObjectId = event.target.value || ''
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
