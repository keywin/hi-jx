<template>
  <div class="Login">
    <div class="maskFoo" :class="!isShowLogin && 'hide'" @click="isShow(false)">
      <div class="mask" @click.stop="isShow(true)">
        <div class="title">
          <span>你是?</span>
        </div>
        <input type="text" v-model="formData.username" placeholder="username">
        <input type="text" v-model="formData.pwd" placeholder="pwd">
        <div class="btn" @click="login()">登录/注册</div>
        <div class="tip">{{ tip }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import WebIM from "@/utils/initWeb"

export default {
  name: 'Layout',
  components: {

  },
  props: [],
  data() {
    return {
      formData: {
        username: 'liukaiwen',
        pwd: '111111',
      },
      tip: '',
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    },
    isShowLogin () {
      return this.$store.state.auth.isShowLogin
    },
    isSuccessLogin () {
      return this.$store.state.auth.isSuccessLogin
    }
  },
  watch: {
    isSuccessLogin(val) {
      if (val) {
        this.fetchUserInfoById()
      }
    }
  },
  created() {
    if (this.userInfo.username && this.userInfo.pwd) {
      this.formData = this.userInfo
      this.login()
    }
  },
  mounted () {

  },
  methods: {
    // 登录
    login() {
      if (!this.formData.username || !this.formData.username) {
        return
      }
      let _this = this
      let options = {
        apiUrl: WebIM.config.apiURL,
        user: _this.formData.username,
        pwd: _this.formData.pwd,
        appKey: WebIM.config.appkey,
        error: function () {
          _this.register()
        }
      };
      WebIM.conn.open(options);
    },
    // 注册
    register() {
      let _this = this
      let options = { 
        username: _this.formData.username,
        password: _this.formData.pwd,
        nickname: 'nickname',
        appKey: WebIM.config.appkey,
        success: function () {
          _this.login()
        },  
        error: function (err) {
          let errorData = JSON.parse(err.data);
          if (errorData.error === 'duplicate_unique_property_exists') {
            _this.tip = '用户已存在！';
          } else if (errorData.error === 'illegal_argument') {
            if (errorData.error_description === 'USERNAME_TOO_LONG') {
              _this.tip = '用户名超过64个字节！'
            }else{
              _this.tip = '用户名不合法！'
            }
          } else if (errorData.error === 'unauthorized') {
            _this.tip = '注册失败，无权限！'
          } else if (errorData.error === 'resource_limited') {
            _this.tip = '用户注册数量已达上限'
          }
        }, 
      }; 
      WebIM.conn.registerUser(options);
    },
    // 获取用户属性
    fetchUserInfoById() {
      WebIM.conn.fetchUserInfoById(this.formData.username).then((res) => {
        this.$store.commit('SET_USERINFO', {
          ...this.formData,
          ...res.data[this.formData.username]
        })
        this.$store.commit('SET_ISSHOW_LOGIN', false)
      })
    },
    isShow(val) {
      this.$store.commit('SET_ISSHOW_LOGIN', val)
    }
  },
}
</script>

<style lang="less" scoped>
.Login{
  .maskFoo{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .5);
    transition: transform .3s;
    z-index: 9999;
    .mask{
      width: 300px;
      border: 1px solid #eee;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      padding: 25px;
      background: url(~@/assets/imgs/cat.jpg) no-repeat center;
      background-size: 100%;
      .title{
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
      }
      input{
        width: 100%;
        height: 32px;
        margin-bottom: 20px;
        padding: 0 12px;
        border: 1px solid #e8e8e8;
        background: rgba(255,255,255,.5);
      }
    }
  }
  .maskFoo.hide{
    transform: scale(0);
  }
  .btn{
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
  .tip{
    text-align: right;
    margin-top: 10px;
    font-size: 12px;
    color: #F56C6C;
  }
}
</style>
