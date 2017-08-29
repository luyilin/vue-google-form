import axios from 'axios'
import store from '../store'

// 封装 ajax
const fetch = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 8000
})

// request 拦截器
fetch.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // config.headers['token'] = store.getters.token
    }
    return config
  },
  err => {
    console.log(err)
    Promise.reject(err)
  }
)

// response 拦截器
fetch.interceptors.response.use(
  response => {
    let data = response.data
    if (data.type || data.error_code) {
      Message({
        message: data.message || data.error_msg,
        type: 'error',
        duration: 4 * 1000
      })
      return Promise.reject(data.message || data.error_msg)
    }
    return response
  },
  err => {
    console.log('err: ' + err)
    Message({
      message: err.message,
      type: 'error',
      duration: 4 * 1000
    })
    return Promise.reject(err)
  }
)

export default fetch
