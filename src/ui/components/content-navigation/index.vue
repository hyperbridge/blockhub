<template>
    <div class="content-navigation-wrapper">
        <c-pagination v-if="paginationMode"
            :pages="13"
        />
        <c-load-more v-else
            @click="$emit('loadMore')"
        />
    </div>
</template>

<script>
    export default {
        name: 'content-navigation',
        props: {
            pagination: {
                type: Object
            },
            load_more: {
                type: Object
            }
        },
        components: {
            'c-pagination': () => import('@/ui/components/pagination'),
            'c-load-more': () => import('@/ui/components/buttons/load-more')
        },
        computed: {
            paginationMode() {
                return this.$store.state.user.settings.pagination;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content-navigation-wrapper {
        margin: 15px 0;
        display: flex;
        justify-content: center;
    }
</style>
