import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import d3 from '@/assets/d3'

Vue.config.productionTip = false

// Vue mixins (reusable methods throughout all components, no imports necessary)
Vue.mixin({
  methods: {
    format: function (number) {
      return d3.format(',.2d')(number)
    },
    getPercentageChange: function (previousValue, currentValue) {
      let changeValue = previousValue - currentValue
      return -(changeValue / previousValue) * 100
    }
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
