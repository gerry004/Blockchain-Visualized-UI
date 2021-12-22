<template>
  <wallet-layout>
    <v-card>
      <v-card-title>Balance: 1,000 ETH</v-card-title>
      <v-card-text>
        <p>Public Address: some encryption key</p>
        <p>Private Key: don't show this to anyone</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text outlined>Send</v-btn>
        <v-btn text outlined>Receive</v-btn>
        <v-btn @click="generateKeyPair()" text outlined>GenKeyPair</v-btn>
        <v-btn @click="computeHash()" text outlined>Compute Hash</v-btn>
      </v-card-actions>
    </v-card>
  </wallet-layout>
</template>

<script>
import WalletLayout from "@/components/WalletLayout.vue"
import { mapActions } from "vuex"

export default {
  name: 'Account',
  components: { WalletLayout },
  data: () => ({
    blocks: [
      {
        previous: "hash of block 1",
        data: 'data',
        next: 'hash of block 2',
        color: 'error'
      },
      {
        previous: "0000000000",
        data: 'data',
        next: 'hash of block 1',
        color: 'success'
      },
    ]
  }),
  methods: {
    ...mapActions({
      computeHash: 'home/computeHash',
      generateKeyPair: 'home/generateKeyPair'
    })
  }
}
</script>