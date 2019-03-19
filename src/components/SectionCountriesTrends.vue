<template>
  <article class="grid--12-columns chapter chapter--countries">
    <section class="chapter__block">
      <p>Let's look at the progress of individual member states in the latest figures (Their reduction targets <a href="https://ec.europa.eu/clima/policies/strategies/2020_en">differ according to national wealth</a>). The graph below shows how each countries’ emissions changed from 1990 to 2016.</p>
    </section>
    <section class="chapter__block chapter__block--wide">
        <figure>
          <svg width="1200" height="400">
            <g>
              <TrendsBarchart
                v-for="(entity, index) in EU28ChangesIn2016"
                :key="index"
              />
            </g>
          </svg>
        </figure>
      </section>
  </article>
</template>

<script>
import TrendsBarchart from "@/components/TrendsBarchart.vue"
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  components: {
    TrendsBarchart
  },
  data: function() {
    return {
    }
  },
  computed: {
    EU28Entities: function() {
        return this.$store.getters.eu28Entities
    },
    EU28ChangesIn2016: function() {
      let changes = []
      for (const entity of this.EU28Entities) {
        let o = {}
        let change = this.getPercentageChange(entity.values[0], entity.values[entity.values.length - 1])
        o.name = entity.name
        o.code = entity.code
        o.change = change
        changes.push(o)
      }
      return changes
    }
  },
  methods: {
    bar: function(values, index) {
      const xScale = d3
        .scaleBand()
        .rangeRound([0, 27]);

      const yScale = d3
        .scaleLinear()
        .range([0, 400])
        .domain([100, 200]);

      return {
        width: 2,
        height: 100,
        x: xScale(15),
        y: yScale(150)
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
</style>
