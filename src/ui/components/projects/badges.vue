<template>
    <div class="badges-list">
        <div class="item" v-for="(icon, index) in icons" :key="index">
            <i :class="[ 'fas fa-' + icon ]"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'project-badges',
        props: ['icons']
    }
</script>

<style lang="scss" scoped>
    .badges-list {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 8px;
        .item {
            margin: 7px;
            border-radius: 5px;
            background: #FADC72;
            width: 36px;
            position: relative;
            font-size: 24px;
            text-align: center;
            line-height: 36px;
            color: #134269;
            &:before {
                content: "";
                padding-top: 100%;
                float: left;
            }
        }

    }
</style>
