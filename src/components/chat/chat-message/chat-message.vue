<template>

  <div v-bind:class="{ 'chat-message__is-mine': isMine}">

    <v-layout class="chat-message__flex-container" v-bind:class="{ 'chat-message--right': isMine}">

      <v-avatar size="40px" v-if="!isMine">
        <img src="https://placeimg.com/40/40/people/2" alt="">
      </v-avatar>

      <div class="chat-message">
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
          <router-link to="/asdf">
            <div class="chat-message__link">{{ message.fileName }}</div>
          </router-link>
        </div>
        <div class="chat-message__date">
          {{ message.created | moment('DD.MM.YYYY') }}
        </div>
      </div>

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

<style scoped lang="scss" src="./style.scss"></style>