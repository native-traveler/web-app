import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '@/services/ApiService';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    constants: {
      ROUTE_LOGIN: 'login',
      ROUTE_REGISTRATION: 'registration',
      ROUTE_WORKPLACE: 'workplace'
    },
    messages: ApiService.getChatMessages(),
    message: null
  },
  getters: {
    messages (state) {
      return state.messages;
    },
    message (state) {
      return state.message;
    }
  },
  mutations: {
    send (state) {
      state.messages.push({
        id: 1,
        user_id: 1,
        text: state.message
      });
      state.message = '';
    },
    updateMessage (state, value) {
      state.message = value;
    }
  },
  actions: {}
});

export default store;
