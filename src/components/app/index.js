import Vue from 'vue';
import settings from '@/components/settings';
import userMenu from '@/components/user-menu';
import ribbon from '@/components/app/chat/ribbon/ribbon';
import chatMessage from '@/components/app/chat/chat-message/chat-message';
import attach from '@/components/app/chat/attach/attach';
import chat from '@/components/app/chat/chat';

Vue.component('chat', chat);
Vue.component('ribbon', ribbon);
Vue.component('settings', settings);
Vue.component('userMenu', userMenu);
Vue.component('chatMessage', chatMessage);
Vue.component('attach', attach);

export default {
  data () {
    return {
      drawer: false,
      appTitle: 'Native'
    };
  }
};
