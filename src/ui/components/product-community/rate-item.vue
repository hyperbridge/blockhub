<template>
    <div class="rate-item">
        <i class="fas fa-sort-up"></i>
        <span
            class="number"
            :class="[ rate > 400 ? 'up' : rate < 0 ? 'down' : '' ]"
        >{{ rate }}</span>
        <i class="fas fa-sort-down"></i>
    </div>
</template>

<script>
export default {
    props: ['rate']
}
</script>

<style lang="scss" scoped>
.rate-item {
    width: 50px;
    text-align: center;
    padding: 13px 0 15px;
    position: relative;
    margin-right: 10px;
    span {
        display: block;
        position: relative;
        z-index: 4;
    }
    i {
        font-size: 26px;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 3;
        cursor: pointer;
        color: #C6C6D6;
        &.fa-sort-up {
            top: 0;
            &:hover {
                color: #43C981;
            }
        }
        &.fa-sort-down {
            bottom: 0;
            &:hover {
                color: #F75D5D;
            }
        }
    }
}

.up {
    color: #43C981;
}
.down {
    color: #F75D5D;
}
</style>

