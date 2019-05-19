<template>
    <c-layout navigationKey="store">
        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                name="Browse All Realms"
            />
            <div class="row">
                <c-loading :enabled="!realms.length" size="lg" />
                <c-metro-grid class="w-100" v-if="realms.length">
                    <c-metro-item v-for="(realm, index) in realms" :image="realm.meta.images.logo" width="25%" :fullImage=" index == 1 ? true : false">
                        <c-button class="h4 font-weight-bold" :to="`/realm/${realm.id}`">
                            {{ realm.name }}
                        </c-button>
                        <div>
                            {{ realm.name }}
                        </div>
                    </c-metro-item>
                </c-metro-grid>
            </div>
        </c-block>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-metro-grid': () => import('~/components/metro/grid').then(m => m.default || m),
        'c-metro-item': () => import('~/components/metro/metro-item').then(m => m.default || m),
    },
    data() {
        return {
            loading: true
        }
    },
    computed: {
        realms() {
            return this.$store.getters['realms/list']
        },
        list() {
            const result = []

            result.push({
                type: 'realmsRow',
                data: {
                    title: 'Realms',
                    ref: 'realms_sl',
                    swiper: this.$refs.realms_sl && this.$refs.realms_sl.swiper,
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    },
                    realms: this.$store.state.marketplace.realms
                }
            })

            return result
        }
    },
    created() {
        this.$store.dispatch('realms/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        }).then(() => {
            this.loading = false
        })
       //this.$store.commit('application/activateModal', 'coming-soon')
    }
}
</script>

<style lang="scss" scoped>

</style>
