import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import Users from '@/components/users/users.vue'
import Right from '@/components/rights/right.vue'
import Role from '@/components/rights/role.vue'
import List from '../components/management/list.vue'
import parameters from '../components/management/parameters.vue'
import commodities from '../components/management/commodities.vue'
import order from '../components/order/order.vue'
import report from '../components/Report/report.vue'






Vue.use(Router)

export default new Router({
  routes: [{
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [{
        name: 'users',
        path: 'users',
        component: Users
      },
      {
        name:'rights',
        path:'rights',
        component:Right
      },
      {
        name:'role',
        path:'role',
        component:Role
      },
      {
        name:'list',
        path:'list',
        component:List
      },
      {
        name:'parameters',
        path:'parameters',
        component:parameters
      },
      {
        name:'commodities',
        path:'commodities',
        component:commodities
      },
      {
        name:'order',
        path:'order',
        component:order
      },
      {
        name:'report',
        path:'report',
        component:report
      },
     
    ]
    
    }
  ]
})
