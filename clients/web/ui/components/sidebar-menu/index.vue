<template>
    <div
        class="sidebar-menu"
        :class="mClass">
        <h3 v-if="title">
            <i
                v-if="icon"
                :class="icon" />
            {{ title }}
        </h3>
        <h5
            v-if="subTitle"
            class="sidebar-menu__subtitle">
            <i
                v-if="subIcon"
                :class="subIcon" />
            {{ subTitle }}
        </h5>
        <ul class="sidebar-menu__list">
            <slot>
                <c-sidebar-menu-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.to">
                    <slot
                        name="link"
                        :link="link">
                        <i
                            v-if="link.icon"
                            :class="link.icon" />
                        {{ link.title }}
                    </slot>
                </c-sidebar-menu-link>
            </slot>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu-link': () => import('~/components/sidebar-menu/menu-item').then(m => m.default || m)
    },
    props: {
        icon: {
            type: String,
            default: null
        },
        subIcon: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        },
        mClass: {
            type: String,
            default: null
        },
        links: {
            type: Array,
            default: () => []
        }
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
