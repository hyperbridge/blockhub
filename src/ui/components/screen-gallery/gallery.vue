<template>
    <div class="screen-gallery">
        <div class="screen-gallery__main-img">
            <img
                :src="images[active_item]"
            />
        </div>
        <ul class="screen-gallery__thumb-nav">
            <li
                v-for="(url, index) in images"
                :key="index"
            >
                <img
                    :src="url"
                    :class="{ 'inactive-item': index !== active_item }"
                    @click="active_item = index"
                />
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'screen-gallery',
    props: {
        main: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            active_item: 0
        }
    },
    computed: {
        images() {
            return [this.main, ...this.items];
        }
    }
}
</script>


<style lang="scss" scoped>

    .screen-gallery{
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        margin-bottom: 10px;
        padding: 10px;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .screen-gallery__main-img{
        flex: 6;
        img {
            height: 245px;
        }
    }
    .screen-gallery__thumb-nav{
        flex: 2;
        max-height: 245px;
        padding: 0 10px;
        margin: 0;
        overflow-y: auto;
        li {
            width: 100%;
            list-style-type: none;
            background: rgba(0, 0, 0, 0.3);
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            img {
                height: 75px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .inactive-item:not(:hover) {
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        filter: grayscale(50%);
        opacity: .5;
    }

</style>
