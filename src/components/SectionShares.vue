<template>
  <section class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Shares of GHGs between EU countries</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt incidunt cum sint! Dicta harum provident magni, quibusdam eveniet facilis necessitatibus odit rem! Perferendis quo vitae fuga illo ab. Vero?</p>
      <p v-for="share in shares" :key="share">{{share}}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: 'SectionShares',
  props: ['entities'],
  data: function () {
    return {
      shares: []
    }
  },
  methods: {
    computeShares (data) {
      let sharesArray = Array.from(data, entity => {
        return entity.values[entity.values.length - 1]
      })
      this.shares = sharesArray
    }
  },
  created: function () {
    this.computeShares(this.entities)
  },
  mounted: function () {
    console.log(this.shares)
  }
}
</script>

<style scoped>
</style>
