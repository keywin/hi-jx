const state = {
  msgList: localStorage.getItem('msgList') ? JSON.parse(localStorage.getItem('msgList')) : [],
}

const mutations = {
  SET_MSGLIST (state, msgObj) {
    state.msgList = [
      ...state.msgList,
      ...[msgObj]
    ]
    localStorage.setItem('msgList', JSON.stringify(state.msgList))
  },
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
