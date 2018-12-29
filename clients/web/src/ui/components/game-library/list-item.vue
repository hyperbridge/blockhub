<template>
    <div class="game-library__item loading--w-spinner" :class="{'is-active': active}">
        <div class="item-img">
            <c-img :src="game.images.mediumTile"/>
        </div>
        <div class="item-info">
            <div>
                {{ game.name }}
            </div>
            <div>
                <i class="fas fa-clock mr-2"></i>
                345 Hours Played
            </div>
            <div>
                <i class="fas fa-trophy mr-2"></i>
                15 Achievements
            </div>
        </div>
        <div class="item-action">
            <span class="has-new">
                <i class="fas fa-cog"></i>
            </span>
            <span>
                <i class="fas fa-camera"></i>
            </span>
            <span>
                <i class="fas fa-star"></i>
            </span>
            <span>
                <i class="fas fa-play"></i>
            </span>
        </div>
        <div class="dropdown-container">
            <c-dropdown :class="{'no-right-border' : shareList}" @click="activeMenu">
                <ul class="item-dropdown">
                    <li>
                        <a href="#">
                            <i class="fas fa-list-alt"></i>
                            Add to Collection
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-shopping-basket"></i>
                            Market page
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-th"></i>
                            Inventory
                        </a>
                    </li>
                    <hr>
                    <li @click="toggleList">
                        <i class="fas fa-share"></i>
                        Share
                        <c-share-list class="in-dropdown" :onlineList="online" :favoritesList="favorites" :show="shareList" />
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-link"></i>
                            Copy Link
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-facebook"></i>
                            Share on Facebook
                        </a>
                    </li>
                </ul>
            </c-dropdown>
        </div>
        <div class="loader-block" v-if="isLoading">
            <div class="loading-spinner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-library-item',
        props: ['game', 'isLoading', 'online','favorites'],
        data(){
            return{
                shareList: false,
                active: false
            }
        },
        components: {
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-4'], resolve),
            'c-share-list': (resolve) => require(['@/ui/components/share/type-1'], resolve)
        },
        methods:{
            toggleList(){
                this.shareList = !this.shareList
            },
            activeMenu(){
                console.log(this.active)
                this.active = !this.active
            }
        },
        watch:{
            active(){
                if (!this.active)
                    this.shareList = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .game-library__item {
        width: 100%;
        height: 100%;
        background: #1C2032;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: transform .3s ease;
        z-index: 15;
        padding: 8px 50px 8px 8px;
        @media (max-width: 767px) {
            flex-wrap: wrap;
        }
        &:hover{
            cursor: pointer;
            will-change: transform;
            transform: scale(1.01);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
            z-index: 20;
        }
        &.is-active{
            z-index: 21;
        }
        .item-img{
            width: 30px;
            height: 30px;
            position: relative;
            z-index: 6;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }
        .item-info {
            padding: 5px 10px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: calc(100% - 170px);
            div{
                &:nth-child(1){
                    width: 50%;
                    text-align: left;
                    position: relative;
                    z-index: 7;
                }
                &:nth-child(2),
                &:nth-child(3){
                    width: 25%;
                    text-align: center;
                    font-size: 14px;
                    color: #C6C6D6;
                }
            }
            @media (max-width: 767px) {
                width: calc(100% - 40px);
                flex-wrap: wrap;
                div{
                    text-align: left!important;
                    &:nth-child(1){
                        width: 100%;
                    }
                    &:nth-child(2),
                    &:nth-child(3){
                        font-size: 12px;
                        width: 50%;
                        margin: 5px 0 0;
                    }
                }
            }
        }
        .item-action {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 140px;
            text-align: center;
            @media (max-width: 767px) {
                width: 100%;
                margin-top: 15px;
            }
            span {
                margin: 0 8px;
                color: #C6C6D6;
                font-size: 14px;
                position: relative;
                &.has-new{
                    &:after{
                        content: "";
                        position: absolute;
                        width: 5px;
                        height: 5px;
                        border-radius: 5px;
                        background: #F75D5D;
                    }
                }
                &:hover {
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
    .dropdown-container{
        position: absolute;
        right: 0;
        top: 0px;
        bottom: 0;
        width: 30px;
        background: rgba(0, 0, 0, .1);
        display: flex;
        align-items: center;
        justify-content: center;
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
    .loader-block{
        background: rgba(28, 32, 50, .7);
        color: #1C2032;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: 5;
        .loading-spinner{
            margin: auto;
            position: relative;
            zoom: 2;
            &:before{
                border-color: #fff;
                border-right-color: transparent;
            }
        }
    }
</style>
