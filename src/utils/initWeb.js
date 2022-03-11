import config from "./WebIMConfig";
import websdk from "easemob-websdk";

import store from '@/store/index.js'

// 初始化IM SDK
var WebIM = {};
WebIM = window.WebIM = websdk;

//初始化IM SDK
WebIM.config = config;
WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    host: WebIM.config.Host,
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: false,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery
})


//实时获取时间
var newDate;
window.onload = function () {
    setInterval(function () {
        var time = new Date();   // 程序计时的月从0开始取值后+1   
        var m = time.getMonth() + 1;
        var t = time.getFullYear() + "-" + m + "-"
            + time.getDate() + " " + time.getHours() + ":"
            + time.getMinutes() + ":" + time.getSeconds();
        newDate = t;
    }, 1000);
};

//注册IM 回调
WebIM.conn.listen({
    // 连接成功回调
    onOpened: function (message) {
        console.log("%c [opened] 连接已成功建立", "color: green", newDate, message);
        store.commit('SET_ISSUCCESS_LOGIN', true)
        // 获取好友关系
        WebIM.conn.getRoster().then((res) => {
            WebIM.conn.fetchUserInfoById(res.data).then((res2) => {
                console.log(res2)
                let friendList = Object.keys(res2.data).map(item => {
                    return {
                        ...res2.data[item],
                        username: item
                    }
                })
                store.commit('SET_FRIENDLIST', friendList)
            })
        });
    },
    // 收到文本消息
    onTextMessage: function (message) {
        store.commit('SET_MSGLIST', {
            chatType: message.type,
            type: message.contentsType,
            mid: message.id, // 消息id
            msg: message.data, // 消息文本
            time: message.time, // 发送时间
            from: message.from, // 发送人id
            to: message.to, // 接受者id
        })
        setTimeout(() => {
            // 控制滚动条到最底部
            var listFoo = document.getElementsByClassName('listFoo')[0];
            listFoo.scrollTop = listFoo.scrollHeight;
        }, 300)
    },
    onContactInvited: function (message) {
        WebIM.conn.acceptInvitation(message.from)
    }
});

export default WebIM;