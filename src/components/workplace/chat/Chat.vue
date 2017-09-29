<template>

  <v-container fluid>
    <v-layout column class="chat__main-layout">

      <div class="chat__messages" ref="messages">
        <chat-message
                v-for="message in messages"
                v-bind:message="message"
                v-bind:key="message.id"
        ></chat-message>
      </div>

      <div class="chat__input elevation-8">
        <v-layout row>

          <div class="chat__attach-file">
            <v-btn icon class="black--text text--lighten-2">
              <v-icon>attach_file</v-icon>
            </v-btn>
          </div>

          <div class="chat__input-area">
            <v-text-field
                    ref="input"
                    name="chat__input"
                    placeholder="Введите сообщение"
                    multi-line
                    rows="2"
                    v-model="message"
            ></v-text-field>
          </div>

          <div class="chat__send">
            <v-btn icon class="black--text text--lighten-2" @click="send()">
              <v-icon>send</v-icon>
            </v-btn>
          </div>

        </v-layout>
      </div>

    </v-layout>
  </v-container>

</template>

<script>
  import ChatMessage from './ChatMessage';

  export default {
    name: 'chat',
    computed: {
      messages () {
        return this.$store.getters.messages;
      },
      message: {
        get () {
          return this.$store.getters.message;
        },
        set (value) {
          this.$store.commit('updateMessage', value);
        }
      }
    },
    methods: {
      send: function () {
        if (this.$store.getters.message) {
          this.$store.commit('send');
        } else {
          this.$refs.input.$refs.input.focus();
        }
      },
      scrollMessageDown: function () {
        let $messages = this.$refs.messages;
        $messages.scrollTop = $messages.scrollHeight;
      }
    },
    updated: function () {
      this.$refs.input.$refs.input.focus();
    },
    components: {ChatMessage}
  };

</script>

<style scoped>

  .container {
    padding: 0;
  }

  .chat__main-layout {
    height: calc(100vh - 114px);
    max-width: 900px;
    margin: 0 auto;
  }

  .chat__messages {
    height: calc(100vh - 211px);
    overflow: auto;
  }

  .chat__input-area {
    width: 100%;
  }

  .chat__input {
    position: absolute;
    bottom: 0;
    z-index: 4;
    background-color: #fff;
    width: 100%;
    max-width: 900px;
  }

</style>
