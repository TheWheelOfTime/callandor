import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(Router);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/sobre-mi',
      name: 'about',
      component: () => import('./pages/About.vue')
    }
  ]
})

