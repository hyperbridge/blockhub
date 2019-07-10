<template>
    <div class="search-category">
        <div
            class="search-category__head"
            @click="chosenCategory()">
            <div>
                {{ category.name }}
            </div>
            <div class="count">
                {{ category.items.length }}
            </div>
            <c-button
                status="plain"
                size="sm"
                class="p-0 ml-auto">
                MORE
            </c-button>
        </div>
        <div class="search-category__body">
            <div
                v-for="(item, index) in category.items"
                v-if="index < 4"
                class="search-item">
                <div
                    v-if="item.image"
                    class="search-item__img">
                    <img :src="item.image">
                </div>
                <div class="search-item__info">
                    <span
                        v-if="item.name"
                        class="h6 font-weight-bold mb-1 p-0">{{ item.name }}</span>
                    <span
                        v-if="item.description"
                        class="text-muted"
                        style="font-size: 12px">{{ item.description }}</span>
                    <div
                        v-if="item.tags"
                        class="search-item__item-tags">
                        <span v-for="tag in item.tags">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
                v-if="showDetails"
                class="category-full">
                <div
                    class="search-category__head"
                    :class="{'mb-0' : $slots.filters }">
                    <c-button
                        status="plain"
                        size="sm"
                        class="p-0 mr-3"
                        @click="closeCategory">
                        <i class="fas fa-angle-left" />
                    </c-button>
                    <div>
                        {{ category.name }}
                    </div>
                </div>
                <div
                    v-if="$slots.filters"
                    class="search-category__filters">
                    <slot name="filters" />
                </div>
                <div
                    v-for="(item, index) in category.items"
                    class="search-item">
                    <div
                        v-if="item.image"
                        class="search-item__img">
                        <img :src="item.image">
                    </div>
                    <div class="search-item__info">
                        <span
                            v-if="item.name"
                            class="h6 font-weight-bold mb-1 p-0">{{ item.name }}</span>
                        <span
                            v-if="item.description"
                            class="text-muted"
                            style="font-size: 12px">{{ item.description }}</span>
                        <div
                            v-if="item.tags"
                            class="search-item__item-tags">
                            <span v-for="tag in item.tags">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object
        }
    },
    data() {
        return {
            showDetails: false
        }
    },
    methods: {
        chosenCategory() {
            this.showDetails = true
            this.$emit('categorySelect', this.category)
        },
        closeCategory() {
            this.showDetails = false
            this.$emit('categoryClose')
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-category{
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
    }
    .search-category__head{
        display: flex;
        background: rgba(255, 255, 255, .1);
        padding: 1px 10px;
        align-items: center;
        text-transform: uppercase;
        font-size: 13px;
        margin: 0 0 5px 0;
        .count{
            padding: 0 5px;
            font-size: 12px;
            background: #0194ef;
            height: 15px;
            line-height: 16px;
            border-radius: 3px;
            margin-left: 10px;
        }
    }
    .search-category__filters{
        display: flex;
        background: rgba(255, 255, 255, .05);
        padding: 7px;
        align-items: center;
        text-transform: uppercase;
        font-size: 13px;
        margin: 0 0 5px 0;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }
    .search-category__body{
        display: flex;
        flex-direction: column;
        padding-bottom: 5px;
    }
    .search-item{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 5px 10px;
        &:hover{
            background: rgba(0, 0, 0, .1);
            cursor: pointer;
        }
    }
    .search-item__img{
        width: 50px;
        height: 100%;
        margin-right: 10px;
        img{
            width: 100%;
            height: 55px;
            object-fit: cover;
            border-radius: 3px;
        }
    }
    .search-item__info{
        display: flex;
        flex-direction: column;
    }
    .search-item__item-tags{
        display: flex;
        flex-wrap: wrap;
        span{
            background: rgba(255, 255, 255, .1);
            padding: 0px 8px;
            border-radius: 3px;
            color: #fff;
            font-size: 12px;
            margin: 5px 5px 0 0;
            opacity: .7;
        }
    }
    .category-full{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: #1a1d2e;
        display: flex;
        flex-direction: column;
    }
</style>
