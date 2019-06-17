<template>
    <div class="buttons-group">
        <slot />
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
    .buttons-group{
        display: inline-flex;
        align-items: stretch;
        .button{
            border-radius: 0;
            &:first-child{
                border-radius: 5px 0 0 5px;
            }
            &:last-child{
                border-radius: 0 5px 5px 0;
            }
            &:not(:last-child){
                border-right: none;
            }
        }
    }
</style>
