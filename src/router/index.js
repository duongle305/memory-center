import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home'
import Login from "@/components/pages/login/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
