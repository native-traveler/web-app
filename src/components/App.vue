<template>

  <v-app>

    <template v-if="showToolbar()">
      <v-toolbar class="primary">
        <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">{{ appTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <user-menu></user-menu>
      </v-toolbar>

      <v-navigation-drawer
              temporary
              v-model="drawer"
              overflow
              absolute
      >
        <settings></settings>
      </v-navigation-drawer>
    </template>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

  </v-app>

</template>

<script>
  import Settings from '@/components/Settings';
  import UserMenu from '@/components/UserMenu';
  import '@root/node_modules/vuetify/src/stylus/main.styl';
  import '@/styles/main.scss';

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
    components: {Settings, UserMenu}
  };
</script>

<style scoped lang="scss">

  .application--light {
    background-color: #fff;
    div {
      color: red;
    }
  }

  .container {
    padding: 0;
  }

  .application > main > .container {
    min-height: calc(100vh - 64px);
  }

</style>