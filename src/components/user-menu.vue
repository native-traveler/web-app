<template>

  <v-menu offset-x>
    <v-btn icon slot="activator" dark>
      <v-avatar size="36px">
        <img src="https://placeimg.com/40/40/people/2" alt="">
      </v-avatar>
    </v-btn>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.link)">
        <v-list-tile-title>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>

</template>

<script>
  export default {
    data: function () {
      return {
        items: [
          {
            title: 'Вход',
            link: '/login'
          },
          {
            title: 'Выход',
            link: '/login'
          }
        ]
      };
    }
  }

</script>
