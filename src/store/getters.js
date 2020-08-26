const getters = {
  accessToken(state) { 
    return state.tokenInfo.accessToken
  },
  userId(state) { 
    return state.tokenInfo.user_id
  },
  userInfo(state) {
    return state.userInfo
  }
}
  
export default getters