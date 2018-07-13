<template>

    <div class="card invert traded-assets" v-if="items">
        <div class="card-body">
            <h2 class="title">Frequently Traded Assets</h2>
            <div class="traded-assets__filter">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                        id="mostMenuLink" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Most valuable
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                        id="rarityMenuLink" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Rarity
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <ul class="traded-assets__list">
                <li class="traded-assets__item" v-for="(item, index) in items" :key="index">
                    <a :href="`/#/asset/${item.id}`">
                        <img :src="item.image_data" />
                    </a>
                </li>
            </ul>
            <a :href="assets_url" class="btn btn-outline-white">Go To Assets</a>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['items', 'assets_url']
    }
</script>

<style lang="scss" scoped>

    .traded-assets {
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }

    .traded-assets__filter {
        .dropdown {
            display: inline-block;
            float: left;
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
            a.dropdown-toggle {
                padding: 0;
                background: transparent;
                border: none;
                font-size: 11px;
                text-transform: uppercase;
                &:active,
                &:focus {
                    box-shadow: none;
                    border: none;
                    background: transparent;
                }
                &:after {
                    margin-left: 18px;
                }
            }
            .dropdown-menu {
                .dropdown-item {
                    padding-left: 15px;
                    &:after {
                        display: none;
                    }
                }
            }
        }
    }

    .traded-assets__list {
        padding: 0;
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 10px -10px;
    }

    .traded-assets__item {
        list-style: none;
        display: inline-block;
        float: left;
        width: 25%;
        padding: 10px;
        img {
            /*height: 60px;*/
            width: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
    
</style>