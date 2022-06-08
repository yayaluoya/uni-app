import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView);

//uview配置
uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    //
  },
})

const app = new Vue({
  ...App
})
app.$mount()

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif