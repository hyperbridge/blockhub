<template>
    <div class="dropdown-vue">
        <button
            class="dropdown-vue__button"
            type="button"
            @click="showMenu = !showMenu"
        >
            {{ title }}
            <c-icon name="caret-down"/>
        </button>
        <transition name="slide-in-top">
            <div v-if="showMenu" class="dropdown-vue__content">
                <slot/>
            </div>
        </transition>
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
    .dropdown-vue__button {
        border-style: none;
        border-radius: 6px;
        background: rgba(53, 55, 87, 0.7);
        height: 30px;
        min-width: 140px;
        color: #fff;
        font-size: 11px;
        margin: 5px;
        .fas {
            margin-left: 4px;
        }
    }
    .dropdown-vue__content {
        border: 1px solid #565a8fb3;
        border-radius: 4px;
        width: 170px;
        z-index: 30;
        position: absolute;
        top: 40px;
        left: 5px;
        box-shadow: 0 0 10px 0 rgba(27, 28, 48, 0.7);
    }
</style>
