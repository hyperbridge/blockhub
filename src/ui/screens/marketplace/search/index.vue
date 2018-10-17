<template>
    <router-view/>
</template>

<script>
export default {
    components: {
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
    }
}
</script>

<style>

</style>
