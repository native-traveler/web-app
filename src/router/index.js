import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app';
import login from '@/components/login';
import entrance from '@/components/entrance';
import registration from '@/components/registration';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/app',
      name: 'app',
      component: app
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
  // if (to.name !== 'login' && !router.store.getters.user) {
  //   next({
  //     path: '/login',
  //     replace: true
  //   });
  // } else {
  //   next();
  // }
});

export default router;
