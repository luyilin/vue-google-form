<template>
  <div id="app">
    <create></create>
  </div>
</template>

<script>
  import create from './components/create.vue'
  export default {
    name: 'app',
    components: {
      create
    }
  }
</script>

<style lang="scss">
  @import "./styles/reset";
</style>
