<template>
  <v-footer color="red" dark padless>
    <v-row justify="center" no-gutters>
      <v-divider></v-divider>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        © {{ new Date().getFullYear() }}<strong></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
 export default {
  name: "MyFooter",
};
</script>

<style scoped>
.v-application .primary.lighten-2 {
  background-color: #172257 !important;
  border-color: #172257 !important;
}
</style>