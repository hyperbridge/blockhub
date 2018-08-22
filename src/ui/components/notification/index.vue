<template>
    <ul class="notifications-list">

        <li class="notifi_item"
            v-for="(msg, index) in notifications"
            :class="msg.type"
            :key="index">
            <div class="title" v-if="msg.title">
                <h5 class="text-left">
                    <!--Icons by type-->
                    <i class="fas fa-info" v-if="msg.type === 'info'"></i>
                    <i class="fas fa-check-circle" v-else-if="msg.type === 'success'"></i>
                    <i class="fas fa-exclamation-triangle" v-else-if="msg.type === 'warning'"></i>
                    <i class="fas fa-times-circle" v-else-if="msg.type === 'danger'"></i>
                    <i class="fas fa-cog" v-else></i>
                    <!--Icons by type end-->

                    {{ msg.title }}

                    <div class="close" @click="actionOnClose" v-if="msg.showCloseBtn">
                        <i class="fas fa-times"></i>
                    </div>

                </h5>
            </div>
            <div class="text" @click="actionOnTextClick">
                {{ msg.text }}
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['notifications'],
        methods: {
            actionOnClose: function () {
                alert('You are click on close btn');
            },
            actionOnTextClick: function () {
                alert('You are click on the text');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notifi_item{
        padding: 0;
        border: 1px solid #C6C6D6;
        background: #C6C6D6;
        border-radius: 5px;
        margin-bottom: 15px;
        color: #3D3E5D;
        overflow: hidden;
        .title{
            width: 100%;
            display: inline-block;
            padding: 3px 20px 3px 8px;
            background: rgba(39, 40, 62, .9);
            border-radius: 5px 5px 0 0;
            position: relative;
            color: #fff;
            float: right;
            margin-bottom: 0;
            font-size: 13px;
            font-weight: bold;
            h5{
                padding: 0;
                margin: 0;
                line-height: 17px;
                color: #fff;
                i{
                    margin-right: 10px;
                    color: #C6C6D6;
                }
            }
            .close{
                text-shadow: unset;
                opacity: 1;
                float: right;
                position: absolute;
                top: 4px;
                right: 7px;
                font-size: 16px;
                i{
                    margin: 0;
                    color: #fff!important;
                }
            }
        }
        .text{
            display: inline-block;
            width: 100%;
            float: left;
            padding: 5px 8px;
            text-align: left;
            line-height: 16px;
        }
        &.info{
            background: #5D75F7;
            border-color: #5D75F7;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #5D75F7;
                    }
                }
            }
        }
        &.success{
            background: #428c01;
            border-color: #428c01;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #428c01;
                    }
                }
            }
        }
        &.warning{
            background: #FADC72;
            border-color: #FADC72;
            color: #000;
            .title{
                h5{
                    i{
                        color: #FADC72;
                    }
                }
            }
        }
        &.danger{
            background: #E55555;
            border-color: #E55555;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #E55555;
                    }
                }
            }
        }
    }
</style>
