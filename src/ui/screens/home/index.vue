<template>
    <c-layout>
        <div class="content" id="content">
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Home</h1>
                    <p class="caption">Getter done</p>
                </div>
            </div>
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <a href="/#/sitemap">Go to sitemap</a>
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
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  created() {

  }
}
</script>

<style>

</style>
