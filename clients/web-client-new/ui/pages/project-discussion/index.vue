<template>
    <c-layout navigationKey="project">
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('~/components/front-layout').then(m => m.default || m)
  }
}
</script>

<style lang="scss" scoped>

</style>
