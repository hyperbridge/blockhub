<template>
    <c-basic-popup
        :activated="activated"
        @close="close">
        <template slot="body">
            <div class="item-info">
                <div
                    v-if="image"
                    class="item-info__image">
                    <img :src="image">
                </div>
                <div
                    v-if="name"
                    class="item-info__description">
                    <div class="h4 font-weight-bold mb-2 p-0">
                        {{ name }}
                    </div>
                    <p
                        class="p-0 m-0"
                        style="opacity: .7">
                        {{ description }}
                    </p>
                </div>
            </div>
            <!-- <div v-if="name">
                <c-button
                    status="plain"
                    icon="star"
                    class="p-0">
                    Highlight this
                </c-button>
            </div> -->
            <div class="add-to-collection__filter d-flex align-items-end justify-content-between mt-3 mb-4 pb-4">
                <div class="h4 font-weight-bold m-0 p-0 mr-4">
                    Choose collection
                </div>
                <div>
                    <c-input
                        v-model="searchQuery"
                        bgColor="rgba(255, 255, 255, .07)"
                        placeholder="Filter Collections" />
                </div>
            </div>
            <div class="create-collection d-flex">
                <template v-if="createForm">
                    <c-button
                        status="second-success"
                        size="sm"
                        class="mx-2"
                        @click="addCollection(createCollectionRequest)">
                        Add
                    </c-button>
                    <c-input
                        v-model="createCollectionRequest.name"
                        bgColor="rgba(255, 255, 255, .07)"
                        placeholder="Collection name" />
                    <c-button
                        status="second-warning"
                        size="sm"
                        @click="createForm = false">
                        Cancel
                    </c-button>
                </template>
                <template v-if="!createForm">
                    <c-button
                        status="second-info"
                        icon="plus"
                        size="sm"
                        @click="createForm = true">
                        Create New
                    </c-button>
                </template>
            </div>
            <div class="add-to-collection__list mt-3">
                <template v-if="collections">
                    <c-checkbox-group v-if="filteredList.length">
                        <c-checkbox
                            v-for="(collection, idx) in filteredList"
                            :id="`collection_${idx}`"
                            :key="idx"
                            class="my-3"
                            :class="{ 'mt-0' : idx == 1 }"
                            @change="updateResource(collection, $event)">
                            {{ collection.name }} zzz
                        </c-checkbox>
                    </c-checkbox-group>
                    <div
                        v-else
                        class="h6 mt-3">
                        No collections were found.
                    </div>
                </template>
                <div
                    v-else
                    class="h5">
                    You don't have collection yet.
                </div>
            </div>
        </template>
    </c-basic-popup>
</template>

<script>
export default {
    components: {
        'c-basic-popup': () => import('~/components/popups/basic').then(m => m.default || m),
        'c-checkbox-group': () => import('~/components/checkbox/group').then(m => m.default || m),
        'c-checkbox': () => import('~/components/checkbox').then(m => m.default || m)
    },
    props: {
        activated: Boolean,
        buttonType: {
            type: String,
            default: 'second-info'
        },
        image: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        resourceType: {
            type: String,
            default: null
        },
        resourceId: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            searchQuery: '',
            collections: [],
            createForm: false,
            createCollectionRequest: {
                name: '',
                meta: {
                    author: 'Yvenide Belizaire',
                    background: null,
                    assets: [],
                    estimatedValue: 0
                }
            }
        }
    },
    computed: {
        filteredList() {
            if (this.collections && this.searchQuery) {
                return this.collections.filter(collection => collection.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
            return this.collections
        }
    },
    async created() {
        this.fetchCollections()
    },
    methods: {
        close() {
            this.activated = false
            this.$store.commit('application/activeModal', null)
        },
        async fetchCollections() {
            this.collections = (await this.$store.dispatch('collections/find', {
                query: {
                    'owner.id': this.$store.state.application.activeProfile.id,
                    '$joinRelation': '[owner]',
                    '$eager': '[owner]'
                }
            })).data
        },
        async addCollection(collection) {
            this.createForm = false

            collection.owner = this.$store.state.application.activeProfile

            await this.$store.dispatch('collections/create', [collection, {
                query: {
                    '$joinRelation': '[owner]',
                    '$eager': '[owner]'
                }
            }])

            await this.fetchCollections()
        },
        async updateResource(collection, enabled) {
            const resource = {
                id: this.resourceId,
                type: this.resourceType
            }

            if (enabled) {
                await this.$store.dispatch('collections/addResource', [collection.id, resource, {
                    query: {

                    }
                }])
            } else {
                await this.$store.dispatch('collections/removeResource', [collection.id, resource, {
                    query: {

                    }
                }])
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-to-collection{
        display: inline-flex;
    }
    .add-to-collection__filter{
        border-bottom: 1px solid rgba(255, 255, 255, .2);
    }
    .item-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .item-info__image{
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 3px;
        overflow: hidden;
        display: flex;
        align-items: center;
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    .item-info__description{
        width: calc( 100% - 80px );
        padding-left: 20px;
    }
    .add-to-collection__list{
        max-height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
