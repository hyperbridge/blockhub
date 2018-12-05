<template>
    <div class="friends-list">
        <div class="friends-list__btn" :class="{ 'active' : open }" @click="toggleList">
            <i class="fas mr-2" :class="[ open ? 'fa-angle-down' : 'fa-angle-right' ]"></i>
            {{ title }}
            <span class="ml-2">
                0/{{ list.length }}
            </span>
        </div>
        <div class="friends-list__list" v-if="open">
            <c-chat-user v-for="item in list" :avatar="item.avatar" :name="item.name" :game="item.game" :status="item.status"/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title: String,
            list: [ Array, Object ]
        },
        components: {
            'c-chat-user': (resolve) => require(['@/ui/components/chat-new/user'], resolve),
        },
        data(){
            return{
                open: false
            }
        },
        methods:{
            toggleList(){
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
