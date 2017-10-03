<template>

  <div v-bind:class="{ 'chat-message__is-mine': isMine}">

    <v-layout class="chat-message__flex-container" v-bind:class="{ 'chat-message--right': isMine}">

      <v-avatar size="40px" v-if="!isMine">
        <img src="https://placeimg.com/40/40/people/2" alt="">
      </v-avatar>

      <v-card elevation-14>
        <div v-if="!isMine" class="chat-message__name">
          Иван Торгов
        </div>
        <div v-if="message.text" class="chat-message__text">
          {{ message.text }}
        </div>
        <div v-if="message.isPicture" class="chat-message__image-container">
          <img v-bind:src="message.fileData">
        </div>
        <div v-if="!message.isPicture && message.fileName" class="chat-message__filename">
          <i class="material-icons icon">attach_file</i>
          {{ message.fileName }}
        </div>
        <div class="chat-message__date">
          {{ message.created | moment('DD.MM.YYYY') }}
        </div>
      </v-card>

    </v-layout>

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
    padding: 5px 7px;
    max-width: 70%;
    text-align: left;
    word-wrap: break-word;
    line-height: 18px;
    background-color: #f1f1f1;
    box-shadow: none;
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
    font-size: 10px;
    color: #00838F;
    line-height: 10px;
    padding: 3px 0 0 0;
  }

  .chat-message__name {
    color: #43a047;
  }

  .chat-message__image-container {
    padding: 5px 3px;

    img {
      max-height: 150px;
      max-width: 100%;
    }
  }

  .chat-message__text {
    font-size:13px;
  }

  .avatar {
    margin: 10px 0 0 5px;
  }

  .chat-message--right {
    justify-content:flex-end !important;
  }

  .chat-message__flex-container {
    align-items: flex-start;
  }

</style>
