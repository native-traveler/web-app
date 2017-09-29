<template>

  <chat></chat>

</template>

<script>
  import AdvertList from '@/components/workplace/advert/AdvertList';
  import Chat from '@/components/workplace/chat/Chat';

  export default {
    data () {
      return {
        tabs: {advertTitle: 'Предложения', chatTitle: 'Чат'}
      }
    },
    components: {AdvertList, Chat}
  }
</script>

<style scoped lang="scss">

  .card__text {
    padding: 0;
  }

  .tabs__li {
    /deep/ .tabs__item--active {
      font-weight: 700;
    }
  }

</style>