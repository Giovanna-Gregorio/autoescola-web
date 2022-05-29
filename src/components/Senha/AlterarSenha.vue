<template>
  <v-container>
    <br /><br /><br /><br />
    <v-card class="mx-auto">
      <v-card-title>Alterar a senha</v-card-title>

      <v-divider></v-divider>

      <v-card-text class="text--primary">
        <div>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    outline
                    hide-details
                    label="Senha atual"
                    type="password"
                    v-model="senhaAtual"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    outline
                    hide-details
                    label="Nova senha"
                    type="password"
                    v-model="novaSenha"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    outline
                    hide-details
                    label="Confirme a nova senha"
                    type="password"
                    v-model="confirmaNovaSenha"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <br />

            <v-row justify="end">
              <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                @click="voltar()"
              >
                Voltar
              </v-btn>
              <v-btn
                class="mr-4"
                color="#172257"
                type="submit"
                :disabled="invalid"
                @click="salvar()"
              >
                Salvar
              </v-btn>
            </v-row>
            <br />
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AlterarSenha",
  data: () => ({
    senhaAtual: null,
    novaSenha: null,
    confirmaNovaSenha: null,
  }),
  methods: {
    voltar() {
      this.$router.push({ name: "myhome" });
    },
  },
};
</script>
