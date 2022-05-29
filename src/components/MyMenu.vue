<template>
  <v-app>
    <MyNav />
    <v-content>
      <v-fade-transition mode="out-in">
          <router-view></router-view>
      </v-fade-transition>
    </v-content>
    <MyFooter />
  </v-app>
</template>

<script>
import MyFooter from "./MyFooter.vue";
import MyNav from "./MyNav.vue";

export default {
  name: "MyMenu",
  components: {
    MyFooter,
    MyNav
  }
};
</script>
