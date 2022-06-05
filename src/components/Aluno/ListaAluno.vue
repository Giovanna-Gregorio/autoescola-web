<template>
  <v-container>
    <br /><br /><br /><br />
    <h3>Lista de Alunos</h3>
    <v-divider></v-divider>
    <br />
    <v-btn depressed color="#172257" @click="novo()"> Novo </v-btn>
    <br /><br />
    <v-data-table
      :headers="headers"
      :items="aluno"
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

<script>
import service from "./../../data-service";

export default {
  name: "ListaAluno",
  data: () => ({
    headers: [
      { text: "Nome", value: "nome" },
      { text: "CPF", value: "cpf" },
      { text: "RG", value: "rg" },
      { text: "Sexo", value: "sexo", sortable: false },
      { text: "Nascimento", value: "nascimento" },
      { text: "Email", value: "email" },
      { text: "Celular", value: "email" },
      { text: "Profissão", value: "profissao", sortable: false },
      { text: "Nome da mãe", value: "nomemae" },
      { text: "Nome do pai", value: "nomepai" },
      { text: "CEP", value: "cep" },
      { text: "Endereço", value: "endereco" },
      { text: "Número", value: "numero" },
      { text: "Bairro", value: "bairro" },
      { text: "Cidade", value: "cidade" },
      { text: "Estado", value: "estado", sortable: false },

      { text: "", value: "actions", sortable: false },
    ],
    aluno: [],
    dialog: false,
    idExcluir: null,
  }),
  created() {
    this.getAluno();
  },
  methods: {
    getAluno() {
      service
        .getAll("Aluno")
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
    excluir() {
      service
        .delete("alunos", this.idExcluir)
        .then(() => {
          this.dialog = false;
          this.getAluno();
          this.$router.go();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    abrirModal(id) {
      this.dialog = true;
      this.idExcluir = id;
    },
    novo() {
      this.$router.push({ name: "CadastroAluno" });
    },
  },
};
</script>


