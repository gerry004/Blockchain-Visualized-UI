import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/wallet/Account.vue'),
    beforeEnter: async (to, _, next) => {
      await store.dispatch('home/getAccounts')
      next()
    }
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('@/views/wallet/Transactions.vue'),
  }
]
  
  export default routes