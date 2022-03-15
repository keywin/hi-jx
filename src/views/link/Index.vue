<template>
  <div class="Link">
    <Header>
      <div class="jx-input">
        <input type="text" placeholder="回车检索, 按钮添加" v-model="searchVal">
        <img src="~@/assets/imgs/increase.png" alt="" @click="addContact">
      </div>
      <div class="header">{{ active }}</div>
    </Header>
    <div class="content">
      <div class="LEFT">
        <ul>
          <li v-for="item in friendList" :key="item.username" :class="active === item.username && 'active'" @click="treeClick(item)">
            <div class="logo">
              <img v-if="item.avatarurl" :src="item.avatarurl" alt="" width="100%">
              <div v-if="!item.avatarurl">{{ transTxt(item.username) }}</div>
            </div>
            <div class="info">
              <div class="user">{{ item.username }}</div>
              <div class="time">{{ item.sign }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="RIGHT">
        <div class="listFoo">
          <div class="list" v-for="(item, i) in nowMsgList" :key="i">
            <div :class="item.from === userInfo.username ? 'r' : 'l'">
              <div class="logo">
                <img v-if="item.img" :src="item.img" alt="" width="100%">
                <div v-if="!item.img">{{ transTxt(item.from) }}</div>
              </div>
              <div class="c-r">
                <div class="tim">{{ $dayjs(item.time).format('dddd HH:mm:ss') }}</div>
                <div class="msg">{{ item.msg }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <textarea type="text" v-model="msg" placeholder="" @keydown="sendMsg2"></textarea>
          <div class="btn" @click="sendMsg()">发 送</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebIM from "@/utils/initWeb"

export default {
  name: 'Link',
  components: {

  },
  props: {

  },
  data() {
    return {
      active: '',
      msg: '',
      searchVal: ''
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    },
    friendList () {
      return this.$store.state.auth.friendList
    },
    nowMsgList () {
      return this.$store.state.auth.msgList.filter(item => [item.from, item.to].includes(this.active))
    }
  },
  created() {

  },
  mounted () {

  },
  methods: {
    // 发送消息
    sendMsg() {
      if (!this.msg) return
      var id = WebIM.conn.getUniqueId();
      var msg = new WebIM.message('txt', id);

      msg.set({
        msg: this.msg,
        to: 'liukaiwen',
        ext: {
          time: new Date(),
        },
        success: function (id, serverMsgId) {
          console.log('发送文本消息成功', id, serverMsgId);
        },
        fail: function (err) {
          console.log("发送文本消息失败", err);
        }
      });

      WebIM.conn.send(msg.body);

      this.$store.commit('SET_MSGLIST', {
        chatType: msg.body.chatType,
        type: msg.body.type,
        mid: msg.body.id, // 消息id
        msg: msg.body.msg, // 消息文本
        time: msg.body.time, // 发送时间
        from: this.userInfo.username, // 发送人id
        to: msg.body.to, // 接受者id
      })

      this.$nextTick(() => {
        // 控制滚动条到最底部
        var listFoo = document.getElementsByClassName('listFoo')[0];
        listFoo.scrollTop = listFoo.scrollHeight;

        this.msg = ''
      })
    },
    // 回车键发送
    sendMsg2(e) {
      if (e.keyCode === 13) {
        this.sendMsg()
        e.preventDefault();
        return false
      }
    },
    // 文字头像需要截取字段
    transTxt(val) {
      return val.substring(val.length - 2)
    },
    // 添加好友
    addContact() {
      console.log(1)
      let message = `hi ${this.searchVal}, 加个好友呗!`
      WebIM.conn.addContact(this.searchVal, message);
    },
    // 好友列表选中
    treeClick(item) {
      this.active = item.username
    }
  },
}
</script>

<style lang="less" scoped>
.Link{
  flex: 1;
  display: flex;
  flex-direction: column;
  .jx-input{
    display: flex;
    align-items: center;
    // margin-left: 10px;
    background: #f4f4f4;
    input{
      height: 32px;
      padding: 0 12px;
      background: #f4f4f4;
      font-size: 12px;
      color: #999;
    }
    img{
      width: 18px;
      height: 18px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .header{
    width: 100%;
    text-align: right;
    padding-right: 20px;
    color: #747990;
    font-size: 14px;
  }
  .content{
    flex: 1;
    display: flex;
    overflow: hidden;
    .logo{
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #fff;
        background: #0dc1ff;
      }
    }
    .LEFT{
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 100%;
      background: #fbfbfb;
      ul{
        flex: 1;
        overflow-y: auto;
        li{
          display: flex;
          align-items: center;
          padding: 13px 15px;
          cursor: pointer;
        }
        li.active{
          background: #f4f4f4;
        }
        .user{
          margin-bottom: 3px;
          color: #787878;
          font-size: 14px;
        }
        .time{
          font-size: 12px;
          color: #cececf;
        }
      }
    }
    .RIGHT{
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      background: #f8f8f8;
      .listFoo{
        flex: 1;
        padding: 10px 20px;
        overflow-y: auto;
        .l,.r{
          display: flex;
          margin-top: 10px;
        }
        .r{
          flex-direction: row-reverse;
        }
        .r .logo{
          margin-right: 0;
          margin-left: 10px;
        }
        .c-r{
          max-width: 60%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .msg{
            line-height: 24px;
            padding: 10px 20px;
            font-size: 13px;
            color: #fff;
            background: #5b95ff;
            border-radius: 8px 0 8px 8px;
          }
        }
        .tim{
          color: #999;
          font-size: 12px;
          margin-bottom: 3px;
        }
        .r .tim{
          text-align: right;
        }
        .l .c-r{
          align-items: flex-start;
          .msg{
            color: #666;
            background: #f2f2f2;
            word-break: break-all;
            border-radius: 0 8px 8px 8px;
          }
        }
      }
      .footer{
        position: relative;
        height: 200px;
        padding: 10px 20px;
        background: #fff;
        textarea{
          width: 100%;
          height: 100%;
          resize: none;
          color: #b1b1b1;
        }
        .btn{
          position: absolute;
          right: 20px;
          bottom: 20px;
          width: 76px;
        }
      }
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
  }
}
</style>
