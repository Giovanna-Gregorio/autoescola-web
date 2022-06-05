<template>
  <v-container>
    <br /><br /><br /><br />
    <v-card class="mx-auto">
      <v-card-title>Cadastro de frota</v-card-title>

      <v-divider></v-divider>

      <v-card-text class="text--primary">
        <div>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="1">
                  <v-text-field
                    v-mask="'####'"
                    v-model.number="ano"
                    label="Ano"
                  />
                </v-col>
                 <v-col cols="12" md="3">
                  <v-select
                    v-model="selectMarca"
                    :items="itemsMarca"
                    item-text="significado"
                    item-value="id"
                    label="Marca"
                    required
                    no-data-text="Sem resultados"
                  ></v-select>
                </v-col>

               <v-col cols="12" md="3">
                  <v-text-field
                    v-model="modelo"
                    :rules="modeloRules"
                    label="Modelo"
                    required
                  ></v-text-field>
                </v-col>

                  <v-col cols="12" md="2">
                  <v-text-field
                    v-model="cor"
                    :rules="corRules"
                    label="Cor"
                    required
                  ></v-text-field>
                </v-col>

                   <v-col cols="12" md="3">
              <v-text-field v-model="observacao" label="Observação" />
            </v-col>
               
              </v-row>
             
            </v-container>

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
  name: "CadastroFrota",
  data: () => ({
    valid: false,
    invalid: false,

    ano: "",

    selectMarca: null,
    itemsMarca: [],

    modelo: "",
    modeloRules: [(v) => !!v || "Modelo do veículo é obrigatório"],

    cor: "",
    corRules: [(v) => !!v || "Cor é obrigatório"],

    observacao: "",
  }),
  created() {
    this.getMarcas();
  },
  methods: {
    getMarcas() {
      service
        .getAll("Marca", this.id)
        .then((response) => {
          this.itemsMarca = response.data.data;
        })
        .catch((e) => {
            console.log(e);
        })
    },
    salvar() {},
    voltar() {
      this.$router.push({ name: "frota" });
    },
  },
};
</script>

