// 插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

  // 4. 添加实例方法
  Vue.prototype.$http = axios
}
// 导出插件
export default MyHttpServer
