import { api } from '@/api'

const namespaced = true;

const state = {
  data: {},
  account: {
    balance: null,
    public: null,
    private: null
  }
};

const getters = {
  data: state => state.data,
  account: state => state.account
};

const actions = {
  async createAccount({ commit }) {
    await api.post('/crypto/create-account', {passphrase: 'passphrase'})
      .then((response) => {
        commit('setAccount', response.data)
      })
  },
  async computeHash({ commit }) { 
    await api.post('/crypto/hash', { data: 'string data' })
      .then((response) => {
        commit('setData', response.data)
      })
  },
};

const mutations = {
  setData(state, data) {
    state.data = data
  },
  setAccount(state, data) {
    state.account = data
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};