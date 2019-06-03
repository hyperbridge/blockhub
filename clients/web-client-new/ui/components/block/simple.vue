<template>
    <div class="simple-block"
         :class="{'block-hovered' : hovered}">
        <div v-if="image"
             class="simple-block__image"
             :style="{'height' : imgHeight }">
            <img :src="image">
        </div>
        <div class="simple-block__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        imgHeight: String,
        hovered: Boolean
    }
}
</script>

<style lang="scss">
    .simple-block{
        border: 1px solid rgba(255, 255, 255, .1);
        background: rgba(255, 255, 255, .05);
        display: flex;
        flex-direction: column;
        color: #fff;
        &.block-hovered{
            &:hover{
                .simple-block__image{
                    img{
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
    .simple-block__image{
        width: 100%;
        height: 300px;
        overflow: hidden;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all 200ms ease-in-out;
        }
    }
    .simple-block__content{
        padding: 15px;
    }
</style>
