<template>

  <v-list-tile avatar v-bind:key="item.title" @click="" download>
    <v-list-tile-avatar>
      <img v-bind:src="item.avatar">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="item.title"></v-list-tile-title>
      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>

</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>

</style>
