<template>
  <div id="app">
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
@import '~@/assets/styles/reset.less';
</style>
