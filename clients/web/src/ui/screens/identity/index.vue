<template>
    <c-layout>
        <div class="identity-page">
            <c-block title="Badges">
                <div class="identity-page__description margin-bottom-30">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet arcu nec tortor consectetur
                        faucibus. Fusce consequat fermentum fermentum. Nulla semper nisi id augue lobortis, a suscipit
                        dui feugiat. Duis feugiat dictum porta. Sed suscipit elementum accumsan. Morbi fringilla sem
                        elit, ac elementum tellus egestas quis.
                    </p>
                </div>
                <div>
                    <ul class="badge-list">
                        <li class="badge-list__item" v-for="i in 6">
                            <div class="badge-list__item-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="badge-list__item-text">
                                <div class="h5">
                                    Duis feugiat dictum porta
                                </div>
                                <p>
                                    Sed suscipit elementum accumsan. Morbi fringilla sem
                                    elit, ac elementum tellus egestas quis.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .badge-list{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin: 0 -10px;
        flex-wrap: wrap;
    }
    .badge-list__item{
        list-style: none;
        width: calc( 50% - 20px);
        margin: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .badge-list__item-icon{
        margin-right: 20px;
        flex-basis: 40px;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .05);
        border: 1px solid rgba(0, 0, 0, .1);
    }
    .badge-list__item-text{
        width: calc( 100% - 60px )
    }
</style>
