import Vue from 'vue';
import Router from 'vue-router';
import chat from '@/components/chat/chat';
import login from '@/components/login/login';
import registration from '@/components/registration/registration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: chat
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    }
  ]
})
