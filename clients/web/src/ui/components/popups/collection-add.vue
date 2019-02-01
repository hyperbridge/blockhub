<template>
    <div class="add-to-collection">
        <c-button :status="buttonType">
            Add to Collection
        </c-button>
        <c-basic-popup :activated="activated" @close="$emit('close')">

            <template slot="body">
                <div class="item-info">
                    <div class="item-info__image" v-if="image">
                        <img :src="image" />
                    </div>
                    <div class="item-info__description">
                        <div class="h3 font-weight-bold m-0 p-0">
                            {{ name }}
                        </div>
                    </div>
                </div>
                <div>
                    <c-button status="plain" icon="star" class="p-0">
                        HighLight this
                    </c-button>
                </div>
                <div class="add-to-collection__filter d-flex align-items-end justify-content-between mt-3 mb-4 pb-4">
                    <div class="h4 font-weight-bold m-0 p-0 mr-4">
                        Choose collection
                    </div>
                    <div>
                        <c-input-searcher bgColor="rgba(255, 255, 255, .07)" v-model="searchQuery" placeholder="Filter Collections" />
                    </div>
                </div>
                <div class="add-to-collection__list">
                    <div class="create-collection d-flex">
                        <template v-if="createForm">
                            <c-input bgColor="rgba(255, 255, 255, .07)" v-model="collectionName" placeholder="Collection name" />
                            <c-button status="second-warning" size="sm" class="mx-2" @click=" createForm = false ">
                                Cancel
                            </c-button>
                            <c-button status="second-success" size="sm">
                                Add
                            </c-button>
                        </template>
                        <template v-if="!createForm">
                            <c-button status="second-info" icon="plus" size="sm" class="ml-auto" @click=" createForm = true ">
                                Create New
                            </c-button>
                        </template>
                    </div>
                    <c-checkbox-group class="mt-2">
                        <c-checkbox v-for="i in 5" :id="`collection_${i}`" class="my-3">
                            This is Collection {{ i }}
                        </c-checkbox>
                    </c-checkbox-group>
                    <c-button status="second-success" size="sm" class="ml-auto mt-3" @click=" createForm = true ">
                        Add to collection
                    </c-button>
                </div>
            </template>

        </c-basic-popup>
    </div>

</template>

<script>
    export default {
        props: {
            buttonType: {
                type: String,
                default: 'second-info'
            },
            activated: {
                type: Boolean,
                default: true
            },
            image: String
        },
        components: {
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
            'c-checkbox-group': (resolve) => require(['@/ui/components/checkbox/group'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
        },
        data(){
            return{
                searchQuery: '',
                collectionName: '',
                createForm: false
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
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 3px;
        overflow: hidden;
    }
    .item-info__description{
        width: calc( 100% - 120px );
        padding-left: 20px;
    }
</style>
