import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ],
  //возврат скрола назад, к началу, при обновлении страницы
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
