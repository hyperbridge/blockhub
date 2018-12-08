<template>
    <div class="c-simple-vote">
        <i class="fa fa-chevron-up" @click="upvote" :class="{ disabled: upvoted }"></i>
        <span class="c-simple-vote__value">{{ value }}</span>
        <i class="fa fa-chevron-down" @click="downvote" :class="{ disabled: downvoted }"></i>
    </div>
</template>

<script>
export default {
    props: {
        votes: {
            type: Number,
            default: 0
        }
    },
    components: {
    },
    computed: {
        value() {
            if (this.upvoted) {
                return this.votes + 1
            } else if (this.downvoted) {
                return this.votes - 1
            } else {
                return this.votes
            }
        }
    },
    methods: {
        upvote() {
            this.upvoted = !this.upvoted
            this.downvoted = false
        },
        downvote() {
            this.downvoted = !this.downvoted
            this.upvoted = false
        }
    },
    data() {
        return {
            upvoted: false,
            downvoted: false
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
.c-simple-vote {
    position: absolute;
    top: 0px;
    right: -60px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    width: 50px;
    padding: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

.disabled {
    color: orange;
}


/* some simple transitions to make the upvote and downvote
buttons fade in as a visual cue for the user */

.c-simple-vote__value {
    width: 100%;
}

.fa {
    width: 100%;
    opacity: 1;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
}

.fa:hover {
    opacity: 0.75;
    cursor: pointer;
}

</style>