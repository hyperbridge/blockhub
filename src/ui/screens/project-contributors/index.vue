<template>
    <c-layout navigationKey="project-navigation">
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
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  }
}
</script>

<style lang="scss" scoped>

</style>
