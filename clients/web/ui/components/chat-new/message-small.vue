<template>
    <div class="message-small">
        <span class="message-small__author"
              :style="{'color': color ? color : 'blue'}">
            {{ author }}
        </span>
        <span class="message-small__text">
            {{ content }}
        </span>
    </div>
</template>

<script>
    export default {
        props: ['author', 'color', 'content']
    }
</script>

<style lang="scss"scoped>
    .message-small{
        margin-bottom: 5px;
    }
    .message-small__author{
        font-weight: bold;
    }
    .message-small__text{
        opacity: .9;
    }
</style>
