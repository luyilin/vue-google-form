// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './styles/index.css'
import plugins from './plugin/index'
import { Button, Select, Dialog, Option, Switch, Tabs, TabPane, Message, MessageBox } from 'element-ui'
import iconfont from './assets/iconfont/iconfont.js'

Vue.use(plugins)

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(TabPane)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(iconfont)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
