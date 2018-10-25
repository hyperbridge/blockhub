<template functional>
    <div class="block-menu">
        <nav class="block-menu__header">
            <router-link
                v-for="(link, index) in props.links"
                class="block-menu__link"
                :key="index"
                :to="link.to"
            >{{ link.title }}</router-link>
        </nav>
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
    .block-menu {
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .13);
    }
    %triangle {
        content: "";
        position: absolute;
        border: 5px solid transparent;
        border-bottom-color: #fff;
        bottom: -5px;
    }
    .block-menu__header {
        display: flex;
        border-bottom: 2px solid #fff;
        margin-bottom: 20px;
        .router-link-exact-active:not(:first-child):before {
            @extend %triangle;
            left: -5px;
        }
    }
    .block-menu__link {
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        display: block;
        margin-right: 25px;
        padding: 5px 0 10px 0;
        position: relative;
        text-decoration: none;
        &.router-link-exact-active {
            border-bottom: 5px solid #fff;
            &:after {
                @extend %triangle;
                right: -5px;
            }
        }
    }
</style>

