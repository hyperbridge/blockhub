<template>
    <transition name="fade">
        <div class="inline-notification" :class="[ 'type-' + type ]" v-if="show">
            <div class="inline-notification__icon">
                <i :class="`fas fa-${notif_icon}`"></i>
            </div>
            <div class="inline-notification__text">
                <slot />
            </div>
            <div class="close" @click="actionOnClose()">
                <i class="fas fa-times"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'inline-notification',
        props:['type'],
        data() {
            return {
                show: true
            }
        },
        methods: {
            actionOnClose() {
                this.show = false;
            }
        },
        computed: {
            notif_icon() {
                switch (this.type) {
                    case 'info':
                        return 'info';
                    case 'success':
                        return 'check-circle';
                    case 'warning':
                        return 'exclamation-triangle';
                    case 'danger':
                        return 'times-circle';
                    default:
                        return 'cog';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .inline-notification{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        color: #3D3E5D;
        position: relative;
        &.type-warning {
            background: #FADC72;
            color: #3D3E5D;
        }
        &.type-danger {
            background: #F75D5D;
        }
        &.type-info {
            background: #5D75F7;
            color: #fff;
        }
        &.type-success {
            background: #43C981;
        }
        &.type-default {
            background: rgba(255, 255, 255, .3)
        }
    }
    .inline-notification__icon{
        width: 40px;
        font-size: 30px;
    }
    .inline-notification__text{
        margin: 0 20px 0 10px;
        width: 100%;
        text-align: left;
    }
</style>
