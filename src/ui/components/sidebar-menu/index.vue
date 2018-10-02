<template>
    <div class="sidebar-menu" :class="mClass">
        <h3 v-if="title">
            <i :class="icon" v-if="icon"></i>
            {{ title }}
        </h3>
        <h5 v-if="sub_title" class="sidebar-menu__subtitle">
            <i :class="sub_icon" v-if="sub_icon"></i>
            {{ sub_title }}
        </h5>
        <ul class="sidebar-menu__list">
            <slot>
                <c-sidebar-menu-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.to"
                >
                    <slot name="link" :link="link">
                        {{ link.title }}
                    </slot>
                </c-sidebar-menu-link>
            </slot>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            icon: String,
            sub_icon: String,
            title: String,
            sub_title: String,
            mClass: String,
            links: Array
        },
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-menu{
        h3{
            font-size: 30px;
            color: #fefeff;
            i{
                margin-right: 5px;
            }
        }
        h5{
            font-size: 15px;
            font-weight: bold;
            text-transform: uppercase;
            color: #fefeff;
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
        .sidebar-menu__subtitle {
            margin: 10px 0;
        }
    }
</style>
