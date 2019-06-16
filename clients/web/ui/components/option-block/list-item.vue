<template>
    <div
        class="option-block__list-item"
        :class="{ 'selected' : selected }"
        @click="$emit('select')">
        <div
            v-if="image"
            class="list-item__image">
            <img :src="image">
        </div>
        <div class="list-item__info w-100">
            <div class="h5 mb-0">
                <slot />
            </div>
            <div class="h4 mb-0">
                {{ price }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        price: [String, Number],
        image: String,
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
    .option-block__list-item{
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        border-left: 4px solid transparent;
        opacity: .7;
        &.selected{
            background: #20394d;
            border-left: 4px solid #00abff;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
            opacity: 1;
        }
        &:hover:not(.selected){
            cursor: pointer;
            background: rgba(255, 255, 255, .05);
            border-bottom: 1px solid rgba(0, 0, 0, .2);
            opacity: 1;
        }
    }
    .list-item__image{
        flex-basis: 130px;
        padding-right: 15px;
        img{
            width: 100%;
            opacity: 1;
        }
    }
</style>
