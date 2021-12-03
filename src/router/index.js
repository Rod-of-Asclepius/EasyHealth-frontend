import VueRouter from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";
import Demo from '../views/Demo'
import UserHome from '../views/user/UserHome'
import AdminHome from '../views/admin/AdminHome'

import Main from "@/views/Main";
import Hospital from "@/views/Hospital";
import Outpatient from "@/views/Outpatient";
//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/demo',
      component: Demo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user/index',
      component: UserHome
    },
    {
      path: '/user/index',
      component: AdminHome
    },
    {
      path: '/',
      component: Login
    },
    {
      path:'/main',
      component:Main
    },
    {
      path:'/hospital',
      component:Hospital
    },
    {
      path:'/outpatient',
      component:Outpatient
    }
  ]
})