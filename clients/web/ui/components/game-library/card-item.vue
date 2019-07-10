<template>
    <div
        class="game-library__item"
        :class="{'is-active': active}"
        :style="{'background-image' : 'url(' + image + ')' }"
        @mouseover="hovered=true"
        @mouseleave="hovered=false">
        <c-loading-bar-circle v-if="isLoading" />
        <div
            class="game-library__item-info"
            @mouseleave="showButtons = false">
            <div class="item-name">
                {{ name }}
            </div>
            <div
                class="item-action"
                :class="{'active' : hovered }">
                <div class="item-action__icons px-2">
                    <c-button status="plain">
                        <i class="fas fa-cog" />
                    </c-button>
                    <c-button status="plain">
                        <i class="fas fa-camera" />
                    </c-button>
                    <c-button status="plain">
                        <i class="fas fa-star" />
                    </c-button>
                    <c-button status="plain">
                        <i class="fas fa-play" />
                    </c-button>
                </div>

                <c-button status="plain">
                    <i
                        class="fas"
                        :class="showButtons ? 'fa-chevron-up' : 'fa-chevron-down' "
                        @click=" showButtons = !showButtons " />
                </c-button>
                <div
                    hidden
                    style="height: 20px; width: 20px;margin-right: -5px">
                    <c-dropdown
                        :class="{'no-right-border' : shareList}"
                        @click="activeMenu()">
                        <ul class="item-dropdown">
                            <li>
                                <a href="#">
                                    <i class="fas fa-list-alt" />
                                    Add to Collection
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-shopping-basket" />
                                    Market page
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-th" />
                                    Inventory
                                </a>
                            </li>
                            <hr>
                            <li @click="toggleList">
                                <i class="fas fa-share" />
                                Share
                                <c-share-list
                                    class="in-dropdown"
                                    :onlineList="online"
                                    :favoritesList="favorites"
                                    :show="shareList" />
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-link" />
                                    Copy Link
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-facebook" />
                                    Share on Facebook
                                </a>
                            </li>
                        </ul>
                    </c-dropdown>
                </div>
            </div>

            <div
                class="item-action__buttons w-100"
                :class="{'active' : showButtons }">
                <div @click="$emit('continue')">
                    Continue
                    <i class="fas fa-chevron-right" />
                </div>
                <div @click="$emit('load')">
                    Load
                    <i class="fas fa-reply" />
                </div>
                <div @click="$emit('options')">
                    Options
                    <i class="fas fa-cog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameLibraryItem',
    components: {
        'c-dropdown': () => import('~/components/dropdown-menu/type-4').then(m => m.default || m),
        'c-share-list': () => import('~/components/share/type-1').then(m => m.default || m),
        'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m)
    },
    props: ['name', 'image', 'isLoading', 'online', 'favorites'],
    data() {
        return {
            shareList: false,
            active: false,
            hovered: false,
            showButtons: false
        }
    },
    watch: {
        active() {
            if (!this.active) { this.shareList = false }
        }
    },
    methods: {
        toggleList() {
            this.shareList = !this.shareList
        }
    }
}
</script>

<style lang="scss" scoped>
    .no-right-border{
        .dropdown-menu{
            border-radius: 5px 0 0 5px!important;
        }
    }
    .game-library__item {
        width: 100%;
        height: 30rem;
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        transition: transform .3s ease;
        z-index: 15;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        &:hover{
            cursor: pointer;
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.01);
            box-shadow: 0 0 15px #0e86ca;
            transition: transform 200ms ease;
            z-index: 20;
            /*border: 2px solid #0e86ca;*/
        }
        &.is-active{
            z-index: 21;
        }
    }
    .item-action__buttons{
        display: flex;
        flex-direction: column;
        background: #262b44;
        width: 100%;
        transition: height .3s ease;
        height: 0;
        &.active{
            height: 140px;
            padding: 10px;
        }
        div{
            padding: 7px;
            border: 1px solid rgba(255, 255, 255, .05);
            margin-bottom: 10px;
            border-radius: 3px;
            color: #d7daec;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all .3s ease;
            i{
                font-size: 16px;
                width: 20px;
                text-align: center;
            }
            &:hover{
                background: rgba(255, 255, 255, .1);
            }
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
    .game-library__item-info{
        position: relative;
        z-index: 10;
        .item-name {
            padding: 7px 10px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background: rgba(0, 0, 0, .4);
        }
        .item-action {
            margin-top: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: #1C2032;
            height: 0;
            overflow: hidden;
            transition: all .3s ease;
            &.active{
                height: 35px;
            }
        }
    }
    .item-dropdown {
        padding: 0 4px;
        margin: 0;
        hr {
            margin: 5px 0;
            border-color: rgba(0, 0, 0, .2);
        }
        li {
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 15px;
            color: #2e3546;
            padding: 4px 0;
            a {
                cursor: pointer;
                color: #000;
                &:hover{
                    text-decoration: none;
                }
            }
            i {
                margin-right: 10px;
                color: #4f5079;
            }
        }
    }
    .share-block.in-dropdown{
        top: -11px;
        left: calc(100% + 10px );
        bottom: -11px;
        height: auto;
        transform: translateY(0);
        border-radius: 0 5px 5px 0;
        &:before{
            top: calc( 50% + 12px);
        }
    }
</style>
