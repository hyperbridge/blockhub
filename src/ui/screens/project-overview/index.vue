<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        {{ project.name }}
                        {{ project.id }}
                        view: https://user-images.githubusercontent.com/156768/41747165-dfe9b3bc-7561-11e8-825c-6ffcd8ef81e6.png
                        create: https://user-images.githubusercontent.com/156768/41747177-f05f5cd8-7561-11e8-9640-403ccbebbb07.png
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>



<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  props: ['id'],
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  data() {
    return {
    }
  },
  computed: {
      project() { console.log(this.$store.state.funding); return this.$store.state.funding.entities.projects[this.id] }
  }
}
</script>


<style>

</style>
