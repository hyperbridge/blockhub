<template>
    <li class="sidebar-menu__item">
        <nuxt-link
            class="item__link"
            v-bind="$attrs">
            <slot />
        </nuxt-link>
    </li>
</template>

<script>
export default {
    name: 'SidebarMenuLink',
    inheritAttrs: false
}
</script>

<style lang="scss" scoped>
    .sidebar-menu__item {
        list-style-type: none;
    }
    .item__link {
        color: #fff;
        font-size: 14px;
        padding: 3px 0;
        text-decoration: none;
        display: block;
        transition: all 200ms ease-in-out;
        opacity: .9;
        &:hover {
            opacity: 1;
        }
    }
</style>
