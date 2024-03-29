const state = {
  msgList: localStorage.getItem('msgList') ? JSON.parse(localStorage.getItem('msgList')) : [],
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
  friendList: localStorage.getItem('friendList') ? JSON.parse(localStorage.getItem('friendList')) : [],
  isShowLogin: false,
  isSuccessLogin: false, // 是否成功登录
  touchStatus: {}, // nav, drawer
}

const mutations = {
  SET_MSGLIST (state, msgObj) {
    state.msgList = [
      ...state.msgList,
      ...[msgObj]
    ]
    localStorage.setItem('msgList', JSON.stringify(state.msgList))
  },
  SET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
  },
  SET_FRIENDLIST (state, friendList) {
    state.friendList = [...friendList]
    localStorage.setItem('friendList', JSON.stringify(state.friendList))
  },
  SET_ISSHOW_LOGIN (state, isShowLogin) {
    state.isShowLogin = isShowLogin
  },
  SET_ISSUCCESS_LOGIN (state, isSuccessLogin) {
    state.isSuccessLogin = isSuccessLogin
  },
  SET_LOGINOUT () {
    this.commit('SET_MSGLIST', {})
    this.commit('SET_USERINFO', {})
    this.commit('SET_FRIENDLIST', [])
    this.commit('SET_ISSHOW_LOGIN', false)
    this.commit('isSuccessLogin', false)
    window.location.reload()
  },
  SET_TOUCHSTATUS (state, touchStatus) {
    state.touchStatus = {
      ...state.touchStatus,
      ...touchStatus
    }
  }
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
