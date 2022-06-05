<template>
  <v-container>
    <br /><br /><br /><br />
    <v-card class="mx-auto">
      <v-card-title>Edição de aluno</v-card-title>

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
import service from "./../../data-service"

export default {
  name: "EdicaoAluno",
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
  
  created() {
      this.id = this.$route.params.id;
      this.getAluno();
  },
  getAluno() {
        service
            .get("Aluno", this.id)
            .then((response) => {
                var data = response.data.data[0];
                this.nome = data.nome;
                this.cpf = data.cpf;
                this.rg = data.rg;
                this.selectsexo= data.sexoId;
                this.nascimento = data.nascimento;
                this.email = data.email;
                this.profissao = data.profissao;
                this.nomemae = data.nomemae;
                this.nomepai = data.nomepai;
                this.selectCategoria = data.categoriaId;
                this.cep = data.cep;
                this.endereco = data.endereco;
                this.numero = data.numero;
                this.bairro = data.bairro;
                this.cidade = data.cidade;
                this.estado = data.estado;





            })
            .catch((e) => {
                console.log(e);
            })
    },
    salvar() {},
    voltar() {
      this.$router.push({ name: "alunos" });
    },

};
</script>

