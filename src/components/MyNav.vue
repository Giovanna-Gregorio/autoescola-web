<template>
  <div>
    <v-app-bar
      absolute
      dark
      color="#172257"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>

      <v-toolbar-title>CFC</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="sair()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="toggle" absolute bottom dark color="#172257">
      <v-list-item nav dense>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :href="item.href">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MyNav",
  data: () => ({
    toggle: false,
    platformName: "CFC",
    items: [
      
      {
        href: "/MyHome",
        router: true,
        title: "Home",
        icon: "mdi-home",
      },
       {
        href: "/frota",
        router: true,
        title: "Frota",
        icon: "mdi-car",
      },
       {
        href: "/alunos",
        router: true,
        title: "Alunos",
        icon: "mdi-account-multiple",
      },
       {
        href: "/instrutores",
        router: true,
        title: "Instrutores",
        icon: "mdi-account",
      },
      
       {
        href: "/MyCalendario",
        router: true,
        title: "Agendamentos",
        icon: "mdi-calendar-text-outline",
      },
        {
        href: "/AlterarSenha",
        router: true,
        title: "Alterar senha",
        icon: "mdi-lock-outline",
      },
        {
        href: "/",
        router: true,
        title: "Help",
        icon: "mdi-help-circle-outline",
      },
      {
        href: "/logs",
        router: true,
        title: "Log",
        icon: "mdi-home",
      },
    ],
  }),
}
</script>
