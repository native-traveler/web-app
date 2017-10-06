export default {
  name: 'chat',
  data: function () {
    return {
      textareaRows: 1
    };
  },
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
      const lineBreaks = this.message.match(/\n/g);
      let linesToAdd = 0;

      // Если есть новые строки
      if (!lineBreaks) {
        this.textareaRows = 1;
      } else if (lineBreaks.length < 3) {
        // Увеличение textarea
        linesToAdd = lineBreaks.length;
        this.textareaRows = 1 + linesToAdd;
        this.scrollMessageDown();
      }

      if (this.textareaRows > 1) {
        const $textarea = this.$refs.input;
        $textarea.scrollTop = $textarea.scrollHeight;
      }
    },
    send: function () {
      if (this.$store.getters.message) {
        this.$store.commit('send');
      } else {
        this.$refs.input.focus();
      }
      this.resizeInput();
    },
    scrollMessageDown: function () {
      const $messages = this.$refs.messages;
      $messages.scrollTop = $messages.scrollHeight;
    }
  },
  updated: function () {
    this.$refs.input.focus();
    this.scrollMessageDown();
  },
  mounted: function () {
    this.scrollMessageDown();
  }
};
