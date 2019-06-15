<template>
    <c-layout navigationKey="collection" :breadcrumbLinks="breadcrumbLinks">
        <div class="row">
            <template v-if="!collection">
                <p>Not found.</p>
            </template>
            <template v-else>
                <div class="col-12 margin-bottom-40">
                    <div class="collection-header">
                        <div class="collection-header__name">
                            <div class="p-0 margin-bottom-5 h1 text-white">
                                {{ collection.name }}
                            </div>
                            <div>
                                <strong class="mr-3">
                                    {{ assets.length }} Items
                                </strong>
                                Updated {{ timeAgo }}
                            </div>
                        </div>
                        <div class="collection-header__stats">
                            <div>
                                <div class="h5 font-weight-bold m-0 p-0 text-white">
                                    Owner
                                </div>
                                {{ collection.author }}
                            </div>
                            <div>
                                <div class="h5 font-weight-bold m-0 p-0 text-white">
                                    Estimated Value
                                </div>
                                {{ collection.estimatedValue | convertCurrency }}
                            </div>
                            <div>
                                <div class="h5 font-weight-bold m-0 p-0 text-white">
                                    Item Count
                                </div>
                                {{ assets.length }}
                            </div>
                            <div>
                                <div class="h5 font-weight-bold m-0 p-0 text-white">
                                    Last Update
                                </div>
                                {{ timeAgo }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <c-block>
                        <c-heading-bar name="Items" />
                        <div class="d-flex justify-content-between align-items-center margin-bottom-20">
                            <div class="filter_blk form-inline">
                                <div class="form-group">
                                    <label>
                                        Filter by
                                    </label>
                                    <select
                                        id="exampleFormControlSelect1"
                                        class="form-control">
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
                                    <input
                                        type="text"
                                        class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control">
                                </div>
                                <div class="form-group">
                                    <c-button
                                        status="danger"
                                        class="mr-4"
                                        icon="times">
                                        Clear
                                    </c-button>
                                    <c-button
                                        status="info"
                                        icon="filter">
                                        More filters
                                    </c-button>
                                </div>
                            </div>
                            <div class="d-inline-flex">
                                <c-heading-bar-fields
                                    name="Rarity"
                                    icon="fas fa-trophy" />
                                <c-heading-bar-fields
                                    name="Value"
                                    icon="fas fa-dollar" />
                            </div>
                        </div>
                        <c-assets-grid :list="assets" />
                        <c-pagination :pages="8" />
                    </c-block>
                </div>
            </template>
        </div>
    </c-layout>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-heading-bar-fields': () => import('~/components/heading-bar/additional-action').then(m => m.default || m),
        'c-pagination': () => import('~/components/pagination').then(m => m.default || m),
        'c-assets-grid': () => import('~/components/assets-grid').then(m => m.default || m)
    },
    props: [],
    computed: {
        assets() {
            if (!this.collection.meta.assets) return []

            return this.collection.meta.assets.map(id => this.$store.getters['assets/get'](id))
        },
        timeAgo() {
            return moment(this.collection.updates).fromNow()
        }
    },
    async asyncData({ params, store }) {
        await store.dispatch('collections/find', {
            query: {
                id: Number(params.id)
            }
        })

        const collection = store.getters['collections/get'](params.id)

        if (collection.meta.assets) {
            await Promise.all(collection.meta.assets.map(id => store.dispatch('assets/find', {
                query: {
                    id
                }
            })))
        }

        return {
            collection,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                collection && { to: { path: `/collection/${collection.id}` }, title: collection.name }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .collection-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
    }
    .collection-header__stats{
        display: flex;
        justify-content: space-between;
        div{
            width: auto;
            max-width: 130px;
            margin-left: 30px;
            &:first-child{
                margin: 0;
            }
        }
    }
    .filter_blk{
        display: inline-flex;
        align-items: center;
        .form-group{
            margin-left: 20px;
            label{
                margin-right: 10px;
            }
            &:first-child{
                margin: 0;
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
