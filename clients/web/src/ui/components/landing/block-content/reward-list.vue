<template>
    <div class="landing-reward-list">
        <div class="landing-reward-list__content">
            <slot />
        </div>
        <div class="landing-reward-list__list-wrapper" v-if="$slots.list">
            <div class="list-toggle-btn" @click="toggleList">
                {{ bntText }} Reward list
            </div>
            <div class="landing-reward-list__list" v-if="showList">
                <slot name="list" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reward-list',
        data(){
            return{
                showList: false
            }
        },
        methods:{
            toggleList(){
                this.showList = !this.showList
            }
        },
        computed:{
            bntText(){
                if (this.showList)
                    return 'Hide'
                else
                    return 'Show'
            }
        }
    }
</script>

<style lang="scss">
    .landing-reward-list{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .landing-reward-list__content{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .landing-reward-list__list-wrapper{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        .list-toggle-btn{
            width: 400px;
            max-width: 100%;
            font-size: 16px;
            text-transform: uppercase;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, .5);
            color: rgba(255, 255, 255, .7);
            transition: all 200ms ease-in-out;
            text-align: center;
            &:hover{
                color: #fff;
                cursor: pointer;
            }
        }
    }
    .landing-reward-list__list{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 30px 50px;
        color: #fff;
        text-align: left;
        background: rgba(0, 0, 0, .8);
        border: 1px solid rgba(255, 255, 255, .3);
        margin-top: 30px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    }
</style>
