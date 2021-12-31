import { api } from '@/api'

const namespaced = true;

const state = {
  accounts: [],
  transaction: {}
};

const getters = {
  accounts: state => state.accounts,
  transaction: state => state.transaction
};

const actions = {
  async createAccount({ commit }, data) {
    await api.post('/crypto/create-account', data)
      .then((response) => {
        commit('updateAccounts', response.data)
      })
  },
  async signTransaction({ commit, dispatch }, data) {
    await api.post('/crypto/sign', data)
      .then((response) => {
        commit('setTransaction', response.data)
        dispatch('verifyTransaction', response.data)
      })
  },
  async verifyTransaction({ commit }, data) {
    await api.post('/crypto/verify', data)
      .then((response) => {
        commit('setTransaction', response.data)
      })
  },
  async sendFunds({ dispatch }, data) {
    await api.post('crypto/send', data)
      .then(() => {
        dispatch('getAccounts')
      })
  },
  async getAccounts({ commit }) {
    await api.get('crypto/accounts')
      .then((response) => {
        commit('setAccounts', response.data)
      })
  }
};

const mutations = {
  updateAccounts(state, data) {
    state.accounts.push(data)
  },
  setTransaction(state, data) {
    state.transaction = data
  },
  setAccounts(state, data) {
    state.accounts = data
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};