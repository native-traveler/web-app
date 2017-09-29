<template>

  <v-tabs centered>

    <v-tabs-bar class="green lighten-4">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item :href="'#tab-advert'">
        {{ tabs.advertTitle }}
      </v-tabs-item>
      <v-tabs-item :href="'#tab-chat'">
        {{ tabs.chatTitle }}
      </v-tabs-item>
    </v-tabs-bar>

    <v-tabs-items>
      <v-tabs-content :id="'tab-advert'">
        <v-card flat>
          <v-card-text>
            <advert-list></advert-list>
          </v-card-text>
        </v-card>
      </v-tabs-content>
      <v-tabs-content :id="'tab-chat'">
        <v-card flat>
          <v-card-text>
            <chat></chat>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>

  </v-tabs>

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