<template>
  <article class="grid--12-columns chapter chapter--countries">
    <section class="chapter__block">
      <p>Let's look at the progress of individual member states in the latest figures (Their reduction targets <a href="https://ec.europa.eu/clima/policies/strategies/2020_en">differ according to national wealth</a>). The graph below shows how each countries’ emissions changed from 1990 to 2016.</p>
    </section>
    <section class="chapter__block chapter__block--wide">
        <figure>
          <svg width="1200" height="400">
            <g>
              <rect
                v-for="(entity, index) in EU28Entities"
                :key="entity.name"
                :x="xScale(index)"
                y="0"
                :class="entity.name"
                width="2"
                height="50"
              ></rect>
            </g>
          </svg>
        </figure>
      </section>
  </article>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  data: function() {
    return {
    }
  },
  computed: {
    EU28Entities: function() {
        return this.$store.getters.eu28Entities
    },
    xScale: function(value) {
      return d3
        .scaleBand()
        .rangeRound([0, 27])
    },
    yScale: function() {
      return d3
        .scaleLinear()
        .range([0, 400])
        .domain([-300, 300])
    }
  },
  methods: {
    
  },
  mounted: function () {
    console.log(this.EU28Entities.length)  
  }
}
</script>

<style scoped>
</style>
