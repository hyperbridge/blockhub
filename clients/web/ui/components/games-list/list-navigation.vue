<template>
    <div class="games-navigation">
        <ul>
            <li
                v-for="item in list"
                :key="item.id"
                :class="{ 'active' : activeId == item.id }"
                @click="chooseGame(item.id)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        },
        activeId: [String, Number]
    },
    methods: {
        chooseGame(id) {
            this.$emit('choose', id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-navigation{
        display: flex;
        flex-direction: column;
        width: 100%;
        ul{
            padding: 0;
            margin: 0;
            li{
                list-style: none;
                padding: 15px 20px;
                color: #fff;
                font-size: 16px;
                border-left: 3px solid transparent;
                overflow: hidden;
                position: relative;
                &:after{
                    position: absolute;
                    top: 0;
                    right: -3px;
                    bottom: 0;
                    box-shadow: 0 0 6px rgba(0, 0, 0, .8);
                    width: 3px;
                }
                &:hover,
                &.active{
                    border-color: #595877;
                    background: rgba(255, 255, 255, .05);
                    color: #fff;
                    cursor: pointer;
                    &:after{
                        content: "";
                    }
                }
            }
        }
    }
</style>
