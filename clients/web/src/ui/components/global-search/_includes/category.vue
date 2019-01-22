<template>
    <div class="search-category">
        <div class="search-category__head">
            <div>
                Categories
            </div>
            <div class="count">
                91
            </div>
            <c-button status="plain" size="sm" class="p-0 ml-auto">
                MORE
            </c-button>
        </div>
        <div class="search-category__body">
            <div class="search-item">
                <div class="search-item__img" style="background-image: ">
                    <img src="http://gaming-headsets.co.uk/wp-content/uploads/Call-of-Duty-Black-Ops-3-game-cover-215x300.jpg">
                </div>
                <div class="search-item__info">
                    <span>Game name</span>
                    <span>Game short description</span>
                    <span>Game category</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .search-category{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .search-category__head{
        display: flex;
        background: rgba(255, 255, 255, .1);
        padding: 1px 10px;
        align-items: center;
        text-transform: uppercase;
        .count{
            padding: 0 5px;
            font-size: 12px;
            background: #0194ef;
            height: 18px;
            line-height: 18px;
            border-radius: 3px;
            margin-left: 10px;
        }
    }
    .search-category__body{
        display: flex;
        flex-direction: column;
    }
    .search-item{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 10px;
    }
    .search-item__img{
        width: 50px;
        height: 100%;
        margin-right: 10px;
        img{
            width: 100%;
        }
    }
    .search-item__info{
        display: flex;
        flex-direction: column;
    }
</style>
