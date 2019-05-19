<template>
    <div class="chat-friends-list">
        <div class="chat-friends-list__head">
            <div class="user-avatar">
                <img src="http://sharethingz.com/wp-content/uploads/2014/08/avatar.png" />
                <span class="user-status status-online"></span>
            </div>
            <div class="user-info">
                <strong>
                    Gregory Smith
                </strong>
            </div>
            <div class="user-action">
                <i class="fas fa-cog"></i>
            </div>
        </div>
        <div class="chat-friends-list__body">
            <div class="chat-friends-list__action">
                <c-button status="opacity-info" size="xs">
                    <i class="fas fa-plus"></i> Add friends
                </c-button>
                <c-search v-model="query" placeholder="Search" class="px-0" />
            </div>
            <div class="chat-friends-list__list">
                <c-chat-friends-list :list="users" title="Favorites" />
                <c-chat-friends-list :list="users" title="All" />
            </div>
            <c-chat-suggestion-list :list="users" />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            'c-search': () => import('~/components/inputs/searcher').then(m => m.default || m),
            'c-chat-user': () => import('~/components/chat-new/user').then(m => m.default || m),
            'c-chat-friends-list': () => import('~/components/chat-new/friends-list/list').then(m => m.default || m),
            'c-chat-suggestion-list': () => import('~/components/chat-new/friends-list/suggestion-list').then(m => m.default || m),
        },
        data(){
            return{
                query: '',
                users:[
                    {
                        id: 1,
                        avatar: 'http://sharethingz.com/wp-content/uploads/2014/08/avatar.png',
                        name: 'Gregory Smith',
                        game: 'Dota II',
                        status: 'offline',
                        admin: false
                    },
                    {
                        id: 2,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0I_Z85x-UDnEncEgx0myKWxgAirSMenb4VN2TepCnropn4Hl',
                        name: 'Louis Burns',
                        game: 'WarCraft',
                        status: 'busy',
                        admin: false
                    },
                    {
                        id: 3,
                        avatar: 'http://geedmo.com/codecanyon/bskins/plan/assets/img/avatar.png',
                        name: 'Thomas Harris',
                        game: 'Heroes',
                        status: 'online',
                        admin: true
                    },
                    {
                        id: 4,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr',
                        name: 'Terri Kopp',
                        game: 'Dota II',
                        status: 'online',
                        admin: false
                    },
                    {
                        id: 5,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPk-mHx8SMUl0FBrnGMm49fksyHtj9yPPodc6JbrdubpbSqKxU',
                        name: 'Mildred Floyd',
                        game: 'CS GO',
                        status: 'online',
                        admin: false
                    },
                    {
                        id: 1,
                        avatar: 'http://sharethingz.com/wp-content/uploads/2014/08/avatar.png',
                        name: 'Gregory Smith',
                        game: 'Dota II',
                        status: 'offline',
                        admin: false
                    },
                    {
                        id: 2,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0I_Z85x-UDnEncEgx0myKWxgAirSMenb4VN2TepCnropn4Hl',
                        name: 'Louis Burns',
                        game: 'WarCraft',
                        status: 'busy',
                        admin: false
                    },
                    {
                        id: 3,
                        avatar: 'http://geedmo.com/codecanyon/bskins/plan/assets/img/avatar.png',
                        name: 'Thomas Harris',
                        game: 'Heroes',
                        status: 'online',
                        admin: true
                    },
                    {
                        id: 4,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr',
                        name: 'Terri Kopp',
                        game: 'Dota II',
                        status: 'online',
                        admin: false
                    },
                    {
                        id: 5,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPk-mHx8SMUl0FBrnGMm49fksyHtj9yPPodc6JbrdubpbSqKxU',
                        name: 'Mildred Floyd',
                        game: 'CS GO',
                        status: 'online',
                        admin: false
                    }
                ],
            }
        },
        methods:{
            toggleList(list){
                switch (list) {
                    case 'favorites':
                        this.favorites = true;
                    case 'all':
                        this.all = true;

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-friends-list{
        width: 100%;
        max-width: 350px;
        background: #353554;
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    }
    .chat-friends-list__head{
        display: flex;
        width: 100%;
        align-items: center;
        color: #fff;
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
    }
    .chat-friends-list__action{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        flex-basis: 48px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .user-avatar{
        width: 40px;
        position: relative;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .user-status{
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        right: -2px;
        bottom: -2px;
        border: 3px solid #3d3d5e;
        &.status-online{
            background: #43C981;
        }
        &.status-offline{
            background: #999;
        }
        &.status-busy{
            background: #F75D5D;
        }
    }
    .user-info{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        line-height: 16px;
        strong{
            line-height: 18px;
        }
    }
    .user-action{
        margin-left: auto;
        font-size: 18px;
        i{
            color: #4c7be5;
            cursor: pointer;
            text-align: center;
        }
    }

    .chat-friends-list__list{
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 400px;
    }
    .chat-friends-list__body{
        display: flex;
        flex-direction: column;
        height: 480px;
        background: #2a2944;
    }
</style>
