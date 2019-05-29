<template>
    <ul class="breadcrumb" v-if="links.length">
        <li v-for="(link, index) in links" class="breadcrumb-item" :class="{ 'active': index == links.length-1 }" :key="index">
            <router-link :to="link.to ? link.to : link.title">{{ link.title }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        links: {
            type: [Array, Boolean],
            default: [],
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumb {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        overflow: hidden;
        padding: 0 !important;
        background: transparent;
        margin: 20px 30px !important;
        li {
            background: rgba(255, 255, 255, .3);
            height: 20px;
            position: relative;
            padding: 0 3px;
            &:before {
                display: none;
            }
            &:after {
                width: 2px;
                position: absolute;
                background: rgba(50, 49, 74, 0.8);
                content: "";
                right: -1px;
                top: -10px;
                bottom: -10px;
                display: inline-block;
                transform: rotate(25deg);
                z-index: 10;
            }
            a {
                color: #fff;
                text-transform: uppercase;
                font-size: 13px;
                padding: 0 10px 0 5px;
                text-overflow: ellipsis;
                font-weight: bold;
                max-width: 250px;
                overflow: hidden;
                white-space: nowrap;
                display: inline-block;
            }
            &:first-child {
                border-radius: 15px 0 0 15px;
            }
            &:last-child {
                border-radius: 0 15px 15px 0;
                background: rgba(45, 44, 67, 0.8);
                padding-left: 0;
                z-index: 11;
                &:after {
                    display: none;
                }
                &:before {
                    display: inline-block;
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 0 20px 9px;
                    border-color: transparent transparent #2d2c43 transparent;
                    bottom: 0;
                    left: -10px;
                }
            }
        }
    }
</style>
