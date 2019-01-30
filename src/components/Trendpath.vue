<template>
  <path class="trendpath" :d="trendpathData(values)"></path>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "Trendpath",
  props: ["width", "height", "values"],
  data: function() {
    return {}
  },
  computed: {
    trendpathData: function() {
      const xScale = d3
        .scaleLinear()
        .range([0, this.width])
        .domain([0, this.values.length])

      const yScale = d3
        .scaleLinear()
        .range([0, this.height])
        .domain([Math.max(...this.values), Math.min(...this.values)])

      // generate path using d3.line and previously defined scales
      return d3
        .line(this.values)
        .x((d, i) => {
          return xScale(i) + ((this.width / this.values.length) / 2)
        })
        .y((d, i) => {
          return yScale(d)
        })
    }
  },
  mounted: function() {
  }
}
</script>

<style scoped>
.trendpath {
  stroke: white;
  stroke-width: .1rem;
  fill: transparent;
}
</style>
