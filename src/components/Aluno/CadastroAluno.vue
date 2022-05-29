<template>
  <v-container>
    <br /><br /><br /><br />
    <v-card class="mx-auto">
      <v-card-title>Cadastro de aluno</v-card-title>

      <v-divider></v-divider>

      <v-card-text class="text--primary">
        <div>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="nome"
                    :rules="nomeRules"
                    label="Nome"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-mask="'###.###.###-##'"
                    return-masked-value
                    v-model="cpf"
                    :rules="cpfRules"
                    label="CPF"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-mask="'##.###.###-##'"
                    return-masked-value
                    v-model="rg"
                    :rules="rgRules"
                    label="RG"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    v-model="selectSexo"
                    :items="itemsSexo"
                    item-text="significado"
                    item-value="id"
                    label="Sexo"
                    required
                    no-data-text="Sem resultados"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-mask="'##/##/####'"
                    v-model.number="nascimento"
                    label="Nascimento"
                  />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-mask="'(##) #####-####'"
                    v-model.number="celular"
                    label="Celular"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="profissao"
                    label="Profissão"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="nomemae"
                    :rules="nomemaeRules"
                    label="Nome da mãe"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="nomepai"
                    :rules="nomepaiRules"
                    label="Nome do pai"
                    required
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" md="3">
                  <v-select
                    v-model="selectCategoria"
                    :items="itemsCategoria"
                    item-text="significado"
                    item-value="id"
                    label="Categoria"
                    required
                    no-data-text="Sem resultados"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="12">
                  <v-divider></v-divider>
                  <br />
                  <h4>Endereço</h4>
                </v-col>
              </v-row>
          </v-container>
          <v-row>
                

            <v-col cols="12" md="2">
              <v-text-field
                v-mask="'##.###-###'"
                v-model.number="cep"
                label="CEP"
              />
            </v-col>

            <v-col cols="12" md="5">
              <v-text-field v-model="endereco" label="Endereço" />
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field v-model="numero" label="Número" />
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field v-model="bairro" label="Bairro" />
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field v-model="cidade" label="Cidade" />
            </v-col>

            <v-col cols="12" md="2">
              <v-text-field
                v-model.number="estado"
                label="Estado"
                :maxlength="2"
                :minlength="2"
              />
            </v-col>
          </v-row>
            <v-row>
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
  name: "CadastroAluno",
  data: () => ({
    valid: false,
    invalid: false,
    nome: "",
    nomeRules: [(v) => !!v || "Nome é obrigatório"],

    cpf: "",
    cpfRules: [(v) => !!v || "CPF é obrigatório"],

    rg: "",
    rgRules: [(v) => !!v || "RG é obrigatório"],

    selectSexo: null,
    itemsSexo: [],

    nascimento: "",

    email: "",
    emailRules: [
      //v => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || "Email inválido",
    ],

    celular: "",

    profissao: "",

    nomemae: "",
    nomemaeRules: [(v) => !!v || "Nome da mãe é obrigatório"],

    nomepai: "",
    nomepaiRules: [(v) => !!v || "Nome do pai é obrigatório"],
    selectCategoria: null,
    itemsCategoria: [],

     cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  }),
  methods: {
    salvar() {},
    voltar() {
      this.$router.push({ name: "alunos" });
    },
  },
};
</script>

