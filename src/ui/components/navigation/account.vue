
<template>
    <div class="navigation" id="navigation-default">
        <h3>ACCOUNT</h3>

        <ul>
            <li class="title">XXX</li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">xxx</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">yyy</span>
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