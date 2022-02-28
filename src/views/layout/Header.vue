<template>
  <div class="Header">
    <div class="l">
      <div @click="linkTo('home')" :class="active === 'home' && 'active'" class="item">home</div>
      <div @click="linkTo('work')" :class="active === 'work' && 'active'" class="item">work</div>
      <div @click="linkTo('timeline')" :class="active === 'timeline' && 'active'" class="item">timeline</div>
      <div @click="linkTo('about')" :class="active === 'about' && 'active'" class="item">about</div>
    </div>
    <div class="r"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {

  },
  props: {

  },
  data() {
    return {
      active: 'home'
    }
  },
  mounted () {

  },
  methods: {
    linkTo(type) {
      this.active = type
      if (`/${type}` === this.$route.path) return
      this.$router.push({
        path: `/${type}`
      })
    }
  },
}
</script>

<style lang="less" scoped>
.Header{
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e8e8e8;
  .l{
    flex: 1;
    display: flex;
    align-items: center;
    .item{
      margin: 0 20px;
      color: #b6b6b6;
      font-size: 16px;
      transition: all .3s;
      cursor: pointer;
    }
    .item.active{
      color: #444;
      text-decoration: line-through;
    }
  }
  .r{
    width: 35px;
    height: 35px;
    background: url(~@/assets/imgs/icon/more.png) no-repeat;
    background-size: 100%;
    margin-right: 30px;
    cursor: pointer;
  }
}
</style>
