<template>
    <div class="chat-group__welcome">
        <div class="h4 font-weight-bold">
            Welcome to ChanelName!
        </div>
        <div class="welcome-logo">
            <img src="../../../static/img/logo.png" />
        </div>
        <div class="chat-group__welcome-action">
            <ul>
                <li>
                    <c-button status="plain">
                        <i class="fas fa-user-plus margin-right-5"></i>
                        Invite some friends
                    </c-button>
                    to fill out your roster.
                </li>
                <li>
                    <c-button status="plain">
                        <i class="fas fa-plus margin-right-5"></i>
                        Create channels
                    </c-button>
                    to keep conversation organized.
                </li>
                <li>
                    <c-button status="plain">
                        <i class="fas fa-cog margin-right-5"></i>
                        Customize
                    </c-button>
                    your group to make it your own.
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .chat-group__welcome{
        width: 100%;
        height: 100%;
        padding: 30px;
        border: 1px solid rgba(255, 255, 255, .1);
        text-align: center;
    }
    .welcome-logo{
        text-align: center;
        margin: 30px 0;
        img{
            width: 300px;
            height: auto;
        }
    }
    .chat-group__welcome-action{
        display: flex;
        flex-direction: column;
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            li{
                list-style: none;
                padding: 5px 0;
                text-align: left;
            }
        }
    }
</style>
