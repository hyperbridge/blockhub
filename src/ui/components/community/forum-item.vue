<template>
    <div class="forum-item">
        <div class="forum-item__header">
            <div class="icon">
                <i :class="icon"></i>
            </div>
            <div class="text">
                <router-link :to="{ name: 'Community forum', params: {id: forum.id } }">
                    {{ forum.title }}
                </router-link>
            </div>
            <div class="last-post">
                {{ forum.last_post_time }}
            </div>
            <div class="discussions-count">
                {{ forum.discussions_count }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['forum'],
        computed:{
            icon(){
                if (this.forum.icon)
                    return this.forum.icon
                else
                    return 'fas fa-comments'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .forum-item {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
        border-radius: 5px;
        color: #fff;
    }
    .forum-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
            color: #3D3E5D;
        }
        .text {
            width: calc(60% - 70px);
            font-weight: bold;
            font-size: 16px;
            a{
                color: #fff;
            }
        }
        .discussions-count,
        .last-post{
            width: 20%;
            text-align: right;
            i {
                margin-right: 5px;
            }
        }
    }
</style>
