import VueRouter from "vue-router";
import Login from "../views/Login";
//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    // {
    //   path: '/person',
    //   component: Person
    // }
  ]
})