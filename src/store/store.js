import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    data: data,
    selections: {
      contextualisation: {
        entityA: 'Cyprus',
        entityB: 'Germany',
        isInContext: false
      }
    }
  },
  getters: {
    euEntity: (state) => {
      let euEntity = state.data.entities.filter(entity => entity.name === 'EU')
      return euEntity
    },
    allEntitiesExceptEU: (state) => {
      let allEntitiesExceptEU = state.data.entities.filter(entity => {
        return entity.name !== 'EU'
      })
      return allEntitiesExceptEU
    },
    eu28Entities: (state) => {
      let eu28Entities = state.data.entities.filter(entity => {
        return entity.name !== 'EU' && entity.name !== 'Turkey' && entity.name !== 'Switzerland' && entity.name !== 'Norway' && entity.name !== 'Liechtenstein' && entity.name !== 'Iceland'
      })
      return eu28Entities
    },
    sortedEU28Entities: (state, getters) => {
      let sorted = getters.eu28Entities.sort((a, b) => (a.values[a.values.length - 1] < b.values[b.values.length - 1]) ? 1 : -1)
      return sorted
    },
    contextEntities: (state) => {
      return state.data.entities.filter(entity => {
        return entity.name === state.selections.contextualisation.entityA || entity.name === state.selections.contextualisation.entityB
      })
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
    defineData (state, data) {
      state.data = data
    },
    toggleContextState (state) {
      state.selections.contextualisation.isInContext = !state.selections.contextualisation.isInContext
    }
  },
  actions: {
    fetchData: ({ commit }) => {
      fetch('data.json')
        .then(response => response.json())
        .then(json => commit('defineData', json))
    }
  }
})
