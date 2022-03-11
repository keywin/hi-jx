<template>
  <div class="Layout">
    <Nav @showDrawer="showDrawer"></Nav>
    <router-view></router-view>
    <Drawer :isShowDrawer="isShowDrawer"></Drawer>
  </div>
</template>

<script>
import Nav from '@/views/layout/Nav.vue'
import Drawer from '@/views/layout/Drawer.vue'
export default {
  name: 'Layout',
  components: {
    Nav,
    Drawer
  },
  props: {

  },
  data() {
    return {
      isShowDrawer: false
    }
  },
  mounted () {

  },
  methods: {
    showDrawer() {
      this.isShowDrawer = !this.isShowDrawer
    }
  },
}
</script>

<style lang="less" scoped>
.Layout{
  display: flex;
  height: 100vh;
}
</style>
