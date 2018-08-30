<template>
    <component
        :is="tag"
        :type="type"
        class="c-btn"
        :class="status"
        @click="$emit('click')"
    >
        <i
            v-if="(icon || inject_filter.length) && !icon_hide"
            class="icon fas"
            :class="[
                icon ? 'fa-' + icon : inject_filter,
                swap_order ? 'swap_order' : ''
            ]"
        ></i>
        <span>
            <slot/>
        </span>
    </component>
</template>

<script>
    export default {
        name: 'button',
        props: {
            tag: {
                type: String,
                default: 'a',
            },
            type: String,
            icon: String,
            icon_hide: Boolean,
            status: {
                type: String,
                default: 'default'
            },
            swap_order: Boolean
        },
        computed: {
            inject_filter() {
                return this.$options.filters.statusIcon(this.status);
            }
        },
        /* these filters are accessible via Vue instance, and were added only for storybook support */
        filters: {
            statusIcon(status) {
                const getClass = status => {
                    switch(status) {
                        case 'info': return 'info';
                        case 'success': return 'check';
                        case 'success-circle': return 'check-circle';
                        case 'warning': return 'exclamation';
                        case 'danger': return 'exclamation-triangle';
                        case 'danger-circle': return 'times-circle';
                        case 'settings': return 'cog';
                        default: return '';
                    }
                }
                const statusClass = getClass(status);
                return statusClass.length ?  'fa-' + statusClass : '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-btn {
        display: inline-flex;
        align-items: center;
        padding: 0px 8px;
        line-height: 24px;
        font-size: 13px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        text-transform: uppercase;
        cursor: pointer;
        &:active,
        &:focus {
            outline: none;
            box-shadow: none;
        }
        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 3px;
        }
        .swap_order {
            order: 2;
            margin: 0 0 0 3px;
        }

        $statusColors: (
            default: (#fff, #3D3E5D, #3D3E5D, #A2A3BE),
            info: (#5D75F7, #fff, #586ee9, #30304B),
            success: (#5EA72B, #fff, #559727, #30304B),
            danger: (#F75D5D, #fff, #de5454, #30304B),
            warning: (#FADC72, #3D3E5D, #efd26d, #32334c)
        );

        @each $status, $colorSet in $statusColors {
            &.#{$status} {
                background-color: nth($colorSet, 1);
                color: nth($colorSet, 2);
                &:hover {
                    background: nth($colorSet, 3);
                    color: nth($colorSet, 4);
                }
            }
        }
    }
</style>
