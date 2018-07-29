<template>
    <div class="container-fluid">  
        <div class="row">
            <div class="col-12">
                <div class="card invert">
                    <c-heading-bar :name="title" :showArrows="false" />
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    components: {
        'c-heading-bar': () => import('@/ui/components/heading-bar')
    }
}
</script>

<style lang="scss" scoped>
    .card {
        padding: 20px;
    }
</style>

