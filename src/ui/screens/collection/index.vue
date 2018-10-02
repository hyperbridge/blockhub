<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block>
                            <c-heading-bar name="Items">
                                <template slot="additional-action">
                                    <c-heading-bar-fields name="Rarity" icon="fas fa-trophy" @click_up=""  @click_down="" />
                                    <c-heading-bar-fields name="Value" icon="fas fa-dollar" @click_up=""  @click_down="" />
                                </template>
                            </c-heading-bar>
                            <div class="filter_blk form-inline">
                                <div class="form-group">
                                    <label>
                                        Filter by
                                    </label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Type</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>
                                        Game
                                    </label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>
                                        Name
                                    </label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <c-button status="danger" class="mr-4" icon="times">Clear</c-button>
                                    <c-button status="info" icon="filter">More filters</c-button>
                                </div>
                            </div>
                            <c-assets-grid :list="getAssets" />
                            <c-pagination :pages="8" />
                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-heading-bar-fields' : (resolve) => require(['@/ui/components/heading-bar/additional-action'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-pagination': (resolve) => require(['@/ui/components/pagination'], resolve),
            'c-assets-grid': (resolve) => require(['@/ui/components/assets-grid'], resolve)
        },
        computed: {
            getAssets(){
                let ids = this.$store.state.marketplace.collections[this.id].assets,
                    list = this.$store.state.marketplace.assets,
                    arr = [];
                if (ids)
                    ids.forEach( (id, i) => {
                        if (list[id])
                            arr.push(list[id])
                    });
                return arr;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .filter_blk{
        display: flex;
        width: 100%;
        margin: 0 0 25px 0;
        justify-content: flex-end;
        align-items: center;
        .form-group{
            margin-left: 20px;
            label{
                margin-right: 10px;
            }
        }
        .btn-link{
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            &:last-child{
                padding-right: 0;
            }
        }
        .form-control{
            width: 80px;
            padding: 0 5px;
            line-height: 28px;
            height: 28px!important;
        }
    }
</style>
