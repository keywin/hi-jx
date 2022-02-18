<template>
  <div class="hello">
    <div class="login">
      <div>账号: <input type="text" v-model="username"></div>
      <div>密码: <input type="text" v-model="pwd"><button @click="login()">登录</button></div>
    </div>
    <div class="listFoo">
      <div class="list" v-for="(item, i) in msgList" :key="i">
        <div class="l" v-if="item.from !== username">
          <div class="logo">{{ item.from }}</div>
          <div class="c-r">
            <div class="tim">{{ new Date(item.time - 0) }}</div>
            <div class="msg">{{ item.msg }}</div>
          </div>
        </div>
        <div class="r" v-if="item.from === username">
          <div class="logo">{{ item.from }}</div>
          <div class="c-r">
            <div class="tim">{{ new Date(item.time - 0) }}</div>
            <div class="msg">{{ item.msg }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>内容: <input type="text" v-model="msgContent" placeholder=""></div>
    <div>发送给: <input type="text" v-model="toID" placeholder=""><button @click="send()">发送</button></div>
    
  </div>
</template>

<script>
import WebIM from "@/utils/initWeb"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    msgList () {
      return this.$store.state.auth.msgList
    }
  },
  data() {
    return {
      username: 'liujiaxin',
      pwd: '111111',
      msgContent: '',
      toID: 'liukaiwen'
    }
  },
  methods: {
    login() {
      let options = {
          apiUrl: WebIM.config.apiURL,
          user: this.username,
          pwd: this.pwd,
          appKey: WebIM.config.appkey
      };
      WebIM.conn.open(options);
    },
    send() {
      var id = WebIM.conn.getUniqueId();
      var msg = new WebIM.message('txt', id);

      // let _this = this

      msg.set({
        msg: this.msgContent,
        to: this.toID,
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

      console.log(msg)

      this.$store.commit('SET_MSGLIST', {
        chatType: msg.body.chatType,
        type: msg.body.type,
        mid: msg.body.id, // 消息id
        msg: msg.body.msg, // 消息文本
        time: msg.body.time, // 发送时间
        from: this.username, // 发送人id
        to: msg.body.to, // 接受者id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listFoo{
  width: 800px;
  height: 500px;
  border: 1px solid #adadad;
  margin: 0 auto;
}
.l,.r{
  display: flex;
  margin-top: 10px;
}
.l .logo,.r .logo{
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 0 5px;
  border: 1px solid #000;
}
.r{
  flex-direction: row-reverse;
}
.c-r{
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  word-break: break-all;
  align-items: flex-start;
}
</style>
