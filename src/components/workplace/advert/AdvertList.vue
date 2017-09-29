<template>

  <v-list>
    <advert-item
            v-for="item in items"
            v-bind:item="item"
            v-bind:key="item.id"
    >
    </advert-item>
  </v-list>

</template>

<script>
  import ApiService from '@/services/ApiService';
  import AdvertItem from '@/components/workplace/advert/AdvertItem';

  export default {
    data () {
      return {
        items: ApiService.getAdvertList()
      };
    },
    components: {AdvertItem}
  };

</script>

<style scoped lang="scss">

  .list {
    max-height: calc(100vh - 112px);
    overflow: auto;
  }

</style>
