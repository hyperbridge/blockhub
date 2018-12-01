<template>
    <div class="chat-message">
        <div class="chat-message__avatar">
            <img src="../../../../static/img/user.png" />
        </div>
        <div class="chat-message__body">
            <div class="chat-message__info">
                <strong>
                    Josh Levinson
                </strong>
                <span>
                    11:30 pm
                </span>
            </div>
            <div class="chat-message__content">
                Proin ut purus suscipit, bibendum eros et, mollis augue. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Aenean feugiat libero vel tortor feugiat maximus. Nullam
                lobortis nisi felis, sed vehicula neque hendrerit accumsan. Sed tincidunt aliquam lacus, et aliquet
                magna pharetra eget. Ut elementum sit amet tellus non pulvinar. Integer mi quam, mattis at ultrices
                quis, aliquet ut risus.
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .chat-message {
        display: flex;
        width: 100%;
        align-items: flex-start;
        color: #fff;
        padding: 10px 0;
    }
    .chat-message__avatar {
        width: 40px;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .chat-message__body {
        width: calc(100% - 40px);
        padding-left: 15px;
    }
    .chat-message__info {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        strong {
            font-weight: bold;
            color: #5D75F7;
        }
        span {
            opacity: .6;
            margin-left: 10px;
        }
    }
</style>
