<template>
    <div class="activity-block">
        <div class="activity-block__head">

        </div>
        <div class="activity-block__body">

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .activity-block{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .activity-block__head{
        padding: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        background: linear-gradient(-45deg, rgba(201,222,150,1) 0%,rgba(138,182,107,1) 44%,rgba(57,130,53,1) 100%);
    }
    .activity-block__body{
        padding: 10px;
        background: linear-gradient(45deg, rgba(61,62,93,1) 0%,rgba(73,72,109,1) 44%,rgba(76,75,114,1) 100%);
    }
</style>
