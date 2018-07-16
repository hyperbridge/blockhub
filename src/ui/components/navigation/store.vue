
<template>
    <div class="navigation" id="navigation-default">
        <h3>STORE</h3>

        <ul>
            <li class="title">Store Home</li>
            <li>
                <a href="/#/store">
                    My Store
                </a>
            </li>
            <li>
                <a href="/#/dashboard">
                    Friends Store
                </a>
            </li>
            <li class="title">Browse By Genre</li>
            <li>
                <a onclick="filter({genre: 'action'})">
                    Action
                </a>
            </li>
            <li>
                <a href="filter({genre: 'adventure'})">
                    Adventure
                </a>
            </li>
            <li>
                <a href="filter({genre: 'rpg'})">
                    RPG
                </a>
            </li>
            <li>
                <a href="filter({genre: 'racing'})">
                    Racing
                </a>
            </li>
            <li>
                <a href="filter({genre: 'simulation'})">
                    Simulation
                </a>
            </li>
            <li>
                <a href="filter({genre: 'fighting'})">
                    Fighting
                </a>
            </li>
            <li>
                <a href="filter({genre: 'vr'})">
                    VR
                </a>
            </li>
            <li class="more">
                <a href="#">
                    MORE...
                </a>
            </li>
            <li class="title"><span class="icon fas fa-question-circle"></span> Help</li>
            <li>
                <a onclick="/#/help/country-availability">
                    Content Availability by Country
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