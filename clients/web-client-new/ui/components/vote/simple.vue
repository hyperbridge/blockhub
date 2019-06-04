<template>
    <div class="c-simple-vote">
        <i class="fa fa-chevron-up"
           :class="{ disabled: upvoted }"
           @click="upvote" />
        <span class="c-simple-vote__value">{{ value }}</span>
        <i class="fa fa-chevron-down"
           :class="{ disabled: downvoted }"
           @click="downvote" />
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        votes: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            upvoted: false,
            downvoted: false
        }
    },
    computed: {
        value() {
            if (this.upvoted) {
                return this.votes + 1
            } else if (this.downvoted) {
                return this.votes - 1
            }
            return this.votes
        }
    },
    created() {
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
    }
}
</script>

<style lang="scss" scoped>
.c-simple-vote {
    position: absolute;
    top: 0px;
    right: -45px;
    z-index: 1;
    background: rgba(0, 0, 0, 1);
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
