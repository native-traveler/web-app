<template>

  <div>
    <v-toolbar class="teal" dark>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
    <v-list two-line subheader>
      <v-subheader>Основные</v-subheader>
      <v-list-tile avatar ripple v-for="(item, index) in generalItems" v-bind:key="item.title" @click="$router.push(item.link)">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line subheader>
      <v-subheader>Уведомления</v-subheader>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="notifications"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Уведомления</v-list-tile-title>
          <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        generalItems: [
          {
            title: 'Ускорения1',
            subtitle: 'Параметры ускорений',
            link: '/action1'
          },
          {
            title: 'Ускорения',
            subtitle: 'Параметры ускорений',
            link: '/action2'
          },
          {
            title: 'Ускорения',
            subtitle: 'Параметры ускорений',
            link: '/action3'
          }
        ],
        notifications: false
      }
    },
    watch: {
      notifications: function (value) {
        alert(value);
      }
    }
  }

</script>