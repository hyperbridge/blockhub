<template>
    <div class="chat">
        <div class="chat-shortcuts">
            <c-shortcut-sidebar :items="shortcuts" />
        </div>
        <div
            v-if="$slots.sidebar"
            class="chat__sidebar">
            <slot name="sidebar" />
        </div>
        <div class="chat-main">
            <div class="chat-main__header">
                <div>
                    <div class="chat-title">
                        General
                    </div>
                    <div class="chat-status">
                        Ut elementum sit amet tellus non pulvinar. Integer mi quam, mattis at ultrices quis, aliquet ut risus.
                    </div>
                </div>
                <div />
            </div>
            <div class="chat-main__content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-shortcut-sidebar': () => import('~/components/shortcut-sidebar').then(m => m.default || m)
    },
    props: {
        shortcuts: [Array, Object],
        showShortcuts: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat{
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
        color: #fff;
        position: relative;
    }
    .chat-shortcuts{
        flex: 0 0 60px;
        background: #1C2032;
        padding: 0 10px 10px;
        display: flex;
        flex-direction: column;
    }
    .chat__sidebar{
        background: #272745;
        flex: 0 0 200px;
        padding: 15px;
        color: #fff;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
    .chat-main{
        padding: 15px;
        background: #3D3E5D;
        width: 100%;
        position: relative;
    }
    .chat-main__content{
        height: calc( 100% - 52px );
    }
    .chat-main__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .chat-title{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 1px;
        }
        .chat-status{
            font-size: 13px;
            opacity: .8;
        }
    }
</style>
