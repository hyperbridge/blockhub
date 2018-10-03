<template>
    <div class="dropdown-vue">
        <button type="button" @click="showMenu = !showMenu">
            {{ title }}
        </button>
        <c-list
            v-if="showMenu"
            class="dropdown-vue-menu__list"
            :items="items"
        >
            <slot slot-scope="{ item }" :item="item"/>
        </c-list>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            items: Array
        },
        components: {
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
        },
        data() {
            return {
                showMenu: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-vue {
        position: relative;
    }
    .dropdown-vue__list {
        // position: absolute;
        top: 30px;
        left: 0;
    }
</style>
