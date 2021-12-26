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
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import('@/views/wallet/Transactions.vue'),
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('@/views/Accounts.vue'),
    beforeEnter: async (to, _, next) => {
      await store.dispatch('home/getAccounts')
      next()
    }
  }
]
  
  export default routes