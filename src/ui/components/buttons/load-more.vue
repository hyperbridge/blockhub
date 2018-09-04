<template>
    <div class="load-more">
        <div class="load-more__btn">
            <a :href="href" @click="emit('click')"><slot>Read More</slot></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c-read-more',
        props:{
            href: String
        }
    }
</script>

<style lang="scss" scoped>
    @mixin animation{
        -moz-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        -webkit-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
    }
    .load-more{
        display: flex;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        padding: 10px 0;
        a{
            color: #C6C6D6;
            text-transform: uppercase;
            padding: 0 15px;
            position: relative;
            font-weight: bold;
            font-size: 16px;
            &:before{
                position: absolute;
                left: -90px;
                height: 1px;
                background: #C6C6D6;
                width: 90px;
                content: "";
                top: 50%;
                @include animation;
            }
            &:after{
                position: absolute;
                right: -90px;
                height: 1px;
                background: #C6C6D6;
                width: 90px;
                content: "";
                top: 50%;
                @include animation;
            }
            &:hover{
                cursor: pointer;
                text-decoration: none;
                color: #C6C6D6;
                &:before{
                    left: -105px;
                }
                &:after{
                    right: -105px;
                }
            }
        }
    }
</style>
