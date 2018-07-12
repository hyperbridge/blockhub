<template>
    <c-layout navigationKey="help-navigation">
        <div class="content" id="content">
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Support</h1>
                    <p class="caption">Let us know if you need further help.</p>
                </div>
                <c-heading />
            </div>
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>

</style>
