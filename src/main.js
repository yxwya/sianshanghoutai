// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入自定义全局组件组件
import Mybread from '@/components/cuscom/mybread.vue'
// 引入Elementui插件样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义样式
import '@/assets/css/reset.css'
import router from './router'
// 使用axios
// import axios from 'axios'
// Vue.prototype.$http=axios
import MyserverHttp from '@/plugins/http.js'
// 使用插件
Vue.use(MyserverHttp)
Vue.use(ElementUI)


Vue.config.productionTip = false
// 全局自定义组件
Vue.component('my-bread', Mybread)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载路由
  router,
  // MyserverHttp,
  // render:(h)=>h(app)可代替下面两行代码
  components: {
    App,

  },
  template: '<App/>'
})
