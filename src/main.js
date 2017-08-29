// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.css'
import plugins from './plugin/index'
import { Button, Select, Dialog, Option, Switch, Tabs, TabPane, Message } from 'element-ui'

// Vue.use(ElementUI)
Vue.use(plugins)

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$message = Message

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
