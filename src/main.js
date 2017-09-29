import Vue from 'vue';
import router from '@/router';
import Vuetify from 'vuetify';
import store from '@/store';
import App from '@/components/App';

Vue.use(Vuetify);
Vue.config.productionTip = true;

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App},
  router
});
