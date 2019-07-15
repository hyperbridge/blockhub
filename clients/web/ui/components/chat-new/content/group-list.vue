<template>
    <div>
        <div class="chat__group-head">
            <div class="group-name h5">
                General
                <i class="fas fa-plus" />
            </div>
            <div>
                12 of 450 online
            </div>
            <div class="group-status">
                MOTD: Proin ut purus suscipit, bibendum eros
            </div>
        </div>
        <div class="chat__channel-list">
            <div class="title h6 text-uppercase font-weight-bold d-flex justify-content-between">
                Channel
                <i class="fas fa-plus" />
            </div>
            <ul>
                <li v-for="(channel, indx) in channels" :class="{ active: indx == currentChannelI }" @click="onChannelClick(indx)">
                    {{ channel.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-chat-group-sidebar',
    components: {},

    props: {
        channels: {
            type: Array,
            default: () => []
        }
    },

    data: () => ({
        currentChannelI: 0
    }),

    methods: {
        onChannelClick(channelIndex) {
            this.$emit('onChannelChange', channelIndex)
            this.currentChannelI = channelIndex
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat__group-head{
        color: #fff;
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .group-name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            margin-bottom: 0;
        }
        .group-status{
            margin: 10px 0 0;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .chat__channel-list{
        ul{
            padding: 0;
            margin: 15px 0;
            li{
                list-style: none;
                padding: 2px 10px;
                margin: 2px -15px;
                border-left: 2px solid transparent;
                &.active,
                &:hover{
                    border-color: #5D75F7;
                    cursor: pointer;
                    background: rgba(255, 255, 255, .05);
                }
            }
        }
    }
</style>
