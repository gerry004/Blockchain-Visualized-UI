<template>
  <wallet-layout>
    <v-btn @click="passphraseDialog=true" text outlined>create account</v-btn>
    <v-card v-for="(account, i) in accounts" :key="i">
      <v-card-title>Balance: {{ account.balance }}</v-card-title>
      <v-card-text>
        <p>Public Key: {{ account.publicKey }}</p>
        <p>Private Key: {{ account.privateKey }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text outlined @click="transactionDialog=true">Send</v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="passphraseDialog" max-width="600px">
        <v-card>
          <v-card-title>
            Create An Account
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="passphrase"
                  label="Secret Passphrase"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="passphraseDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="handleCreateAccount()"
            >
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  <!-- <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          Send Funds
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="toAddress"
                  label="To"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="accounts.public"
                  label="From"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="amount"
                  label="Amount"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
  </wallet-layout>
</template>

<script>
import WalletLayout from "@/components/WalletLayout.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'Account',
  components: { WalletLayout },
  data: () => ({
    passphraseDialog: false,
    passphrase: null,
    transactionDialog: false,
    toAddress: null,
    amount: 0
  }),
  computed: {
    ...mapGetters({
      accounts: 'home/accounts'
    })
  },
  methods: {
    ...mapActions({
      createAccount: 'home/createAccount'
    }),
    handleCreateAccount() {
      if (this.passphrase) {
        this.createAccount({ passphrase: this.passphrase })
        this.passphraseDialog = false
        this.passphrase = null
      }
      else {
        console.log("Passphrase Is Required!")
      }
    },
    sendFunds() {
      console.log(this.toAddress)
      console.log(this.account)
      console.log(this.amount)
      this.dialog = false
    }
  }
}
</script>