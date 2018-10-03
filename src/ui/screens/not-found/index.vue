<template>
    <c-layout navigationKey="help-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        Page not found
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  }
}
</script>


<style>

</style>
