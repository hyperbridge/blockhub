<template>
    <li :class="{'has-submenu' : $slots.submenu, 'open' : isOpen, 'is-minimized' : minimized }">

        <router-link :to="to" v-if="!$slots.submenu">
            <i :class="[iconType + ' fa-' + icon ]"></i>
            <span>
                <slot />
            </span>
        </router-link>

        <a href="#" @click="toggleSubMenu" v-else>
            <i :class="[iconType + ' fa-' + icon ]"></i>
            <span>
                <slot />
            </span>
        </a>

        <ul class="sub-menu" v-if="$slots.submenu">
            <slot name="submenu" />
        </ul>

    </li>
</template>

<script>
    export default {
        name: 'menu-item',
        props:{
            to: [ String, Object ],
            icon: {
                type: String,
                default: 'square-full icon-sm'
            },
            iconType: {
                type: String,
                default: 'fas'
            },
            minimized: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                isOpen: false,
                hasActive: false
            }
        },
        methods:{
            toggleSubMenu(){
                if(this.$slots.submenu)
                    this.isOpen = !this.isOpen
            }
        },
        mounted(){
            console.log('minimized', this.$parent['minimized'])
        }
    }
</script>

<style lang="scss" scoped>
    li{
        display: flex;
        width: 100%;
        flex-direction: column;
        position: relative;
        a{
            display: flex;
            align-items: center;
            height: 38px;
            color: #323c47;
            padding: 0 10px;
            margin-bottom: 1px;
            i{
                font-size: 20px;
                width: 20px;
                text-align: center;
                margin-right: 10px;
                &.icon-sm{
                    font-size: 4px;
                }
            }
            &:hover{
                text-decoration: none;
            }
            &.is-active{
                background: rgba(0, 0, 0, 0.03);
                i{
                    color: #65bbfb;
                }
            }
        }
        &.has-submenu{
            &:before{
                font-family: 'Font Awesome 5 Free';
                position: absolute;
                z-index: 1;
                right: 10px;
                top: 10px;
                font-size: 14px;
                content: "\f107";
                line-height: 20px;
            }
            &.open{
                &:before{
                    content: "\f106";
                }
            }
        }
        &:hover,
        &.open{
            background: rgba(0, 0, 0, 0.03);
        }
        &.open{
            .sub-menu{
                display: flex;
            }
        }
        &.is-minimized{
            a{
                padding: 0;
            }
            i{
                margin: 0;
                width: 100%;
            }
            span{
                display: none;
            }
            &:before{
                display: none;
            }
            position: relative;
            .sub-menu{
                position: absolute;
                transform: translateX(40px);
                width: 200px;
                top: 0;
                z-index: 10;
                padding-left: 10px;
                li{
                    background: #efeeef;
                    a{
                        padding: 0 10px;
                        i{
                            width: 20px;
                        }
                    }
                }
                span{
                    display: block;
                }
            }
            &:hover{
                .sub-menu{
                    display: flex;
                }
            }
        }
    }
    .sub-menu{
        padding: 0;
        margin: 0;
        display: none;
    }
</style>
