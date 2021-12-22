<template>
  <v-app>
    <v-app-bar
      color="black"
      dark
      flat
      app
    >
      <v-toolbar-title class="font-weight-bold">Blockchain Visualized</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" color="white" text>Blockchain</v-btn>
      <v-btn to="/account" color="white" text>Wallet</v-btn>
      <v-btn to="/accounts" color="white" text>Accounts</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};

</script>
