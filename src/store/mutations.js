const mutations = {

	// AUTH
	LOGIN(state, tokenInfo) {
		state.tokenInfo = tokenInfo
		sessionStorage.setItem("tokenInfo", JSON.stringify(tokenInfo))
  },
  LOGOUT(state) {
    state.tokenInfo = {}
    sessionStorage.removeItem("tokenInfo")
	},
  FETCH_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  
  // Community
  FETCH_POSTS(state, posts) {
    state.posts = posts
  }
}

export default mutations