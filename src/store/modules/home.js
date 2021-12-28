import { api } from '@/api'

const namespaced = true;

const state = {
  accounts: [], //list of objects with balance and public keys
};

const getters = {
  accounts: state => state.accounts
};

const actions = {
  async createAccount({ commit }, data) {
    await api.post('/crypto/create-account', data)
      .then((response) => {
        commit('updateAccounts', response.data)
      })
  },
  // async getAccounts({ commit }) {
  //   await api.get('crypto/accounts')
  //     .then((response) => {
  //       commit('setAccounts', response.data)
  //     })
  // },
  // async sendFunds({ dispatch }, data) {
  //   await api.post('crypto/send', data)
  //     .then((response) => {
  //       console.log(response.data)
  //       dispatch('/home/getAccounts')
  //     })
  // }
};

const mutations = {
  updateAccounts(state, data) {
    state.accounts.push(data)
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};