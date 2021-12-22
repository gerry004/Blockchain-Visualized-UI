<template>
	<v-container :style="{ maxWidth: '70%' }">
		<v-tabs>
			<v-tab to="/account">Account</v-tab>
			<v-tab to="/transactions">Transactions</v-tab>
		</v-tabs>
		<slot />
	</v-container>
</template>

<script>

export default {
  name: 'WalletLayout',
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
  })
}
</script>