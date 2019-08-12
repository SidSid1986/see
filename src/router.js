import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

import Table1Detail from './components/Table/Table1/Table1Detail.vue'
import Table2Detail from './components/Table/Table2/Table2Detail.vue'
import Table3Detail from './components/Table/Table3/Table3Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path:'/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/Table1Detail',
      name:'Table1Detail',
      component:Table1Detail
    },

    {
      path:'/Table2Detail',
      name:'Table2Detail',
      component:Table2Detail
    },

    {
      path:'/Table3Detail',
      name:'Table3Detail',
      component:Table3Detail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
