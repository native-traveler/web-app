<template>

  <v-container fluid class="chat__container">

    <v-card class="chat__ribbon">
      <div class="chat__messages-container" ref="messages">
        <div class="chat__messages">
          <chat-message
                  v-for="message in messages"
                  v-bind:message="message"
          ></chat-message>
        </div>
      </div>


      <div class="chat__input-row">
        <div class="chat__input">
          <v-layout row>

            <div class="chat__attach-file">
              <v-btn icon class="black--text text--lighten-2">
                <v-icon>attach_file</v-icon>
              </v-btn>
            </div>

            <div class="chat__input-area">
              <textarea type="text"
                        ref="input"
                        name="chat__input"
                        placeholder="Введите сообщение"
                        multi-line
                        rows="1"
                        v-model="message"
              ></textarea>
            </div>

            <div class="chat__send">
              <v-btn icon class="black--text text--lighten-2" @click="send()">
                <v-icon>send</v-icon>
              </v-btn>
            </div>

          </v-layout>
        </div>
      </div>

    </v-card>

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
          this.resizeInput();
        }
      }
    },
    methods: {
      resizeInput: function () {
        this.$refs.input.setAttribute('rows', 3);
      },
      send: function () {
        if (this.$store.getters.message) {
          this.$store.commit('send');
        } else {
          this.$refs.input.focus();
        }
      },
      scrollMessageDown: function () {
        let $messages = this.$refs.messages;
        $messages.scrollTop = $messages.scrollHeight;
      }
    },
    updated: function () {
      this.$refs.input.focus();
    },
    components: {ChatMessage}
  };

</script>

<style scoped lang="scss">

  .chat__container {
    margin: 64px 0 0 0;
    height: calc(100vh - 64px);
    background: #b3e5fc url('/static/images/bg.png') repeat 0 0;
    position: relative;
  }

  .chat__input-row {
    width: 100%;
    padding: 10px 0 8px 0;
    flex-direction: row;
    border-top: 2px solid #311b92;
    background-color: #c4bbec;
  }

  .chat__input-area {
    width: 100%;

    /deep/ textarea {
      line-height: 18px;
      background-color: #fff;
      width: 100%;
      padding: 10px 5px;
      resize: none;
    }
  }

  .chat__ribbon {
    width: 100%;
    bottom: 100px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }

  .chat__messages-container {
    max-height: calc(100vh - 64px);
    padding: 0 15px;
    overflow: auto;
  }

  .chat__messages {
  }

</style>
