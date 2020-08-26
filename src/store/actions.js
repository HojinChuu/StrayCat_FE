import * as api from '../api'

const actions = {

  // AUTH
  async REGISTER(_, register_info) {
    await api.auth.register(register_info)
  },
  async LOGIN({commit}, login_info) {
    const res = await api.auth.login(login_info)
    commit('LOGIN', res.data)
  },
  async LOGOUT({commit}, logout_info) {
    await api.auth.logout(logout_info)
    commit('LOGOUT')
  },
  async FETCH_USERINFO({commit}, token_info) {
    const res = await api.auth.getUserInfo(token_info)
    commit('FETCH_USERINFO', res.data)
  }
}
export default actions