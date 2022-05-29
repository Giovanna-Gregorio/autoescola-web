<template>
  <v-app>
    <MyMenu/>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import MyMenu from './components/MyMenu';


export default {
  name: 'App',
  components: {
    MyMenu
  },

  data: () => ({
    //
  }),
};
</script>
