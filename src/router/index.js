import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(VueRouter)

// const goods = () => import('../components/goods/goods.vue')
// const ratings = () => import('../components/ratings/ratings.vue')
const routes = [
  {
    path: '/',
    component: goods
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]
export default new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})
