<template>
    <li class="sidebar-menu__item" :class="lClass">
        <a :href="url" :target="target" @click="$emit('click')" :class="aClass">
            <i :class="icon" v-if="icon"></i>
            {{ link_text }}
        </a>
    </li>
</template>

<script>
    export default {
        name: 'c-sidebar-menu-link',
        props: {
            url:{
                type: String
            },
            target:{
                type: String,
                default: '_self'
            },
            icon:{
                type: String
            },
            link_text:{
                type: String
            },
            lClass:{
                type: String
            },
            aClass:{
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-menu__item{
        padding-right: 10px;
        list-style: none;
        -moz-transition: all 200ms ease-in-out, color 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out, color 200ms ease-in-out;
        -webkit-transition: all 200ms ease-in-out, color 200ms ease-in-out;
        transition: all 200ms ease-in-out, color 200ms ease-in-out;
        a{
            color: #fff;
            font-size: 14px;
            line-height: 22px;
            text-decoration: none;
            i{
                margin-right: 5px;
                font-size: 12px;
            }
        }
        &:hover{
            padding-left: 10px;
            padding-right: 0;
        }
    }
</style>
