import Vue from 'vue';
import router from '@/router';
import Vuetify from 'vuetify';
import store from '@/store';
import App from '@/components/App';
import Axios from 'axios';

Vue.use(Vuetify);
Vue.use(require('vue-moment'));
Vue.config.productionTip = true;
Vue.prototype.$axios = Axios;

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App},
  router
});
