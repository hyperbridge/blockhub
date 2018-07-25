<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['data']
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 926px;
      background: url(/static/img/product-bg-fade.png);
      background-size: contain;
      background-position: 0 383px;
      z-index: 0;
    }
  }


</style>
