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
          <input
                  type="file"
                  ref="fileInput"
                  @change="onFileChange"
                  hidden
          >
          <v-btn
                  primary
                  @click.native="onClick"
          >
            Выберите файл
          </v-btn>

          <div class="attach__filename">{{ filename }}</div>

          <div class="attach_preview">
            <img
                    v-if="imagePreviewData"
                    v-bind:src="imagePreviewData"
            >
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Закрыть</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click.native="apply">Добавить файл</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
  export default {
    name: 'attach',
    data () {
      return {
        filename: '',
        dialog: false,
        imagePreviewData: null
      };
    },
    methods: {
      apply () {
        this.dialog = false;
      },
      onClick () {
        if (!this.disabled) {
          this.$refs.fileInput.click();
        }
      },
      onFileChange ($event) {
        const files = $event.target.files || $event.dataTransfer.files;
//        const form = this.getFormData(files);
        if (files) {
          if (files.length > 0) {
            this.filename = [...files].map(file => file.name).join(', ');
            this.showPicture(files[0]);
          } else {
            this.filename = null;
          }
        } else {
          this.filename = $event.target.value.split('\\').pop();
        }
      },
      showPicture (file) {
        let reader = new FileReader();

        reader.addEventListener('load', () => {
          this.imagePreviewData = reader.result;
        });
//        reader.addEventListener('error', () => {
//        }, false);
//
        reader.readAsDataURL(file);
      }
    }
  };

</script>

<style scoped lang="scss" src="./style.scss"></style>