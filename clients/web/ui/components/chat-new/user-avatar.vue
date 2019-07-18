<template>
    <div
        class="user-avatar"
        @mouseover="show = true"
        @mouseleave="show = false">
        <div
            v-if="show"
            class="user-avatar__popover">
            <div>
                <strong class="mr-3">
                    {{ name }}
                </strong>
                #{{ number }}
            </div>
            <div style="font-size: 12px;opacity: .7;line-height: 16px">
                10 days offline
            </div>
        </div>
        <img :src="avatarSrc">
        <span
            v-if="status"
            class="user-status"
            :class="['status-' + status]" />
    </div>
</template>

<script>
export default {
    props: {
        avatar: String,
        name: String,
        number: String,
        status: String
    },
    data() {
        return {
            show: false
        }
    },

    computed: {
        avatarSrc() {
            return this.avatar ? this.avatar : 'https://i.pravatar.cc/40?img=50'
        }
    }
}
</script>

<style lang="scss">
    .user-avatar{
        width: 40px;
        position: relative;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .user-avatar__popover{
        position: absolute;
        left: 50px;
        top: 0;
        width: 220px;
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, .1);
        background: #3d3d5e;
        white-space: nowrap;
        z-index: 20;
    }
    .user-status{
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        right: -2px;
        bottom: -2px;
        border: 3px solid #3d3d5e;
        &.status-online{
            background: #43C981;
        }
        &.status-offline{
            background: #999;
        }
        &.status-busy{
            background: #F75D5D;
        }
    }
</style>
