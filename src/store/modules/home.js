import { api } from '@/api'

const namespaced = true;

const state = {
  data: {}
};

const getters = {
  data: state => state.data
};

const actions = {
  async computeHash({ commit }) { 
    console.log('computeHash route')
    await api.post('/crypto/hash', { data: 'string data' })
      .then((response) => {
        console.log(response, response.data)
        commit('setData', response.data)
      })
  },
  async generateKeyPair({ commit }) {
    console.log('generateKeyPair route')
    await api.get('/crypto/generate-key-pair')
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