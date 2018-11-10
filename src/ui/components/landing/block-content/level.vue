<template>
    <div class="landing-level" :class="['level-size-' + size]">
        <div class="landing-level__text-left" v-if="textPosition == 'left'">
            <slot />
        </div>
        <div class="landing-level__number">
            <span>
                {{ number }}
            </span>
        </div>
        <div class="landing-level__text-right" v-if="textPosition == 'right'">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'level',
        props:{
            textPosition: String,
            number: {
                type: [Number, String],
                default: 0
            },
            size: {
                type: String,
                default: 'sm'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing-level{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        &.level-size-sm{
            font-size: 14px;
            .landing-level__number{
                width: 70px;
                height: 70px;
                font-size: 16px;
            }
        }
        &.level-size-md{
            font-size: 18px;
            .landing-level__number{
                width: 90px;
                height: 90px;
                font-size: 20px;
            }
        }
        &.level-size-lg{
            font-size: 20px;
            .landing-level__number{
                width: 110px;
                height: 110px;
                font-size: 22px;
            }
        }
    }
    .landing-level__number{
        background: url("../../../../../static/img/landing/shield.png") no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #036c35;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, .7);
    }
</style>
