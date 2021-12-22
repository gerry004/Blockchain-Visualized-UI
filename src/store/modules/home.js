import { api } from '@/api'

const namespaced = true;

const state = {
  data: {}
};

const getters = {
  data: state => state.data
};

const actions = {
  async getHello({ commit }) { 
    console.log('getHello route')
    await api.get('/hello')
      .then((response) => {
        console.log(response, response.data)
        commit('setData', response.data)
      })
  },
  async getHelloCrypto({ commit }) {
    console.log('getHelloCryptoRoute')
    await api.get('/crypto/hello-crypto')
    .then((response) => {
      console.log(response, response.data)
      commit('setData', response.data)
    })
  }
};

const mutations = {
  setData(state, data) {
    state.data = data
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};