import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Banana', price: 30 },
      { name: 'Apple', price: 10 },
      { name: 'Kiwi', price: 40 },
      { name: 'Peach', price: 60 }
    ],
    data: data
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 100 * 50
        }
      })
      return saleProducts
    },
    euEntity: (state) => {
      let euEntity = state.data.entities.filter(entity => entity.name === 'EU')
      return euEntity
    },
    allEntitiesExceptEU: (state) => {
      let allEntitiesExceptEU = state.data.entities.filter(entity => entity.name !== 'EU')
      return allEntitiesExceptEU
    },
    sharesOrderedByYear: (state) => {
      let shares = []
      for (let index = 0; index < state.data.entities[0].values.length; index++) {
        let year = {}
        for (const entity of state.data.entities) {
          year[entity.name] = entity.values[index]
        }
        shares.push(year)
      }
      return shares
    }
  },
  mutations: {
    fetchData (state, data) {
      state.data = data
    },
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    fetchData: ({ commit }) => {
      fetch('data.json')
        .then(response => response.json())
        .then(json => commit('fetchData', json))
    },
    // always perform asynchronous tasks (like API fetching) in 'actions'
    handleReducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 0)
    }
  }
})
