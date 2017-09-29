import Vue from 'vue';
import Router from 'vue-router';
import Workplace from '@/components/workplace/Workplace';
import Login from '@/components/Login';
import Registration from '@/components/Registration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workplace',
      component: Workplace
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
})
