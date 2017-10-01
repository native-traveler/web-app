<template>

  <ribbon></ribbon>

</template>

<script>
  import Ribbon from '@/components/workplace/chat/ribbon/Ribbon';

  export default {
    components: {Ribbon}
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