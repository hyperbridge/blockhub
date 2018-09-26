<template>
    <c-dropdown
        :id="id"
        name="Filter by Genre"
        class="product-genre"
        :showBg="true"
    >
        <div class="dropdown-list__content">
            <a
                v-for="(item, index) in list"
                :key="index"
                :href="`#item-${index+1}`"
                @click.prevent="$emit('click', item)"
                :class="{ 'content__item--active': item.selected }"
            >{{ item.name }}</a>
        </div>
    </c-dropdown>
</template>

<script>
    export default {
        name: 'dropdown-list',
        components: {
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
        },
        props: {
            id: {
                type: String,
                default: 'dropdown-list'
            },
            list: Array,
            activeList: Array
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-list__content {
        max-height: 260px;
        overflow-y: auto;
    }
    .content__item--active {
        background: rgba(255,255,255,.1);
    }
</style>
