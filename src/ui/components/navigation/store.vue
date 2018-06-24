
<template>
    <div class="navigation" id="navigation-default">
        <h3>STORE</h3>

        <ul>
            <li class="title">Store Home</li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">My Store</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Friends Store</span>
                </a>
            </li>
            <li class="title">Browse By Genre</li>
            <li>
                <a onclick="filter({genre: 'action'})">
                    <span class="icon li-home"></span>
                    <span class="text">Action</span>
                </a>
            </li>
            <li>
                <a href="#/account/receive">
                    <span class="icon li-home"></span>
                    <span class="text">Adventure</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">RPG</span>
                </a>
            </li>
            <li>
                <a href="#/account/transactions">
                    <span class="icon li-home"></span>
                    <span class="text">Racing</span>
                </a>
            </li>
            <li class="title">Help</li>
            <li>
                <a onclick="filter({genre: 'fighting'})">
                    <span class="icon li-home"></span>
                    <span class="text">Fighting</span>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <span class="icon li-home"></span>
                    <span class="text">Simulation</span>
                </a>
            </li>
            <li class="title">Help</li>
            <li>
                <a onclick="filter({genre: 'action'})">
                    <span class="icon li-home"></span>
                    <span class="text">Content Availability by Country</span>
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