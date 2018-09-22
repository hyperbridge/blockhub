
<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="GAME OVERVIEW" sub_title="Help" sub_icon="fas fa-question-circle" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/" link_text="Suggesting Features" />
            <c-sidebar-menu-link url="/#/" link_text="Voting and Curating Updates" />
            <c-sidebar-menu-link url="#3" aClass="font-weight-bold" link_text="MORE ..." />
        </c-sidebar-menu>

    </div>
</template>

<script>
export default {
  components: {
      'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
      'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
      'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
  },
  data() {
    return {}
  }
}
</script>
