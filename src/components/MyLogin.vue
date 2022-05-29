<template>
  <div id="app" >
    <v-app
      
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      
      id="inspire"
    >
      <v-container fill-height>
        <v-layout wrap align-center>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-divider></v-divider>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    outline
                    label="Usuário"
                    type="text"
                    v-model="usuario"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-lock"
                    outline
                    hide-details
                    label="Senha"
                    type="password"
                    v-model="senha"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn text @click="esqueciSenha()" color="#172257"> Esqueci a senha </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="#172257"
                  :large="$vuetify.breakpoint.smAndUp"
                  @click="login()"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data: () => ({
    darkTheme: true,
    platformName: "Autoescola",
    senha: null,
    usuario: null,
  }),
  methods: {
    login() {
      this.$router.push({ name: "home" });
    },
    esqueciSenha() {
      this.$router.push({ name: "recuperarSenha" });
    },
  },
};
</script>