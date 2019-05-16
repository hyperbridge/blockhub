<template>
    <c-block title="Community Spotlight" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <template slot="heading-bar">
            <c-button status="none" :to="communityPath" class="title-icon text-white">
                <i class="fas fa-comments" v-if="!activateElement"></i>
                <i class="fas fa-cog" v-else></i>
            </c-button>
        </template>
        <div class="w-100" v-if="discussions.length > 0">
            <div class="editor-container editor-container--style-2" v-if="editing">
                <p class="">
                    Set Up Community
                </p>
            </div>
            <ul class="community-spotlight__list">
                <li v-for="(item, index) in discussions" :key="index">
                    <a :href="item.link">
                        <span class="community-spotlight__name">{{ item.name }}</span>
                        <span class="community-spotlight__count">{{ item.count }}</span>
                    </a>
                </li>
            </ul>
            <c-button status="outline-white" :to="communityPath" hide_icon>
                Go To Community
            </c-button>
        </div>
        <div class="w-100" v-if="discussions.length === 0">
            <h4>No highlighted community activity yet.</h4>
        </div>
    </c-block>
</template>


<script>
export default {
    name: 'community-spotlight',
    props: {
        discussions: Array,
        communityPath: String,
        editing: Boolean,
        activateElement: Boolean
    },
    components:{
        'c-block': (resolve) => require(['@/components/block'], resolve),
    }
}
</script>


<style lang="scss" scoped>
    .editor-container {
        position: relative;
    }

    .editor-container--style-2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 18px;
        font-weight: bold;

        i {
            display: block;
            font-size: 50px;
            margin-bottom: 20px;
        }
    }

    .editor-container--style-2 ~ * {
        opacity: 0.3;
    }

    .community-spotlight__list {
        padding: 0;
        margin: 10px 0;
        display: block;
        width: 100%;
        overflow: hidden;
        li {
            display: block;
            width: 100%;
            overflow: hidden;
            margin: 5px 0;
            padding-right: 20px;
            position: relative;
            &:after {
                position: absolute;
                right: 0px;
                top: 1px;
                bottom: 0;
                width: 20px;
                content: "\f086";
                font-family: 'Font Awesome 5 Free';
                color: #fff;
                text-align: right;
            }
            a {
                color: #fff;
            }
        }
    }

    .community-spotlight__name {
        float: left;
        max-width: 70%;
        font-weight: bold;
    }

    .community-spotlight__count {
        float: right;
        max-width: 30px;
    }

</style>
