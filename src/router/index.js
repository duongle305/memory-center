import Vue from 'vue'
import Helpers from '@/helpers/helpers';
import Router from 'vue-router';
import Home from '@/components/pages/home/Home'
import Login from "@/components/pages/login/Login";
import Register from "@/components/pages/register/Register";
import Customer from "@/components/pages/customer/Customer";
import Category from "@/components/pages/category/Category";
import Product from "@/components/pages/product/Product";
import Search from "@/components/pages/search/Search";

Vue.use(Router);

const router =  new Router({
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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/customer',
      name:'Customer',
      component:Customer,
    },
    {
      path:'/category/:slug',
      name:'Category',
      component: Category,
    },
    {
      path:'/product/:slug.:id',
      name:'Product',
      component: Product,
    },
    {
      path:'/search/q=:q',
      name:'Search',
      component: Search,
    },
    { path: '*', redirect: '/' }
  ],
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  Helpers.showLoading();
  const privatePages = ['/customer',];
  const authRequired = privatePages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  const path = ['/login','/register'];
  const auth = path.includes(to.path);
  if(auth && loggedIn){
    next('/');
  }
  next();
});
router.afterEach((to, from, next)=>{
  // Helpers.closeLoading();
});
export default router;
