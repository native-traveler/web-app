<template>

  <v-container fluid class="chat__container">

    <v-card class="chat__ribbon">
      <v-layout column>
        <v-flex class="chat__messages-container" ref="messages">
          <div>
            <chat-message
                    v-for="message in messages"
                    v-bind:message="message"
                    v-bind:key="message.id"
            ></chat-message>
          </div>
        </v-flex>


        <div class="chat__input-container">
          <div class="chat__input">
            <v-layout row class="chat__input-row">

              <div class="chat__attach-file">
                <attach></attach>
              </div>

              <div class="chat__input-area">
              <textarea type="text"
                        ref="input"
                        name="chat__input"
                        placeholder="Введите сообщение"
                        v-bind:rows="textareaRows"
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

      </v-layout>
    </v-card>

  </v-container>

</template>

<script>
  import ChatMessage from '../ChatMessage'
  import Attach from '../attach/Attach'

  export default {
    name: 'chat',
    data: function () {
      return {
        textareaRows: 1
      }
    },
    computed: {
      messages () {
        return this.$store.getters.messages
      },
      message: {
        get () {
          return this.$store.getters.message
        },
        set (value) {
          this.$store.commit('updateMessage', value)
          this.resizeInput()
        }
      }
    },
    methods: {
      resizeInput: function () {
        const lineBreaks = this.message.match(/\n/g)
        let linesToAdd = 0

        // Если есть новые строки
        if (!lineBreaks) {
          this.textareaRows = 1
        } else if (lineBreaks.length < 3) {
          // Увеличение textarea
          linesToAdd = lineBreaks.length
          this.textareaRows = 1 + linesToAdd
        }

        if (this.textareaRows > 1) {
          const $textarea = this.$refs.input
          $textarea.scrollTop = $textarea.scrollHeight
        }

        this.scrollMessageDown();
      },
      send: function () {
        if (this.$store.getters.message) {
          this.$store.commit('send')
        } else {
          this.$refs.input.focus()
        }
        this.resizeInput()
      },
      scrollMessageDown: function () {
        const $messages = this.$refs.messages
        $messages.scrollTop = $messages.scrollHeight
      },
      mounted: function () {
        this.$refs.input.scrollTop = this.$refs.input.scrollHeight
      }
    },
    updated: function () {
      this.$refs.input.focus()
    },
    components: {ChatMessage, Attach}
  }

</script>

<style scoped lang="scss" src="./style.scss"></style>