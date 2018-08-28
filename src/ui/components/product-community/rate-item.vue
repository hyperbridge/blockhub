<template>
    <div class="rate-item">
        <i
            class="fas fa-sort-up"
            :class="{ 'animate-rate': animateUp }"
            @animationend="animateUp = false"
            @click="changeRate('Up')"
        ></i>
        <span
            class="number"
            :class="[ rate > 400 ? 'up' : rate < 0 ? 'down' : '' ]"
        >{{ rate }}</span>
        <i
            class="fas fa-sort-down"
            :class="{ 'animate-rate': animateDown }"
            @animationend="animateDown = false"
            @click="changeRate('Down')"
        ></i>
    </div>
</template>

<script>
export default {
    name: 'rate-item',
    props: {
        rate: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            animateUp: false,
            animateDown: false
        }
    },
    methods: {
        changeRate(rate) {
            this['animate' + rate] = true;
            this.$emit('changeRate', rate);
        }
    }
}
</script>

<style lang="scss" scoped>
.rate-item {
    width: 44px;
    text-align: center;
    padding: 13px 0 15px;
    position: relative;
    margin-right: 10px;
    span {
        display: block;
        position: relative;
        z-index: 4;
        text-align: center;
    }
    i {
        font-size: 26px;
        width: 40px;
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

.animate-rate {
    animation: scale-fade .6s ease;
}

@keyframes scale-fade {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    80% {
        transform: scale(2);
        opacity: 0;
    }
    81% {
        transform: scale(1) translateX(20px);
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>

