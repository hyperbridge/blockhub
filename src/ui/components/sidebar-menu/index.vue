<template>
    <div class="sidebar-menu">
        <h3 v-if="title">
            <i :class="icon" v-if="icon"></i>
            {{ title }}
        </h3>
        <h5 v-if="sub_title">
            <i :class="sub_icon" v-if="sub_icon"></i>
            {{ sub_title }}
        </h5>
        <ul v-if="menu">
            <li v-for="(item, index) in menu" :key="index">
                <a :href="item.url" :target="item.target">
                    <i :class="item.icon" v-if="item.icon"></i>
                    {{ item.link_text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['menu', 'title', 'sub_title', 'icon', 'sub_icon']
    }
</script>

<style lang="scss" scoped>
    .sidebar-menu{
        h3{
            font-size: 30px;
            color: #fff;
            opacity: .7;
            i{
                margin-right: 5px;
            }
        }
        h5{
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            color: #fff;
            i{
                margin-right: 5px;
            }
        }
        ul{
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            li{
                padding-right: 10px;
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
        }
    }
</style>
