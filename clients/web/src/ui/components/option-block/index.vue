<template>
    <div class="option-block">
        <div class="option-block__head">

        </div>
        <div class="option-block__body">
            <div class="option-block__action-list">
                <c-button status="second-info" class="my-2">
                    Buy now
                </c-button>
                <c-button status="opacity-info" class="my-2" size="xl">
                    Gift
                </c-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .option-block{
        display: flex;
        flex-direction: column;
    }
    .option-block__head{
        padding: 15px;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#272e3a+0,252c39+100 */
        background: rgb(39,46,58); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(39,46,58,1) 0%, rgba(37,44,57,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#272e3a', endColorstr='#252c39',GradientType=0 ); /* IE6-9 */
        border-top: 1px solid rgba(255, 255, 255, .3);
        border-bottom: 1px solid rgba(0, 0, 0, .7);
    }
    .option-block__body{
        background: #202837;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
    .option-block__action-list{
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
</style>
