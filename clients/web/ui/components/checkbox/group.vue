<template>
    <div class="checkbox-group">
        <h3>{{ title }}</h3>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String }
    }
}
</script>

<style lang="scss" scoped>
    .checkbox-group{
        display: block;
        width: 100%;
        overflow: hidden;
        h3{
            font-size: 15px;
            font-weight: bold;
            color: #fff;
            margin: 0 0 15px 0;
            padding: 0;
        }
        .checkbox{
            margin-bottom: 5px;
            display: flex;
            &:last-child{
                margin: 0;
            }
        }
    }
</style>
