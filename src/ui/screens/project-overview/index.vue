<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12" v-if="!project">
                        Project not found
                    </div>
                    <div class="col-12" v-if="project">
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
  props: ['id'],
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  data() {
    return {
    }
  },
  computed: {
      project() {
        if (!this.$store.state.funding.entities.projects)
            return
        
        const project = this.$store.state.funding.entities.projects[this.id]

        if (!project)
            return

        return project
    }
  }
}
</script>


<style>

</style>
