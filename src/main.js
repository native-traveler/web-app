import Vue from 'vue';
import router from '@/router';
import Vuetify from 'vuetify';
import store from '@/store';
import Axios from 'axios';

Vue.use(Vuetify);
Vue.use(require('vue-moment'));
Vue.config.productionTip = true;
Vue.prototype.$axios = Axios;

router.store = store;

new Vue({
  el: '#app',
  store,
  template: '<router-view></router-view>',
  router
});
