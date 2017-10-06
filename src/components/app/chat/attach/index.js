import BaseHelper from '@/helpers/base-helper'

export default {
  name: 'attach',
  data () {
    return {
      fileName: '',
      dialog: false,
      isPicture: false,
      fileData: null
    }
  },
  methods: {
    apply () {
      const fileInfo = {
        isPicture: this.isPicture,
        fileName: this.fileName
      }

      if (this.isPicture) {
        fileInfo.fileData = this.fileData
      }

      this.$store.commit('attach', fileInfo)
      this.dialog = false
    },
    onClick () {
      this.$refs.fileInput.click()
    },
    onFileChange ($event) {
      const files = $event.target.files || $event.dataTransfer.files
      if (files) {
        if (files.length > 0) {
          this.fileName = [...files].map(file => file.name).join(', ')
          this.showPicture(files[0])
        } else {
          this.fileName = null
        }
      } else {
        this.fileName = $event.target.value.split('\\').pop()
      }
    },
    showPicture (file) {
      let reader = new FileReader()

      reader.addEventListener('load', () => {
        this.fileData = reader.result
        this.isPicture = BaseHelper.isPicture(reader.result)
      })
      reader.addEventListener('error', () => {
      }, false)

      reader.readAsDataURL(file)
    }
  },
  watch: {
    dialog: function (isOpening) {
      if (isOpening) {
        this.fileName = null
        this.fileData = null
        this.isPicture = false
      }
    }
  }
}
