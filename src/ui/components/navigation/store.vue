
<template>
    <div class="navigation" id="navigation-default">
        <h3>STORE</h3>

        <ul>
            <li class="title">Store Home</li>
            <li>
                <a href="/#/store">
                    <span class="icon fa fa-home"></span>
                    <span class="text">My Store</span>
                </a>
            </li>
            <li>
                <a href="/#/dashboard">
                    <span class="icon fa fa-home"></span>
                    <span class="text">Friends Store</span>
                </a>
            </li>
            <li class="title">Browse By Genre</li>
            <li>
                <a onclick="filter({genre: 'action'})">
                    <span class="icon fa fa-home"></span>
                    <span class="text">Action</span>
                </a>
            </li>
            <li>
                <a href="filter({genre: 'adventure'})">
                    <span class="icon fa fa-home"></span>
                    <span class="text">Adventure</span>
                </a>
            </li>
            <li>
                <a href="filter({genre: 'rpg'})">
                    <span class="icon fa fa-home"></span>
                    <span class="text">RPG</span>
                </a>
            </li>
            <li>
                <a href="filter({genre: 'racing'})">
                    <span class="icon fa fa-home"></span>
                    <span class="text">Racing</span>
                </a>
            </li>
            <li class="title">Help</li>
            <li>
                <a onclick="/#/help/country-availability">
                    <span class="icon fa fa-home"></span>
                    <span class="text">Content Availability by Country</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>