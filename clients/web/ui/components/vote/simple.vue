<template>
    <div>
        <div class="simple-vote">
            <i
                class="fa fa-chevron-up"
                :class="{ disabled: upvoted }"
                @click="upvote" />
            <span class="simple-vote__value">{{ value }}</span>
            <i
                class="fa fa-chevron-down"
                :class="{ disabled: downvoted }"
                @click="downvote" />    
        </div>        
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
        },
    },
    data() {
        return {
            upvoted: false,
            downvoted: false
        }
    },
    computed: {
        value() {
            let votes = 0;
            if (this.upvoted) {
                votes = this.votes + 1;
                return votes;
            } else if (this.downvoted) {
                votes = this.votes - 1;
                return votes;
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
            let votes = 0;
            if (this.upvoted) {
                votes = this.votes + 1;
            } else if (this.downvoted) {
                votes = this.votes - 1;
            }
            this.$emit('upVote',votes)
        },
        downvote() {
            this.downvoted = !this.downvoted
            this.upvoted = false
            let votes = 0;
            if (this.upvoted) {
                votes = this.votes + 1;
            } else if (this.downvoted) {
                votes = this.votes - 1;
            }
            this.$emit('upVote',votes)
        }
    }
}
</script>

<style lang="scss" scoped>
.simple-vote {
    position: absolute;
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
