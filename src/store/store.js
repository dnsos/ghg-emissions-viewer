import Vue from 'vue'
import Vuex from 'vuex'

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
        ghgdata: {}
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 100 * 50
                }
            })
            return saleProducts
        }
    },
    mutations: {
        fetchData(state, data) {
            state.ghgdata = data
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
                .then(data => commit('fetchData', data))
        },
        // always perform asynchronous tasks (like API fetching) in 'actions' 
        handleReducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload)
            }, 1000);
        }
    }
})
