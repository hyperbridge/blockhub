<template>
    <div class="sidebar-menu" :class="mClass">
        <h3 v-if="title">
            <i :class="icon" v-if="icon"></i>
            {{ title }}
        </h3>
        <h5 v-if="subTitle" class="sidebar-menu__subtitle">
            <i :class="subIcon" v-if="subIcon"></i>
            {{ subTitle }}
        </h5>
        <ul class="sidebar-menu__list">
            <slot>
                <c-sidebar-menu-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.to"
                >
                    <slot name="link" :link="link">
                        <i :class="link.icon" v-if="link.icon"></i>
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
            subIcon: String,
            title: String,
            subTitle: String,
            mClass: String,
            links: Array
        },
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/components/sidebar-menu/menu_item'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-menu{
        margin-bottom: 20px;

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
    }
    .sidebar-menu__list{
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        i {
            margin-right: 4px;
        }
    }
    .sidebar-menu__subtitle {
        margin: 10px 0;
    }
</style>
