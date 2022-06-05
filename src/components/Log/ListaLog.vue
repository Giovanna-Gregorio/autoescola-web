<template>
  <v-container>
    <br /><br /><br /><br />
    <h3>Logs</h3>
    <v-data-table
      :headers="headers"
      :items="logs"
      :items-per-page="10"
      items-per-page-all-text="Itens por página"
      items-per-page-text="Itens por página"
      class="elevation-1"
      loading="true"
      loading-text="Carregando..."
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="abrirModal(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="text-h8 text-center">
          Log
        </v-card-title>

        <v-card-text>
          {{ this.dados }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import service from "./../../data-service";

export default {
  name: "ListaLog",
  data: () => ({
    headers: [
      { text: "Tipo", value: "tipo" },
      { text: "Usuário", value: "usuarioId", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "Data", value: "data", sortable: false },
      { text: "", value: "actions", sortable: false },
    ],
    logs: [],
    idDetalhe: null,
    dialog: false,
    dados: null
  }),
  created() {
    this.getLogs();
  },
  methods: {
    abrirModal(id) {
      this.dialog = true;
      this.idDetalhe = id;

      this.dados = this.logs.find(x => x.id == this.idDetalhe).dados;
    },
    getLogs() {
      service
        .getAll("Log")
        .then((response) => {
          this.logs = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>