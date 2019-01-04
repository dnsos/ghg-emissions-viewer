<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h1>Europes Greenhouse Gas Emissions visualised</h1>
      <p>This is a visual explanation of how Europes (EU + some others) Greenhouse Gas Emissions developedin the past decades.</p>
      <h3>Product list</h3>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <span>{{product.name}} </span>
          <span>{{product.price}}€</span>
        </li>
      </ul>
      <h3>Sales list</h3>
      <ul>
        <li v-for="(product, index) in saleProducts" :key="index">
          <span>{{product.name}} </span>
          <span>{{product.price}}€</span>
        </li>
      </ul>
      <button @click="reducePrice(4)">Reduce price</button>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionIntro',
  props: [],
  data: function () {
    return {

    }
  },
  computed: {
    products: function () {
      return this.$store.state.products
    },
    // if there are multiple getters (or also actions) they can be included as follows (ES6)
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    reducePrice: function (amount) {
      this.$store.dispatch('handleReducePrice', amount)
    }
  }
}
</script>

<style scoped>
</style>
