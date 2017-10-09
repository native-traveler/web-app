import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app/app';
import login from '@/components/login/login';
import entrance from '@/components/entrance/entrance';
import registration from '@/components/registration/registration';
import notFound from '@/components/not-found/not-found';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root'
    },
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
    },
    {
      path: '*',
      name: 'not-found',
      component: notFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  let isGuest = true;

  if (to.name === 'root' && isGuest) {
    next({
      path: '/entrance',
      replace: true
    });
  } else if (to.name === 'root' && !isGuest) {
    next({
      path: '/app',
      replace: true
    });
  } else {
    next();
  }
});

export default router;
