<template>
  <div class="Nav" :class="$store.state.auth.touchStatus.nav ? $store.state.auth.touchStatus.nav : ''">
    <div class="r" @click="showDrawer()" @contextmenu.prevent="loginOut()">
      <img v-if="userInfo.avatarurl" :src="userInfo.avatarurl" alt="" width="48px" height="48px">
      <span v-if="!userInfo.avatarurl"></span>
    </div>
    <div class="l">
      <div v-for="item in listData" :key="item.path" @click="linkTo(item.path)" :class="active === item.path && 'active'" class="item">{{ item.name }}</div>
      <!-- <div @click="linkTo('/work')" :class="active === '/work' && 'active'" class="item">work</div> -->
      <!-- <div @click="linkTo('/link')" :class="active === '/link' && 'active'" class="item">link</div> -->
    </div>
  </div>
</template>

<script>
import Home from '@/router/modules/home.js'
export default {
  name: 'Nav',
  components: {

  },
  props: {

  },
  data() {
    return {
      active: 'home',
      listData: []
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    },
    touchStatus () {
      return this.$store.state.auth.touchStatus
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(nVal) {
        this.active = nVal.path
      }
    },
  },
  created() {
    // this.active = this.$route.path
    this.listData = Home[0].children
  },
  mounted () {

  },
  methods: {
    linkTo(type) {
      // this.active = type
      if (`${type}` === this.$route.path) return
      this.$router.push({
        path: `${type}`
      })
    },
    showDrawer() {
      if (!this.userInfo.username) {
        this.$store.commit('SET_ISSHOW_LOGIN', true)
      } else {
        if (this.touchStatus.drawer) {
          this.$store.commit('SET_TOUCHSTATUS', { drawer: '' })
        } else {
          this.$store.commit('SET_TOUCHSTATUS', { drawer: 'active' })
        }
      }
    },
    loginOut() {
      this.$store.commit('SET_LOGINOUT')
    }
  },
}
</script>

<style lang="less" scoped>
.Nav{
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 100vh;
  // border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #f6f7fc;
  transition: width .3s;
  &.active{
    width: 180px;
  }
  .l{
    flex: 1;
    .item{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 189px;
    img{
      border-radius: 50%;
    }
    span{
      padding: 10px;
      border: 16px solid #444b69;
      border-radius: 50%;
    }
  }
}
</style>
