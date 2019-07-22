<template>
    <c-layout navigationKey="collection" :breadcrumbLinks="breadcrumbLinks">
        <c-loading size="lg" :enabled="!collection" />
        <div class="row" v-if="collection">
            <div class="col-12 margin-bottom-40">
                <div class="collection-header">
                    <div class="collection-header__name">
                        <div class="p-0 margin-bottom-5 h1 text-white">
                            {{ collection.name }}
                        </div>
                        <div>
                            <strong class="mr-3">
                                {{ collection.resources.length }} Items
                            </strong>
                            <div v-if="collection.updatedAt">
                                Updated {{ timeAgo }}
                            </div>
                        </div>
                    </div>
                    <div class="collection-header__stats">
                        <div>
                            <div class="h5 font-weight-bold m-0 p-0 text-white">
                                Owner
                            </div>
                            {{ collection.meta.author }}
                        </div>
                        <div>
                            <div class="h5 font-weight-bold m-0 p-0 text-white">
                                Estimated Value
                            </div>
                            {{ collection.meta.estimatedValue | convertCurrency }}
                        </div>
                        <div>
                            <div class="h5 font-weight-bold m-0 p-0 text-white">
                                Item Count
                            </div>
                            {{ collection.resources.length }}
                        </div>
                        <div v-if="collection.updatedAt">
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
                        <div class="filter-block form-inline">
                            <div class="form-group">
                                <label>
                                    Filter by
                                </label>
                                <select
                                    id="resourceType"
                                    class="form-control">
                                    <option>Type</option>
                                    <option value="Product">
                                        Product
                                    </option>
                                    <option value="Crowdfund">
                                        Crowdfund
                                    </option>
                                    <option value="Idea">
                                        Idea
                                    </option>
                                    <option value="Asset">
                                        Digital Asset
                                    </option>
                                </select>
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
                                    hidden
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
                    <div v-for="resource in collection.resources">
                        {{ resource.id }}
                    </div>
                    <!-- <c-assets-grid :list="collection.resources" />
                    <c-pagination :pages="8" /> -->
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
import moment from 'moment'

export default {
    head() {
        if (!this.collection) return {}

        return {
            title: `${this.collection.name} | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub is a next-generation decentralized digital distribution platform' },
                { hid: 'keywords', name: 'keywords', content: 'blockhub, hyperbridge, blockchain, cryptocurrency, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-heading-bar-fields': () => import('~/components/heading-bar/additional-action').then(m => m.default || m),
        'c-pagination': () => import('~/components/pagination').then(m => m.default || m),
        'c-assets-grid': () => import('~/components/assets-grid').then(m => m.default || m)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        timeAgo() {
            return moment(this.collection.updatedAt).fromNow()
        }
    },
    data() {
        return {
            collection: null,
            breadcrumbLinks: []
        }
    },
    async mounted() {
        Object.assign(this, await new Promise(this.fetchData))
    },
    async asyncData({ params, store, error }) {
        const fetchData = async (resolve, reject) => {
            const collection = (await store.dispatch('collections/find', {
                query: {
                    id: Number(params.id)
                }
            })).data[0]

            if (!collection) return error({ statusCode: 404, message: 'Collection not found' })

            if (collection.resources) {
                collection.resources = await Promise.all(collection.resources.map(resource => {
                    const typeToService = {
                        'Product': 'products',
                        'Project': 'projects',
                        'Idea': 'ideas',
                        'Asset': 'assets'
                    }

                    return store.dispatch(`${typeToService[resource.relationType]}/find`, {
                        query: {
                            id: resource[`to${resource.relationType}Id`]
                        }
                    })
                }))
            } else {
                collection.resources = []
            }

            resolve({
                collection,
                breadcrumbLinks: [
                    { to: { path: '/' }, title: 'Home' },
                    { to: { path: `/collection/${collection.id}` }, title: collection.name }
                ]
            })
        }

        if (process.server) {
            return await new Promise(fetchData)
        } else {
            return { fetchData }
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
    .filter-block{
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
