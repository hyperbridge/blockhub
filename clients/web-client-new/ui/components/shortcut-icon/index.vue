<template>
    <div class="shortcut-icon" :class="{ 'icon-active' : active }" :style="style" @mouseover="show = true" @mouseleave="show = false">
        <i v-if="withButton && !icon && removable"
           class="icon-delete-btn fa fa-times"
           @mousedown="remove"/>
        <slot>
            <c-button status="none" :href="href" :to="to" :style="{ 'background-image': image ? 'url(' + image + ')' : 'none', 'color': 'inherit', 'justify-content': 'center' }" @click="click">
                <i v-if="icon" :class="icon" />
            </c-button>
        </slot>
        <c-progress-bar :percentages="74" style="height: 3px; min-height: 3px; margin-top: 7px" v-if="percent" />
        <transition name="fade" v-if="text && show">
            <div class="shortcut-icon__title">
                {{ text }}
            </div>
        </transition>
        <div class="shortcut-icon__new" v-if="unread"></div>
    </div>
</template>

<script>
    export default {
        props: {
            index: {
                type: Number
            },
            text: {
                type: String,
                default: null
            },
            image: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: '#'
            },
            to: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: null
            },
            sort: {
                type: Number,
                default: null
            },
            eventKey: {
                type: String,
                default: null
            },
            eventValue: {
                type: String,
                default: null
            },
            textColor: {
                type: String,
                default: null
            },
            withButton: {
                type: Boolean,
                default: false
            },
            removable: {
                type: Boolean,
                default: true
            },
            unread: {
                type: Boolean,
                default: false
            },
            color: {
                type: Object,
                default: () => {
                    return {
                        r: null,
                        g: null,
                        b: null
                    }
                }
            },
            active: {
                type: Boolean,
                default: false
            },
            percent: [ String, Number ]
        },
        data(){
            return{
                show: false
            }
        },
        components: {
            'c-tooltip': () => import('~/components/tooltips/universal').then(m => m.default || m),
            'c-progress-bar': () => import('~/components/progress-bar').then(m => m.default || m)
        },
        computed: {
            brightness() {
                let {r, g, b} = this.color

                return 0.299 * r + 0.587 * g + 0.114 * b
            },
            style() {
                if (this.color) {
                    let {r, g, b} = this.color
                    let background = `rgb(${r}, ${g}, ${b})`
                    let shadow = `rgba(${r}, ${g}, ${b}, 0.5)`

                    return {
                        'background-color': background,
                        //'box-shadow': `0px 6px 20px ${shadow}`,
                        'color': this.textColor ? this.textColor : (this.brightness > 180 ? '#777' : 'rgba(255, 255, 255, 0.4)'),
                    }
                }
                return null
            }
        },
        methods: {
            remove() {
                this.$emit('remove', {
                    index: this.index
                })
            },
            click() {
                if (this.eventKey) {
                    this.$store.commit(this.eventKey, this.eventValue)
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes shake {
        from {
            transform: rotate(-4deg);
        }
        to {
            transform: rotate(4deg);
        }
    }

    .shortcut-icon {
        position: relative;
        background-color: transparent;
        margin: 0;
        height: 50px;
        width: 50px;
        border-radius: 3px;
        /*box-shadow: 0 0px 3px rgba(255, 255, 255, 0.4);*/
        color: #777;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        text-align: center;
        transition: all 0.1s;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.2);

        a {
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            display: block;
            color: inherit;

            i {
                font-size: 18px;
            }
        }
        img {
            object-fit: contain;
            border-radius: 10px;
        }
        &:hover {
            border: 1px dashed #436CC9;
            background: rgba(67, 108, 201, .1);
            box-shadow: 0 4px 10px 0 rgba(67, 108, 201, .1);

            i {
                color: #436CC9;
            }
        }
        &.icon-active{
            border: 1px solid #436CC9;
            background: rgba(67, 108, 201, .1);
            box-shadow: 0 4px 10px 0 rgba(67, 108, 201, .1);
        }
    }

    .shortcut-icon .icon-delete-btn {
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 7px;
        right: 5px;
        top: 4px;
    }

    .c-grid-item-dragging .shortcut-icon {
        animation-name: shake;
        animation-duration: 0.07s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    .shortcut-icon__title{
        background: rgba(0, 0, 0, .8);
        padding: 0px 10px;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
        position: absolute;
        left: calc( 100% + 10px );
        top: calc( 50% - 16px );
        display: block;
        white-space: nowrap;
        line-height: 32px;
        &:before{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 10px 8px 0;
            border-color: transparent rgba(0, 0, 0, .8) transparent transparent;
            position: absolute;
            top: 8px;
            left: -10px;
            content: "";
        }
    }
    .shortcut-icon__new{
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #999;
        position: absolute;
        bottom: 4px;
        right: 4px;
    }
</style>
