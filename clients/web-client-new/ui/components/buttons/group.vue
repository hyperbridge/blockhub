<template>
    <div class="c-buttons-group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'ButtonsGroup'
}
</script>
<style lang="scss">
    .c-buttons-group{
        display: inline-flex;
        align-items: stretch;
        .c-button{
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
