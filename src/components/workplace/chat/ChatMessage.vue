<template>

  <div v-bind:class="{ 'is-mine': isMine}">
    <v-card v-bind:class="{'light-blue lighten-4': isMine }">
        {{ message.text }}
    </v-card>
  </div>

</template>

<script>
  export default {
    name: 'chat-message',
    props: ['message'],
    data () {
      return {
        isMine: this.message.user_id === 1
      };
    },
    mounted: function () {
      this.$parent.scrollMessageDown();
    }
  }

</script>

<style scoped>

  .card {
    margin: 10px;
    display: inline-block;
    padding: 10px;
    max-width: 70%;
    text-align: left;
  }

  .is-mine {
    margin-left: auto;
    text-align: right;
  }

</style>
