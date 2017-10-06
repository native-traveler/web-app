export default {
  name: 'chat-message',
  props: ['message'],
  data () {
    return {
      isMine: this.message.user_id === 1
    }
  }
}