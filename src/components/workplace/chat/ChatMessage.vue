<template>

  <div v-bind:class="{ 'chat-message__is-mine': isMine}">
    <v-card>
      <div>
        {{ message.text }}
      </div>
      <div class="chat-message__date">
        {{ message.created | moment('DD.MM.YYYY') }}
      </div>
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
    }
  }

</script>

<style scoped lang="scss">

  .card {
    margin: 10px;
    display: inline-block;
    padding: 5px 8px;
    max-width: 70%;
    text-align: left;
    word-wrap: break-word;
    line-height: 18px;
  }

  .chat-message__is-mine {
    margin-left: auto;
    text-align: right;

    .card {
      background-color: #E3F2FD;
    }
  }

  .chat-message__date {
    text-align: right;
    font-size: 12px;
    color: #43a047;
  }

</style>
