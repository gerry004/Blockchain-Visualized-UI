<template>
  <wallet-layout>
    <v-btn @click="passphraseDialog=true" text outlined>create account</v-btn>
    <v-card v-for="(account, i) in accounts" :key="i">
      <v-card-title>Balance: {{ account.balance }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="account.username"
              label="Username"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="account.publicKey"
              label="Public Key"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="account.privateKey"
              label="Private Key"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn text outlined @click="openTransactionDialog(account.username)">Send</v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="passphraseDialog" max-width="600px" persistent>
        <v-card>
          <v-card-title>
            Create An Account
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  label="Username"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
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
    <v-row justify="center">
      <v-dialog
        v-model="transactionDialog"
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
                    v-model="fromAddress"
                    label="From"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="toAddress"
                    label="To"
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
                <v-col cols="9">
                  <v-text-field
                    v-model="passphrase"
                    label="Passphrase"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn @click="handleSignTransaction()">Sign</v-btn>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-if="transaction.signature"
                    v-model="transaction.signature"
                    label="Signature"
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
              @click="transactionDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="send()"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </wallet-layout>
</template>

<script>
import WalletLayout from "@/components/WalletLayout.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'Account',
  components: { WalletLayout },
  data: () => ({
    username: null,
    passphraseDialog: false,
    passphrase: null,
    transactionDialog: false,
    toAddress: null,
    fromAddress: null, 
    amount: 0
  }),
  computed: {
    ...mapGetters({
      accounts: 'home/accounts',
      transaction: 'home/transaction'
    })
  },
  methods: {
    ...mapActions({
      createAccount: 'home/createAccount',
      signTransaction: 'home/signTransaction',
      sendFunds: 'home/sendFunds'
    }),
    handleCreateAccount() {
      this.createAccount({ username: this.username, passphrase: this.passphrase })
      this.passphraseDialog = false
      this.passphrase = null
      this.username = null
    },
    handleSignTransaction() {
      const transactionData = {
        passphrase: this.passphrase,
        to: this.toAddress,
        from: this.fromAddress,
        amount: this.amount  
      }
      this.signTransaction(transactionData)
    },
    openTransactionDialog(publicKey) {
      this.fromAddress = publicKey
      this.transactionDialog = true
    },
    send() {
      this.sendFunds(this.transaction)
      this.transactionDialog = false
    }
  }
}
</script>