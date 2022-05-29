<template>
  <v-container>
    <br /><br /><br /><br />
    <h3>Lista de Alunos</h3>
    <v-divider></v-divider>
    <br />
    <v-btn depressed color="warning" @click="novo()"> Novo </v-btn>
    <br /><br />
    <v-data-table
      :headers="headers"
      :items="alunos"
      :items-per-page="10"
      items-per-page-all-text="Itens por página"
      items-per-page-text="Itens por página"
      class="elevation-1"
      loading="true"
      loading-text="Carregando..."
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editar(item.id)">mdi-pencil</v-icon>
        <v-icon small @click="abrirModal(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="text-h8 text-center">
          Deseja realmente excluir o aluno selecionado?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialog = false"> Não </v-btn>

          <v-btn color="green darken-1" text @click="excluir()"> Sim </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<!--
<script>
import service from "../../data-service";

export default {
  name: "ListaAluno",
  data: () => ({
    headers: [
      { text: "Nome", value: "pessoa.nome" },
      { text: "CPF", value: "pessoa.cpf", sortable: false },
      { text: "Celular", value: "pessoa.celular", sortable: false },
      { text: "", value: "actions", sortable: false },
    ],
    alunos: [],
    dialog: false,
    idExcluir: null
  }),
  created() {
    this.getAlunos();
  },
  methods: {
    getAlunos() {
      service
        .getAll("aluno")
        .then((response) => {
          this.alunos = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    editar(id) {
      this.$router.push({ path: `/aluno/editar/${id}` });
    },
    abrirModal(id) {
      this.dialog = true;
      this.idExcluir = id;
    },
    excluir() {
      service
        .delete("aluno", this.idExcluir)
        .then(() => {
          this.dialog = false;
          this.getAlunos();
          this.$router.go();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    novo() {
      this.$router.push({ name: "CadastroAluno" });
    },
  },
};
</script>
-->