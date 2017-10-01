<template>

  <v-app>

    <v-layout column>
      <template v-if="showToolbar()">
        <v-toolbar
                class="primary"
                dark
        >
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

      <v-container fluid class="main-container flex">
        <router-view></router-view>
      </v-container>

    </v-layout>

  </v-app>

</template>

<script>
  import Settings from '@/components/Settings'
  import UserMenu from '@/components/UserMenu'
  import '@root/node_modules/vuetify/src/stylus/main.styl'
  import '@/styles/main.scss'

  export default {
    data () {
      return {
        toolbar: true,
        test: 1,
        drawer: false,
        appTitle: 'Native',
        tabs: {advertTitle: 'Предложения', chatTitle: 'Чат'}
      }
    },
    methods: {
      showToolbar: function () {
        let routesWithoutToolbar = [
          this.$store.state.constants.ROUTE_LOGIN,
          this.$store.state.constants.ROUTE_REGISTRATION
        ]
        return !routesWithoutToolbar.includes(this.$route.name)
      }
    },
    components: {Settings, UserMenu}
  }
</script>

<style scoped lang="scss">

  .application {
    min-height:100%;
  }

  .application--light {
    div {
      color: red;
    }
  }

  .container {
    padding: 0;
  }

  .application, main, .container, .layout {
    height: 100% !important;
  }

  .main-container {
    height: calc(100% - 64px) !important;
  }

  .toolbar {
    z-index:1;
  }

</style>