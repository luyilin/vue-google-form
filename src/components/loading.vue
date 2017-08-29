<style lang="scss" scoped>
  .v-loading {
    text-align: center;
    margin: 25px auto;
    .v-line {
      background-color: rgb(127, 223, 255);
      width: 4px;
      height: 35px;
      margin: 0;
      border-radius: 2px;
      display: inline-block;
      animation: scaleLine 1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08) both;
    }
    .v-line1 {
      animation-delay: 0.1s;
    }
    .v-line2 {
      animation-delay: 0.2s;
    }
    .v-line3 {
      animation-delay: 0.3s;
    }
    .v-line4 {
      animation-delay: 0.4s;
    }
    .v-line5 {
      animation-delay: 0.5s;
    }
  }
  @keyframes scaleLine {
    0, 100% {
      transform: scaleY(1)
    }
    50% {
      transform: scaleY(0.4)
    }
  }
</style>

<template>
  <div class="v-loading" v-show="loading">
    <div class="v-line v-line1"></div>
    <div class="v-line v-line2"></div>
    <div class="v-line v-line3"></div>
    <div class="v-line v-line4"></div>
    <div class="v-line v-line5"></div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      loading: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
