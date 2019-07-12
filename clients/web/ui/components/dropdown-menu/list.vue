<template>
    <c-dropdown
        :id="id"
        :name="title"
        class="product-genre"
        :showBg="true">
        <div class="dropdown-list__content">
            <a
                v-for="(item, index) in list"
                :key="index"
                :href="`#item-${index+1}`"
                :class="{ 'content__item--active': item.selected }"
                @click.prevent="$emit('click', item)">{{ item.name }}</a>
        </div>
    </c-dropdown>
</template>

<script>
export default {
    name: 'DropdownList',
    components: {
        'c-dropdown': () => import('~/components/dropdown-menu/type-2').then(m => m.default || m)
    },
    props: {
        id: {
            type: String,
            default: 'dropdown-list'
        },
        title: {
            type: String,
            default: null
        },
        list: {
            type: Array,
            default: () => []
        },
        activeList: {
            type: Array,
            default: () => []
        }
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
