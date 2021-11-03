import VueRouter from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";
import Demo from '../views/Demo'
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
    }
    // {
    //   path: '/person',
    //   component: Person
    // }
  ]
})