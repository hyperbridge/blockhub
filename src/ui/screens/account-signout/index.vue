<template>
    <c-layout navigationKey="account">
        <div class="content" id="content">
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Sign Out</h1>
                    <p class="caption">Are you sure you want to sign out?</p>
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
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>

</style>
