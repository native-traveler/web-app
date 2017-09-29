<template>

    <div>
      <v-flex class="login__ribbon blue"></v-flex>
      <v-card class="login__card">
        <v-card-title primary-title>
          <h3 class="headline mb-0">Регистрация</h3>
          <v-container fluid>
            <v-layout column>
              <v-flex>
                <v-text-field
                        name="input-1"
                        :label="loginLabel"
                        v-model="login"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                        name="input-1"
                        v-model="password"
                        :label="passwordLabel"
                        type="password"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <router-link to="/login">Войти</router-link>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-card-actions>
          <v-btn class="green white--text" @click="$router.push('/')">ЗАРЕГИСТРИРОВАТЬСЯ</v-btn>
        </v-card-actions>
      </v-card>
    </div>

</template>

<script>
  export default {
    name: 'registration',
    data: function () {
      return {
        login: '',
        password: '',
        passwordLabel: 'Пароль',
        loginLabel: 'Почта или телефон'
      };
    }
  }
</script>

<style scoped lang="scss">
  .login__ribbon {
    height: 180px;
    width: 100%;
  }

  .login__card {
    min-width: 250px;
    max-width: 300px;
    width: 80%;
    margin: -100px auto 0 auto;
  }

  .container {
    padding: 15px 0 0 0;
  }
</style>
