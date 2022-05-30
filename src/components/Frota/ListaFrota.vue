<template>
  <v-container>
    <br /><br /><br /><br />
    <h3>Lista de Veículos</h3>
    <v-divider></v-divider>
    <br />
    <v-btn depressed color="#172257" @click="novo()"> Novo </v-btn>
    <br /><br />
    <v-data-table
      :headers="headers"
      :items="frota"
      :items-per-page="10"
      items-per-page-all-text="Itens por página"
      items-per-page-text="Itens por página"
      class="elevation-1"
      loading="true"
      loading-text="Carregando..."
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editar(item.id)">mdi-pencil</v-icon>
        <v-icon small @click="excluir(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="text-h8 text-center">
          Deseja realmente excluir o veículo selecionadao?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialog = false"> Não </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "ListaFrota",
  data: () => ({
    headers: [
      { text: "Ano", value: "ano" },
      { text: "Marca", value: "marca", sortable: false },
      { text: "Modelo", value: "modelo", sortable: false },
      { text: "Cor", value: "cor", sortable: false },
      { text: "Observação", value: "observacao", sortable: false },
      { text: "", value: "actions", sortable: false },
    ],
    frota: [],
    dialog: false,
  }),
  created() {
    this.getFrota();
  },
  /*/methods: {
    getFrota() {
      service
        .getAll("frota")
        .then((response) => {
          this.frota = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },/*/
    editar() {
      //id
    },
    excluir(id) {
      this.dialog = true;
      console.log(id);
    },
    novo() {
      this.$router.push({ name: "CadastroFrota" });
    },
  }

</script>


