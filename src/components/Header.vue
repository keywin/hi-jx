<template>
  <div class="Header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {

  },
  props: [],
  data() {
    return {
      
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },
  watch: {
    
  },
  created() {
    
  },
  mounted () {

  },
  methods: {},
}
</script>

<style lang="less" scoped>
.Header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f7fc;
}
</style>
