<template>
    <div class="add-to-collection">
        <c-button :status="buttonType">
            Add to Collection
        </c-button>
        <c-basic-popup :activated="activated" @close="$emit('close')">

            <template slot="body">
                <div class="item-info">
                    <slot />
                </div>
                <div>
                    <c-button status="plain" icon="star" class="p-0">
                        HighLight this
                    </c-button>
                </div>
                <div class="add-to-collection__filter d-flex align-items-center justify-content-between my-3">
                    <div class="h5 font-weight-bold m-0 p-0 mr-4">
                        Choose collection
                    </div>
                    <div>
                        <c-input v-model="searchQuery" placeholder="Type to search" />
                    </div>
                </div>
                <div class="add-to-collection__list">

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
            }
        },
        components: {
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
        },
        data(){
            return{
                searchQuery: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-to-collection{
        display: inline-flex;
    }
</style>
