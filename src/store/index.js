import Vue from "vue"
import Vuex from "vuex"
import state     from './state'
import getters   from './getters'
import mutations from './mutations'
import actions   from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state,
  getters,
  mutations,
  actions
})

if(sessionStorage.key('access_token')) {
  
  // token redirect
  const tokenInfo = JSON.parse(sessionStorage.getItem('tokenInfo'))
  store.commit('LOGIN', tokenInfo)

  // userInfo redirect
  const user_id = tokenInfo.user_id;
  const headers = { "Authorization": tokenInfo.accessToken };
  store.dispatch('FETCH_USERINFO', {user_id, headers})

}

export default store