<template>
    <c-basic-popup :activated="activated && $store.state.application.signedIn" @close="activated = false">

        <template slot="body">
            <div class="item-info">
                <div class="item-info__image" v-if="image">
                    <img :src="image" />
                </div>
                <div class="item-info__description" v-if="name">
                    <div class="h4 font-weight-bold mb-2 p-0">
                        {{ name }}
                    </div>
                    <p class="p-0 m-0" style="opacity: .7">
                        {{ description }}
                    </p>
                </div>
            </div>
            <div v-if="name">
                <c-button status="plain" icon="star" class="p-0">
                    Highlight this
                </c-button>
            </div>
            <div class="add-to-collection__filter d-flex align-items-end justify-content-between mt-3 mb-4 pb-4">
                <div class="h4 font-weight-bold m-0 p-0 mr-4">
                    Choose collection
                </div>
                <div>
                    <c-input bgColor="rgba(255, 255, 255, .07)" v-model="searchQuery" placeholder="Filter Collections" />
                </div>
            </div>
            <div class="create-collection d-flex">
                <template v-if="createForm">
                    <c-button status="second-success" size="sm" class="mx-2" @click="addCollection(createCollectionRequest)">
                        Add
                    </c-button>
                    <c-input bgColor="rgba(255, 255, 255, .07)" placeholder="Collection name" v-model="createCollectionRequest.name" />
                    <c-button status="second-warning" size="sm" @click="createForm = false">
                        Cancel
                    </c-button>
                </template>
                <template v-if="!createForm">
                    <c-button status="second-info" icon="plus" size="sm" @click="createForm = true">
                        Create New
                    </c-button>
                </template>
            </div>
            <div class="add-to-collection__list mt-3">
                <template v-if="collections">
                    <c-checkbox-group v-if="filteredList.length">
                        <c-checkbox v-for="(collection, idx) in filteredList" :id="`collection_${idx}`" class="my-3" :class="{ 'mt-0' : idx == 1 }">
                            {{ collection.name }}
                        </c-checkbox>
                    </c-checkbox-group>
                    <div class="h6 mt-3" v-else>
                        No collections were found.
                    </div>
                </template>
                <div class="h5" v-else>
                    You don't have collection yet.
                </div>
            </div>
        </template>

    </c-basic-popup>

</template>

<script>
    export default {
        props: {
            activated: Boolean,
            buttonType: {
                type: String,
                default: 'second-info'
            },
            image: String,
            name: String,
            description: String,
            collections: Array
        },
        components: {
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
            'c-checkbox-group': (resolve) => require(['@/ui/components/checkbox/group'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
        },
        data() {
            return {
                searchQuery: '',
                createForm: false,
                createCollectionRequest: {
                    name: ''
                }
            }
        },
        computed: {
            filteredList() {
                if (this.collections && this.searchQuery) {
                    return this.collections.filter(collection => {
                        return collection.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                    })
                } else {
                    return this.collections
                }
            }
        },
        watch: {
            activated(oldVal, newVal) {
                if (!this.$store.state.application.signedIn) {
                    this.$store.commit('application/activateModal', 'login')
                }
            }
        },
        methods: {
            addCollection(collection) {
                this.createForm = false
                
                this.$store.dispatch('collections/create', [collection, {
                    query: {
                        $eager: '[owner]'
                    }
                }]).then((res) => {
                })
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
