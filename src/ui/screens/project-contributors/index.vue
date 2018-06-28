<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                      {id}
                      {name}
                      {images.avatarUrl}
                      
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  }
}
</script>

<style lang="scss" scoped>

</style>
