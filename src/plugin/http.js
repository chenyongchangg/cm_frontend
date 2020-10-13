import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = function (Vue) {
  axios.defaults.baseURL = 'http://106.13.94.235:10001'
//   axios.defaults.baseURL = 'http://127.0.0.1:10001'
  Vue.prototype.$http = axios
}
export default MyHttpServer
