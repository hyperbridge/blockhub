<template>
    <div class="view-review text-white">
        <div class="view-review__header">
            <div class="view-review__review-icon" :class="isRecommend ? 'view-review__review-icon--recommend' : 'view-review__review-icon--unrecommended'">
                <i class="fas" :class="isRecommend ? 'fa-thumbs-up' : 'fa-thumbs-down'"></i>
            </div>
            <div class="view-review__review-title">
                <div class="h4 font-weight-bold">
                    Recommended
                </div>
                <div>
                    1.0 hrs last two weeks / 97.7 hrs on record
                </div>
            </div>
            <div class="view-review__review-date my-3">
                Posted: 2 Jan @ 11:14am
            </div>
        </div>
        <div class="view-review__body">
            <div class="view-review__review-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit pretium laoreet. Vivamus
                    tincidunt gravida cursus. Donec in gravida elit, convallis fermentum ante. Duis eget euismod ipsum,
                    et venenatis eros. Cras sed mollis lacus. Pellentesque tempor faucibus ipsum porta pulvinar. Etiam
                    accumsan lacus eu sem ornare auctor.</p>
            </div>
        </div>
        <div class="view-review__footer">
            <div>
                <span class="h5 mr-3">
                    Was this review helpful?
                </span>
                <c-button status="second-info" size="sm" icon="thumbs-up">
                    Yes
                </c-button>
                <c-button status="second-info" size="sm" icon="thumbs-down" class="ml-2">
                    No
                </c-button>
                <c-button status="second-info" size="sm" icon="smile" class="ml-2">
                    Funny
                </c-button>
            </div>
            <c-button status="plain" size="md" class="ml-auto">
                <i class="fas fa-flag"></i>
            </c-button>
        </div>
        <div class="view-review__comment">
            <div class="" v-if="comment"></div>
            <div class="view-review__comment-close" v-else>
                Comments are disabled for this review.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isRecommend: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .view-review__header{
        display: flex;
        flex-wrap: wrap;
    }
    .view-review__review-icon{
        width: 50px;
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        &.view-review__review-icon--recommend{
            border: 1px solid #1bb934;
            background: rgba(27,185,52,.4);
        }
        &.view-review__review-icon--unrecommended{
            border: 1px solid #e1112c;
            background: rgba(225,17,44,.4);
        }
    }
    .view-review__review-title{
        width: calc( 100% - 50px );
        padding-left: 20px;
    }
    .view-review__footer{
        margin-top: 20px;
        padding-top: 20px;
        display: flex;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, .1);
    }
    .view-review__comment{
        display: flex;
        margin-top: 25px;
        width: 100%;
        .view-review__comment-close{
            padding: 10px;
            border-radius: 4px;
            width: 100%;
            background: rgba(0, 0, 0, .2);
            color: rgba(255, 255, 255, .7);
        }
    }
</style>
