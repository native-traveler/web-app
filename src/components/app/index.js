import Settings from '@/components/settings';
import UserMenu from '@/components/user-menu';
import '@root/node_modules/vuetify/src/stylus/main.styl';
import '@/styles/main.scss';
import Ribbon from '@/components/app/chat/ribbon/ribbon';
import ChatMessage from '@/components/app/chat/chat-message';
import Attach from '@/components/app/chat/attach';

export default {
  data () {
    return {
      toolbar: true,
      test: 1,
      drawer: false,
      appTitle: 'Native',
      tabs: {advertTitle: 'Предложения', chatTitle: 'Чат'}
    };
  },
  methods: {
    showToolbar: function () {
      let routesWithoutToolbar = [
        this.$store.state.constants.ROUTE_LOGIN,
        this.$store.state.constants.ROUTE_REGISTRATION
      ];
      return !routesWithoutToolbar.includes(this.$route.name);
    }
  },
  components: {
    Ribbon,
    Settings,
    UserMenu,
    ChatMessage,
    Attach
  }
};
