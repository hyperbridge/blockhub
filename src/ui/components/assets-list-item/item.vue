<template>
    <a class="assets-list__item"
       :class="{ 'transparent-bg' : isTransparent }"
       :href="`/#/asset/${item.id}`"
    >
        <div class="thumb">
            <img
                :src="item.img"/>
        </div>
        <div class="info">
            <h5>{{ item.title }}</h5>
            <slot>
                <span class="float-left price">
                    <i class="fas fa-dollar-sign"></i>
                    {{ item.price }}
                </span>
                <span class="float-right box">
                    <i class="fas fa-box"></i>
                    {{ item.count }}
                </span>
            </slot>
        </div>
    </a>
</template>

<script>
    export default {
        props: {
            item: Object,
            isTransparent: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .assets-list__item {
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(0, 0, 0, .33);
        padding: 10px;
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        text-decoration: none;
        transition: transform .3s ease;
        &:hover{
            cursor: pointer;
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
        .thumb {
            display: inline-block;
            float: left;
            img {
                height: auto;
                width: 60px;
            }
        }
        .info {
            display: inline-block;
            width: calc(100% - 80px);
            float: right;
            h5 {
                color: #fff;
            }
            span {
                i {
                    margin-right: 5px;
                }
            }
        }
        &.transparent-bg {
            background: transparent;
            border: unset;
            box-shadow: unset;
            .thumb {
                padding: 5px;
                background: rgba(255, 255, 255, .1);
                border-radius: 5px;
            }
        }
    }
</style>
