<template>
    <div class="card invert community-spotlight" v-if="discussions">
        <div class="card-body">
            <div class="editor-container editor-container--style-2" v-if="editing">
                <p class="" v-if="!activeElement">
                    <i class="fas fa-cog"></i>
                    Set Up Community
                </p>
            </div>
            <h2 class="title">Community Spotlight
                <a href="#3" class="title-icon">
                    <i class="fas fa-comments"></i>
                    <i class="fas fa-arrow-up"></i>
                </a>
            </h2>
            <ul class="community-spotlight__list">
                <li v-for="(item, index) in discussions" :key="index">
                    <a :href="item.link">
                        <span class="community-spotlight__name">{{ item.name }}</span>
                        <span class="community-spotlight__count">{{ item.count }}</span>
                    </a>
                </li>
            </ul>
            <a :href="community_url" class="btn btn-outline-white">Go To Community</a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'community-spotlight',
    props: {
        discussions: Array,
        community_url: String,
        editing: Boolean,
        activateElement: Boolean
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

    .community-spotlight {
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
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
