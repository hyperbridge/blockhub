<template>
    <div class="browser-ui">
        <div class="browser-ui__nav mr-3">
            <c-button status="plain" class="p-0">
                <i class="fas fa-arrow-left"></i>
            </c-button>
            <c-button status="plain" class="p-0">
                <i class="fas fa-arrow-right"></i>
            </c-button>
        </div>
        <div class="browser-ui__search-bar">
            <c-button status="plain" class="p-0 mr-3">
                <i class="fas fa-arrow-right"></i>
            </c-button>
            <c-input v-model="searchQuery" />
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                searchQuery: 'some text'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .browser-ui{
        display: flex;
        width: 100%;
        padding: 5px;
        align-items: center;
        flex-wrap: nowrap;
    }
    .browser-ui__search-bar{
        display: flex;
        border-radius: 25px;
        background: rgba(0, 0, 0, .2);
        padding: 3px 8px;
        width: 100%;
        input{
            background: transparent;
            border: unset;
            padding: 0;
        }
    }
</style>
