<template>
    <div class="friends-list">
        <div class="friends-list__btn"
             :class="{ 'active' : open }"
             @click="toggleList">
            <i class="fas mr-2"
               :class="[ open ? 'fa-angle-down' : 'fa-angle-right' ]" />
            {{ title }}
            <span class="ml-2">
                0/{{ list.length }}
            </span>
        </div>
        <div v-if="open"
             class="friends-list__list">
            <c-chat-user v-for="item in list"
                         :key="item.name"
                         :avatar="item.avatar"
                         :name="item.name"
                         :game="item.game"
                         :status="item.status" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-chat-user': () => import('~/components/chat-new/user').then(m => m.default || m)
    },
    props: {
        title: String,
        list: [Array, Object]
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleList() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
    .friends-list{
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        min-height: 33px;
        max-height: 100%;
        flex-grow: 0;
    }
    .friends-list__btn{
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 14px;
        padding: 3px 5px;
        border: 1px solid transparent;
        flex-basis: 28px;
        flex-grow: 0;
        flex-shrink: 0;
        &:hover,
        &.active{
            border-color: rgba(255, 255, 255, .1);
            background: rgba(255, 255, 255, .05);
            cursor: pointer;
        }
    }
    .friends-list__list{
        height: calc( 100% - 30px );
        overflow-y: auto;
        overflow-x: hidden;
        color: #fff;
        padding: 10px;
    }
</style>
