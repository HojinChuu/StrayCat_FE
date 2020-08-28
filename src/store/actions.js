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
  },

  // Community
  async CREATE_POST(_, post_info) {
    return await api.community.create(post_info)
  },
  async FETCH_POSTS({commit}) {
    const res = await api.community.getPosts()
    commit('FETCH_POSTS', res.data)
  },
  async FETCH_POST(_, post_id) {
    return await api.community.getPost(post_id)
  },
  async REMOVE_POST(_, post) {
    return await api.community.removePost(post)
  },
  async UPDATE_POST(_, post_info) {
    return await api.community.update(post_info)
  }
}

export default actions