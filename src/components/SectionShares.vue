<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Shares of GHGs between EU countries</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt incidunt cum sint! Dicta harum provident magni, quibusdam eveniet facilis necessitatibus odit rem! Perferendis quo vitae fuga illo ab. Vero?</p>
    </section>
    <section class="c-main">
      <ul>
        <li 
          v-for="entity in allEntitiesExceptEU"
          :key="entity.name"
        >
        {{entity.name}}
        {{entity.values[0]}}
        <strong>{{getPercentage(entity.values[0], totalValue).toFixed(2)}}</strong>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionShares',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters(['allEntitiesExceptEU']),
    totalValue: function () {
      let val = 0
      this.allEntitiesExceptEU.forEach(entity => {
        val += entity.values[0]
      })
      return val
    }
  },
  methods: {
    getPercentage: function (partialValue, totalValue) {
      return partialValue / totalValue * 100
    }
  }
}
</script>

<style scoped>
</style>
