<template>
  <div class="Layout">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/views/layout/Header.vue'
export default {
  name: 'Layout',
  components: {
    Header
  },
  props: {

  },
  data() {
    return {
      
    }
  },
  mounted () {

  },
  methods: {},
}
</script>

<style lang="less" scoped>

</style>
