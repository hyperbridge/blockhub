<template>
    <div class="game-library__item">
        <c-img :src="game.images.medium_tile"/>
        <div class="item-name">
            {{ game.name }}
        </div>
        <div class="item-action">
            <div>
                <span>
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
            <div style="height: 20px; width: 20px">
                <c-dropdown>
                    <ul class="item-dropdown">
                        <li>
                            <a href="#3">
                                <i class="fas fa-list-alt"></i>
                                Add to Collection
                            </a>
                        </li>
                        <li>
                            <a href="#3">
                                <i class="fas fa-shopping-basket"></i>
                                Market page
                            </a>
                        </li>
                        <li>
                            <a href="#3">
                                <i class="fas fa-th"></i>
                                Inventory
                            </a>
                        </li>
                        <hr>
                        <li>
                            <a href="#3">
                                <i class="fas fa-share"></i>
                                Share
                            </a>
                        </li>
                        <li>
                            <a href="#3">
                                <i class="fas fa-link"></i>
                                Copy Link
                            </a>
                        </li>
                        <li>
                            <a href="#3">
                                <i class="fab fa-facebook"></i>
                                Share on Facebook
                            </a>
                        </li>
                    </ul>
                </c-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-library-item',
        props: ['game'],
        components: {
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-4'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .game-library__item {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: #1C2032;
        position: relative;
        display: flex;
        flex-direction: column;
        img {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            border-radius: 5px 5px 0 0;
        }
        .item-name {
            padding: 5px 10px;
            font-size: 16px;
        }
        .item-action {
            background: rgba(255, 255, 255, .02);
            padding: 5px 0 5px 10px;
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                padding: 0 10px 0 4px;
                color: #C6C6D6;
                font-size: 14px;
                &:hover {
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }

    .item-dropdown {
        padding: 0 4px;
        margin: 0;
        hr {
            margin: 5px 0;
            border-color: rgba(255, 255, 255, .2);
        }
        li {
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 15px;
            color: #fff;
            padding: 4px 0;
            a {
                cursor: pointer;
                color: #fff;
                &:hover{
                    text-decoration: none;
                }
            }
            i {
                margin-right: 10px;
                color: #A2A3BE;
            }
        }
    }
</style>
