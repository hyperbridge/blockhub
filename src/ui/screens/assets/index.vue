<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Get Started" :showArrows="false" :showBackground="false">
                            </c-heading-bar>
                            <div class="d-flex justify-content-start flex-wrap">
                                <div class="assets-list__item-container">
                                    <c-assets-list-item></c-assets-list-item>
                                </div>
                                <div class="assets-list__item-container">
                                    <c-assets-list-item></c-assets-list-item>
                                </div>
                                <div class="assets-list__item-container">
                                    <c-assets-list-item></c-assets-list-item>
                                </div>
                                <div class="assets-list__item-container">
                                    <c-assets-list-item></c-assets-list-item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Yours" :showArrows="false" :showBackground="false">
                                <div class="filter_blk">

                                </div>
                            </c-heading-bar>
                            <c-assets-grid></c-assets-grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-assets-grid': () => import('@/ui/components/assets-grid'),
            'c-assets-list-item': () => import('@/ui/components/assets-list-item'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        padding: 15px;
        margin: 15px 0;
        position: relative;
        overflow: hidden;
    }
    .assets-list__item-container{
        width: calc( 100%/3 );
        padding: 5px;
        @media only screen and (min-width: 1400px){
            width: 25%;
        }
    }
</style>
