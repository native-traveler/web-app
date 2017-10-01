<template>

  <div>
    <v-dialog v-model="dialog" lazy absolute>
      <v-btn icon slot="activator" class="black--text text--lighten-2">
        <v-icon>attach_file</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <div class="headline">Выбор файла</div>
        </v-card-title>
        <v-card-text>
          <v-text-field prepend-icon="attach_file" single-line
                        v-model="filename" :label="label" :required="required"
                        @click.native="onFocus"
                        :disabled="disabled" ref="fileTextField"></v-text-field>
          <input type="file" :accept="accept" :multiple="false" :disabled="disabled"
                 ref="fileInput" @change="onFileChange">
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
  export default {
    name: 'attach',
    props: {
      value: {
        type: [Array, String]
      },
      accept: {
        type: String,
        default: '*'
      },
      label: {
        type: String,
        default: 'Please choose...'
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean, // not yet possible because of data
        default: false
      }
    },
    data () {
      return {
        filename: '',
        dialog: false
      }
    },
    watch: {
      value (v) {
        this.filename = v
      }
    },
    mounted () {
      this.filename = this.value
    },

    methods: {
      getFormData (files) {
        const data = new FormData();
        [...files].forEach(file => {
          data.append('data', file, file.name) // currently only one file at a time
        })
        return data
      },
      onFocus () {
        if (!this.disabled) {
          this.$refs.fileInput.click()
        }
      },
      onFileChange ($event) {
        const files = $event.target.files || $event.dataTransfer.files
        const form = this.getFormData(files)
        if (files) {
          if (files.length > 0) {
            this.filename = [...files].map(file => file.name).join(', ')
          } else {
            this.filename = null
          }
        } else {
          this.filename = $event.target.value.split('\\').pop()
        }
        this.$emit('input', this.filename)
        this.$emit('formData', form)
      }
    }
  }

</script>

<style scoped lang="scss" src="./style.scss"></style>