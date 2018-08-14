import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import MyPage from '../components/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyPage',
      name: 'MyPage',
      component:  MyPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
