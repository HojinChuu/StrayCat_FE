import axios from 'axios'

const DOMAIN = 'http://localhost/straycat_server'
const UNAUTHORIZED = 401

const serverRequest = (method, url, data, headers) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    headers
  }).then(response => response.data)
}

export const auth = {
  register(register_info) {
    return serverRequest('post', '/users', register_info.data, register_info.headers)
  },
  login(login_info) {
    return serverRequest('post', '/sessions', login_info.data, login_info.headers)
  },
  logout(logout_info) {
    return serverRequest('delete', `/sessions/${logout_info.user_id}`, undefined, logout_info.headers)
  },
  getUserInfo(token_info) {
    return serverRequest('post', `/sessions/${token_info.user_id}`, undefined, token_info.headers)
  }
}