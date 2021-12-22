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
        <v-btn @click="hash('some data to hash')" text outlined>Hash</v-btn>
        <v-btn @click="genKeyPair()" text outlined>GenKeyPair</v-btn>
        <v-btn @click="getHelloCrypto()" text outlined>Call Hello Crypto Route</v-btn>
        <v-btn @click="getHello()" text outlined>Call Hello Route</v-btn>
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
      getHelloCrypto: 'home/getHelloCrypto',
      getHello: 'home/getHello'
    }),
    hash(string) {
      const crypto = require("crypto")
      const hash = crypto.createHash('sha256')
      hash.update(string)
      console.log(hash.digest('hex'))
    },
    genKeyPair() {
      const crypto = require('crypto')
      console.log(crypto)
      const ecdh = crypto.createECDH('secp256k1')
      ecdh.generateKeys()
      console.log(ecdh)

      const privateKey = ecdh.getPrivateKey('hex')

      const privJSON = { key: privateKey }
      const privateKeyObject = crypto.createPrivateKey(privJSON)
      console.log(privateKeyObject, typeof(privateKeyObject))
      // const publicKey = ecdh.getPublicKey('hex')
      // console.log(typeof(publicKey), publicKey)

      // const message = "I got it working?"
      // console.log(message)

      // const encryptedWithPrivate = crypto.privateEncrypt(privateKey, message)
      // console.log(encryptedWithPrivate)

    }
  }
}
</script>