import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



//normalize
import '../node_modules/normalize.css/normalize.css'

//element UI
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../src/green/theme/index.css'
Vue.use(ElementUI)

//自动滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll);

//手动滚动
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)

//处理时间
import moment from 'moment'
Vue.prototype.moment = moment


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
