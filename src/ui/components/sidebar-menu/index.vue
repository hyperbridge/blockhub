<template>
    <div class="sidebar-menu" :class="mClass">
        <h3 v-if="title">
            <i :class="icon" v-if="icon"></i>
            {{ title }}
        </h3>
        <h5 v-if="sub_title">
            <i :class="sub_icon" v-if="sub_icon"></i>
            {{ sub_title }}
        </h5>
        <ul class="sidebar-menu__list" v-if="menu">
            <c-sidebar-menu-link v-for="(item, index) in menu"
                                 :url="item.url"
                                 :target="item.target"
                                 :icon="item.icon"
                                 :link_text="item.link_text"
                                 :key="index">
            </c-sidebar-menu-link>
        </ul>
        <ul class="sidebar-menu__list" v-else>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    import MenuLink from '../sidebar-menu/menu_item'

    export default {
        props: {
            menu: {
                type: Array
            },
            icon:{
                type: String
            },
            sub_icon:{
                type: String
            },
            title:{
                type: String
            },
            sub_title:{
                type: String
            },
            mClass:{
                type: String
            }
        },
        components:{
            'c-sidebar-menu-link': MenuLink
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-menu{
        h3{
            font-size: 30px;
            color: #fff;
            opacity: .8;
            i{
                margin-right: 5px;
            }
        }
        h5{
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            color: #fff;
            opacity: .8;
            i{
                margin-right: 5px;
            }
        }
        .sidebar-menu__list{
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
        }
    }
</style>
