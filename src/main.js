// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import router from './router/index.js'
// import goods from './components/goods/goods'
import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// let app = Vue.extend(App)
// let router = new VueRouter()
// router.map({
// '/goods': {
// components: goods
// }
// })
// router.start(app, '#app')
