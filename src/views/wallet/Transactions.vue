<template>
  <wallet-layout>
    <v-card
      class="mx-auto"
    >
      <v-list>
        <v-list-item
          v-for="(transaction, i) in transactions"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title>From: {{transaction.from}} To: {{transaction.to}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </wallet-layout>
</template>

<script>
import WalletLayout from "@/components/WalletLayout.vue"

export default {
  name: 'Transactions',
  components: { WalletLayout },
  data: () => ({
    transactions: [
      {
        to: "publicAddress of Receiver",
        from: "publicAddress of Sender"
      },
      {
        to: "publicAddress of Receiver",
        from: "publicAddress of Sender"
      },
    ]
  })
}
</script>