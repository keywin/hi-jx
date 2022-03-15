<template>
  <div class="Drawer" :class="drawer">
    <div class="jx-card">

    </div>
    <div class="jx-input">
      <input type="text" placeholder="nickname" v-model="formaData.nickname">
    </div>
    <div class="jx-input">
      <img :src="formaData.avatarurl" width="32px" height="32px" alt="" v-if="formaData.avatarurl">
      <input type="text" placeholder="avatarurl" v-model="formaData.avatarurl">
    </div>
    <div class="jx-input">
      <input type="text" placeholder="mail" v-model="formaData.mail">
    </div>
    <div class="jx-input">
      <input type="text" placeholder="phone" v-model="formaData.phone">
    </div>
    <div class="jx-input">
      <input type="text" placeholder="性别" v-model="formaData.gender">
    </div>
    <div class="jx-input">
      <input type="text" placeholder="签名" v-model="formaData.sign">
    </div>
    <div class="jx-input">
      <input type="text" placeholder="birth" v-model="formaData.birth">
    </div>
    <div class="jx-btn" @click="updateOwnUserInfo()">保存</div>
  </div>
</template>

<script>
import WebIM from "@/utils/initWeb"

export default {
  name: 'Layout',
  components: {

  },
  data() {
    return {
      formaData: {
        avatarurl: 'https://minio.peopleyun.cn/people-chain-logo/2570622176734478336-20221228104802600.jpg'
      }
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    },
    drawer () {
      return this.$store.state.auth.touchStatus.drawer ? this.$store.state.auth.touchStatus.drawer : ''
    },
  },
  watch: {
    drawer: {
      immediate: true,
      handler(val) {
        val && this.fetchUserInfoById()
      }
    }
  },
  mounted () {
    this.fetchUserInfoById()
  },
  methods: {
    // 获取用户属性
    fetchUserInfoById() {
      WebIM.conn.fetchUserInfoById(this.userInfo.username).then((res) => {
        this.formaData = res.data[this.userInfo.username]
      })
    },
    updateOwnUserInfo() {
      WebIM.conn.updateOwnUserInfo(this.formaData).then(() => {
        
      })
    }
  },
}
</script>

<style lang="less" scoped>
.Drawer{
  position: fixed;
  width: 300px;
  height: 100vh;
  padding: 20px;
  right: -300px;
  top: 50px;
  background: #e4e4e4;
  transition: all .3s;
  z-index: 9999;
  &.active{
    right: 0;
  }
  .jx-card{

  }
  .jx-input{
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    background: #fff;
    input{
      width: 100%;
      height: 32px;
      padding: 0 12px;
    }
  }
  .jx-btn{
    width: 100%;
    height: 32px;
    line-height: 28px;
    text-align: center;
    font-size: 14px;
    color: #666;
    background: linear-gradient(0deg,#fff,#f3f5f8);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
    cursor: pointer;
  }
}
</style>
