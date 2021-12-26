<template>
  <wallet-layout>
    <v-card>
      <v-card-title>Balance: {{ account.balance }}</v-card-title>
      <v-card-text>
        <p>Public Address: {{ account.public }}</p>
        <p>Private Key: {{ account.private }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text outlined>Send</v-btn>
        <v-btn text outlined>Receive</v-btn>
        <v-btn @click="computeHash()" text outlined>Compute Hash</v-btn>
        <v-btn @click="createAccount()" text outlined>create account</v-btn>
      </v-card-actions>
    </v-card>
  </wallet-layout>
</template>

<script>
import WalletLayout from "@/components/WalletLayout.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'Account',
  components: { WalletLayout },
  computed: {
    ...mapGetters({
      account: 'home/account'
    })
  },
  methods: {
    ...mapActions({
      createAccount: 'home/createAccount',
      computeHash: 'home/computeHash'
    })
  }
}
</script>