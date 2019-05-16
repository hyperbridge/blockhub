<template>
    <div>
        <transition name="slide-top">
            <div class="community-item__post-reply" v-if="replyMode">
                <h4 class="mt-4 mb-2 text-left">Your Reply:</h4>
                <div class="form-group">
                    <textarea class="form-control" rows="6" v-focus></textarea>
                </div>
            </div>
        </transition>


        <div class="community-item__action text-right">
            <template v-if="replyMode">
                <a href="#" class="btn btn-sm btn-danger" @click.prevent="cancelReply">
                    Cancel
                </a>
                <a href="#" class="btn btn-sm btn-info" @click.prevent="changeReplyMode">
                    Submit
                </a>
            </template>
            <template v-else>
                <a href="#" class="btn btn-sm btn-info" @click.prevent="changeReplyMode">
                    Reply
                </a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reply',
    data() {
        return {
            replyMode: false
        }
    },
    methods: {
        changeReplyMode() {
            this.replyMode = !this.replyMode;
            this.$emit('replyMode', this.replyMode);
            this.$store.commit('application/showProfileChooser', true)
        },
        cancelReply(){
            this.replyMode = !this.replyMode;
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.community-item__action {
    margin: 10px 7px;
    .btn {
        padding: 0px 7px;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0 3px;
    }
    .btn-icon {
        color: #F75D5D;
        font-size: 16px;
    }
    .btn-info {
        background: #5D75F7;
    }
    .btn-danger {
        background: #F75D5D;
    }
}

.community-item__post-reply {
    margin: 0 10px;
    box-sizing: border-box;
    width: calc(100% - 20px);
    h4 {
        font-weight: bold;
    }
    textarea {
        background: rgba(0, 0, 0, .1);
    }
}

.slide-top-enter-active, .slide-top-leave-active {
    transition: opacity .5s ease, transform .5s ease;
}
.slide-top-enter, .slide-top-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}
.slide-top-leave-active {
    position: absolute;
    transition-duration: .25s;
}
</style>

