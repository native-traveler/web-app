<template>

  <div>
    <v-dialog v-model="dialog" lazy absolute>
      <v-btn icon slot="activator" class="black--text text--lighten-2">
        <v-icon>attach_file</v-icon>
      </v-btn>
      <v-card>
        <v-card-text>

          <input
                  type="file"
                  ref="fileInput"
                  @change="onFileChange"
                  hidden
          >

          <v-layout class="attach__button-attach">
            <v-btn
                    primary
                    @click.native="onClick"
            >
              Нажмите для выбора файла
            </v-btn>
          </v-layout>

          <div class="attach__filename">{{ fileName }}</div>

          <div class="attach_preview">
            <img
                    v-if="isImage"
                    v-bind:src="fileData"
            >
          </div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click.native="dialog = false">Закрыть</v-btn>
          <v-btn
                  primary
                  flat="flat"
                  @click.native="apply"
                  v-if="fileName"
          >
            Добавить файл
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
  import BaseHelper from '@/helpers/BaseHelper';

  export default {
    name: 'attach',
    data () {
      return {
        fileName: '',
        dialog: false,
        isImage: false,
        fileData: null
      };
    },
    methods: {
      apply () {
        debugger;
        const fileInfo = {
          isPicture: this.isPicture,
          fileName: this.fileName
        };

        if (this.isPicture) {
          fileInfo.fileData = this.fileData;
        }

        this.$store.commit('attach', fileInfo);
        this.dialog = false;
      },
      onClick () {
        this.$refs.fileInput.click();
      },
      onFileChange ($event) {
        const files = $event.target.files || $event.dataTransfer.files;
        if (files) {
          if (files.length > 0) {
            this.fileName = [...files].map(file => file.name).join(', ');
            this.showPicture(files[0]);
          } else {
            this.fileName = null;
          }
        } else {
          this.fileName = $event.target.value.split('\\').pop();
        }
      },
      showPicture (file) {
        let reader = new FileReader();

        reader.addEventListener('load', () => {
          this.fileData = reader.result;
          this.isImage = BaseHelper.isPicture(reader.result);
        });
        reader.addEventListener('error', () => {
        }, false);

        reader.readAsDataURL(file);
      }
    },
    watch: {
      dialog: function (isOpening) {
        if (isOpening) {
          this.fileName = null;
          this.fileData = null;
          this.isImage = false;
        }
      }
    }
  };

</script>

<style scoped lang="scss" src="./style.scss"></style>