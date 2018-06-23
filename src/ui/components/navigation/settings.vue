
<template>
    <div class="navigation" id="navigation-default">
        <h3>SETTINGS</h3>

        <ul>
            <li class="title">General</li>
            <li>
                <a href="/#/settings/client">
                    <span class="icon li-home"></span>
                    <span class="text">Client</span>
                </a>
            </li>
            <li>
                <a href="/#/settings/profile">
                    <span class="icon li-home"></span>
                    <span class="text">Profile</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {
    'c-navigation-list': () => import('@/ui/components/navigation/navigation-list')
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>