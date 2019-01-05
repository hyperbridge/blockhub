<template>
    <div class="topic-list-item" :class="['block-size-' + size]">
        <c-button status="none" :href="link" :to="to">
            <i :class="['fas fa-' + icon ]"></i>
            <slot />
        </c-button>
    </div>
</template>

<script>
    export default {
        name: 'topic-list-item',
        props: ['link', 'to', 'icon', 'size']
    }
</script>

<style lang="scss" scoped>
    .topic-list-item{
        .c-button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15px;
            text-align: center;
            color: #fff;
            font-weight: bold;
            height: 100%;
            font-size: 16px;
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
            cursor: pointer;
            i{
                font-size: 22px;
                margin-bottom: 15px;
            }
            &:hover{
                text-decoration: none;
                background-color: rgba(0, 0, 0, .3);
            }
        }
        &.block-size-lg{
            .c-button{
                font-size: 18px;
                i{
                    font-size: 32px;
                }
            }
        }
    }
</style>
