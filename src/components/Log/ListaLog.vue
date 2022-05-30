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
    </v-data-table>
  </v-container>
</template>

<script>
import service from "../../data-service";

export default {
  name: "ListaLog",
  data: () => ({
    headers: [
      { text: "Tipo", value: "" },
      { text: "Usuário", value: "", sortable: false },
      { text: "Dados", value: "", sortable: false },
      { text: "Status", value: "", sortable: false },
      { text: "Data", value: "", sortable: false },
    ],
    logs: []
  }),
  created() {
    this.getLogs();
  },
  methods: {
    getLogs() {
      service
        .getAll("log")
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