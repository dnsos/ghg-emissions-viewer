<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <p>Let's now take a look at individual countries.</p>
      <figure>
          <svg class="chart" height="500" width="800">
              <g>
                  <text 
                    v-for="entity in allEntitiesExceptEU"
                    :key="entity.name">
                {{ entity.name }}
                  </text>
              </g>
          </svg>
      </figure>
      <p>Most countries set themselves reduction goals of around 20%, so these are good numbers.</p>
    </section>
  </article>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  components: {
  },
  data: function() {
    return {
    }
  },
  computed: {
    allEntitiesExceptEU: function() {
        return this.$store.getters.allEntitiesExceptEU
    }
  },
  methods: {
    initialiseChart: function() {
        this.drawChart()
    },
    drawChart: function() {
        console.log("Chart has been drawn")

        d3.select(this.chartData.selector)
            .append("text")
            .attr("x", 20)
            .attr("y", 20)
            .style("text-anchor", "left")
            .text(this.chartData.title)

        d3.select(this.chartData.selector)
            .selectAll("g")
            .data(this.chartData.data)
            .enter().append("g")
            .append("rect")
            .attr("width", function (d) {
                return d;
            }).attr("height", 20)
            .attr("y", function (d, i) {
                return (i + 1.5) * 20 + i
            }).attr("x", 0)
    }
  },
  watch: {
    'allEntitiesExceptEU': {
        handler: function (val) {
            this.refreshChart();
        },
        deep: true
    }
},
  mounted: function() {
    this.initialiseChart()
  }
}
</script>

<style scoped>
</style>
