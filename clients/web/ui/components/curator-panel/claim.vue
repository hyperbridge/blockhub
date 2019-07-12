<template>
    <div class="sidebar-card">
        <h4 :class="[ type + '-ttl']">
            <i :class="type | icon" />
            {{ title }}
        </h4>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Claim',
    filters: {
        icon(type) {
            switch (type) {
            case 'success':
                return 'fas fa-check'
            case 'warning':
                return 'fas fa-exclamation-triangle'
            case 'danger':
                return 'fas fa-times'
            case 'info':
                return 'fas fa-info-circle'
            default:
                return 'fas fa-check'
            }
        }
    },
    props: {
        title: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'info'
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar-card{
        display: inline-block;
        width: 100%;
        float: left;
        overflow: hidden;
        color: #fff;
        h4{
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 5px;
            i{
                margin-right: 5px;
            }
            $titleColors: (
                success: #43C981,
                warning: #FADC72,
                danger: #F75D5D,
                info: #4bbccf
            );
            @each $status, $color in $titleColors {
                &.#{$status}-ttl {
                    color: $color;
                }
            }
        }
        p{
            line-height: 18px;
        }
        .btn-sm{
            padding: 2px 5px;
            line-height: 16px;
            font-size: 12px;
        }
        .btn-warning{
            background: #FADC72;
            color: #30304B;
            font-weight: bold;
            font-size: 13px;
            &:hover{
                background: #d2b95f;
                color: #30304B;
            }
        }
    }
</style>
