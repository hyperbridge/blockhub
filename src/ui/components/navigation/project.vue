
<template>
    <div class="navigation" id="navigation-default">
        <h3 style="margin-bottom: 58px">GAME</h3>
        <ul>
            <li class="title"><span class="icon fas fa-question-circle"></span> Help</li>
            <li>
                <a href="#">
                    Building Communities
                </a>
            </li>
            <li>
                <a href="#">
                    Suggesting Features
                </a>
            </li>
            <li>
                <a href="#">
                    Voting &amp; Curating Updates
                </a>
            </li>
            <li class="more">
                <a href="#">
                    MORE...
                </a>
            </li>
        </ul>

        <div class="sidebar-card margin-top-30">
            <h4>
                <i class="fas fa-check"></i>
                Content curated
            </h4>
            <p>This page has been curatedby 2041 users</p>
            <a href="#3" class="btn btn-sm btn-outline-white">
                Become a curator
            </a>
        </div>
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
    .sidebar-card{
        display: inline-block;
        width: 100%;
        float: left;
    }
</style>
