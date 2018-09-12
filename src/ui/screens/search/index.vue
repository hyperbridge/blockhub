<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Search">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-6 col-lg-8">
                                    <c-searcher size="lg" />
                                </div>
                                <div class="col-12 col-md-auto">
                                    <c-button status="success" size="lg" icon="sliders-h" data-toggle="collapse" data-target="#moreFilters" aria-expanded="false" aria-controls="collapseFilters">
                                        Filters
                                    </c-button>
                                </div>
                            </div>
                            <div class="collapse" id="moreFilters">
                                <hr>
                                <!--Checkbox list-->
                                <div class="row">
                                    <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                        <div class="checkbox-list">
                                            <c-checkbox-group title="Game type">
                                                <c-checkbox v-for="(item, index) in filters.game_type"
                                                            :key="index"
                                                            :id="['game_type_' + index]"
                                                            :label="item.label"
                                                            v-model="item.value" />
                                            </c-checkbox-group>
                                        </div>
                                    </div>
                                </div>
                                <!--Checkbox list End-->
                                <!--Input row-->
                                <div class="row">
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 1</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 2</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 3</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c-block>
                        <div class="filter-tags">
                            <div class="filter-tags__item"
                                 v-for="(item, index) in filters.game_type"
                                 :key="index" v-if="item.value == true">
                                {{ item.label }}
                                <i class="fas fa-times-circle" @click="$emit('click')"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-checkbox': () => import('@/ui/components/checkbox/checbox.vue'),
            'c-checkbox-group': () => import('@/ui/components/checkbox/checbox-group.vue'),
            'c-block': () => import('@/ui/components/block'),
            'c-searcher': () => import('@/ui/components/searcher'),
        },
        data: () => ({
            filters:{
                game_type:{
                    simulator: {
                        label: 'Simulator',
                        value: false
                    },
                    action: {
                        label: 'Action',
                        value: true
                    },
                    real_time: {
                        label: 'Real time',
                        value: false
                    },
                    strategy: {
                        label: 'Strategy',
                        value: false
                    },
                    adventure: {
                        label: 'Adventure',
                        value: false
                    }
                }
            }
        }),
    }
</script>

<style lang="scss" scoped>
    .filter-tags{
        display: flex;
        margin: 10px -4px;
    }
    .filter-tags__item{
        background: #fae17d;
        padding: 0px  3px 0 10px;
        border-radius: 15px;
        margin: 4px;
        color: #30304B;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 20px;
        i{
            margin-left: 5px;
            font-size: 16px;
            &:hover{
                color: #45456c;
                cursor: pointer;
            }
        }
    }
    .input-group {
        border-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        overflow: hidden;
        .input-group-append {
            margin: 0;
            .input-group-text {
                border: none;
            }
        }
        input {
            border: none;
            &:active,
            &:focus {
                border: unset;
                box-shadow: none;
            }
        }
    }
</style>
