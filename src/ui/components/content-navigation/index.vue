<template>
    <div class="content-navigation-wrapper">
        <c-pagination v-if="paginationMode" />
        <div v-else>
            <a
                @click="$emit('loadMore')"
                class="load-more"
            >
                <div class="load-more__line"></div>
                <strong class="load-more__text">LOAD MORE</strong>
                <div class="load-more__line"></div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'content-navigation',
        components: {
            'c-pagination': () => import('@/ui/components/pagination')
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
    }

    .load-more {
        display: flex;
        align-items: center;
        border-style: none;
        background-color: transparent;
        cursor: pointer;
        &__line {
            background-color: #A2A3BC;
            height: 2px;
            flex: 3;
            width: 100%;
        }
        &__text {
            flex: 2.5;
            font-size: 15px;
            color: #A2A3BC;
            text-align: center;
            margin: 0 5px;
        }
    }
</style>
