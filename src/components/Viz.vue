<template>
  <section>
    <h1>Viz</h1>
    <ul>
      <li v-for="datapoint in ghgdata">{{datapoint}}</li>
    </ul>
  </section>
</template>

<script>
import * as d3 from 'd3'

d3.tsv("../data/ghg-emissions.tsv", (error, data) => {
  if (error) throw error

  console.log(data)
})

export default {
  name: 'Viz',
  props: { },
  data: () => {
    return {
      ghgdata: [12, 54, 87, 29, 17, 41, 69, 50]
    }
  }
}
</script>

<style scoped>
</style>
