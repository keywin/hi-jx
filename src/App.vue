<template>
  <div id="app">
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <router-view></router-view>
      <Login></Login>
    </v-touch>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  },
  computed: {
    touchStatus () {
      return this.$store.state.auth.touchStatus
    },
  },
  methods: {
    swiperleft() {
      if (this.touchStatus.nav) {
        this.$store.commit('SET_TOUCHSTATUS', { nav: '' })
      } else if (!this.touchStatus.drawer) {
        this.$store.commit('SET_TOUCHSTATUS', { drawer: 'active' })
      }
    },
    swiperright() {
      if (this.touchStatus.drawer) {
        this.$store.commit('SET_TOUCHSTATUS', { drawer: '' })
      } else if (!this.touchStatus.nav)
      this.$store.commit('SET_TOUCHSTATUS', { nav: 'active' })
    }
  }
}
</script>

<style>
@import '~@/assets/styles/reset.less';
</style>
