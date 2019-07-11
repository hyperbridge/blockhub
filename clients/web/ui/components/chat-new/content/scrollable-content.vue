<template>
    <div class="scrollable-content">
        <div
            ref="scrollList"
            class="scrollable-content__wrapper--scroll">
            <slot />
        </div>
        <transition name="fade">
            <div
                v-if="scrollBottom"
                class="scrollable-content__scroll-btn"
                @click="_scrollDown">
                <i class="fas fa-angle-down" /> Most Recent Messages
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollBottom: false
        }
    },
    mounted() {
        if (process.client) {
            this._scrollDown()
            $(this.$refs.scrollList).scroll(() => {
                this.checkScrollButton()
            })
        }
    },
    updated() {
        this.$nextTick(() => {
            this._scrollDown()
        })
    },
    methods: {
        _scrollDown() {
            this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
        },
        checkScrollButton() {
            if (this.$refs.scrollList.scrollHeight - this.$refs.scrollList.clientHeight > this.$refs.scrollList.scrollTop) {
                this.scrollBottom = true
            } else {
                this.scrollBottom = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .scrollable-content{
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .scrollable-content__scroll-btn{
        position: absolute;
        bottom: 0px;
        right: 20px;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        padding: 1px 5px;
        border-radius: 3px;
        background: #00aeff;
        display: flex;
        align-items: center;
        opacity: .9;
        i{
            margin-right: 5px;
            font-size: 16px;
        }
        &:hover{
            opacity: 1;
            cursor: pointer;
        }
    }

    .scrollable-content__wrapper--scroll{
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: left;
        width: 100%;
        padding-right: 10px;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar:vertical {
        width: 13px;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar:horizontal {
        height: 13px;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-corner {
        background: #171717;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-track {
        border-radius: 2px;
        -webkit-border-image: none;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-track:vertical {
        margin: 1px 0px;
        background: rgba(0, 0, 0, .2);
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-track:horizontal {
        margin: 0px 1px;
        background: #171717 -webkit-gradient(linear, left center, 89 center, from(rgb(75, 75, 75)), to(rgb(23, 23, 23)));
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-thumb {
        background: #1c2033;
        border-radius: 2px;
        background-image: url('./../../../assets/');
        background-repeat: no-repeat;
        background-position: center center;
        border: none;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-thumb:hover {
        background-color: #00aeff;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button {
        background-color: #00aeff;
        border-radius: 2px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button:hover {
        background-color: #00aeff;
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button:vertical:decrement {
        background-image: url('./../../../assets/img/scroll-icon-2.png');
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button:vertical:increment {
        background-image: url('./../../../assets/img/scroll-icon-3.png');
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button:horizontal:decrement {
        background-image: url('./../../../assets/img/scroll-icon-4.png');
    }
    .scrollable-content__wrapper--scroll::-webkit-scrollbar-button:horizontal:increment {
        background-image: url('./../../../assets/img/scroll-icon-5.png');
    }
</style>
