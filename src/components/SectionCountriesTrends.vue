<template>
  <article class="grid--12-columns chapter chapter--countries">
    <section class="chapter__block">
      <p>Let's look at the progress of individual member states in the latest figures (Their reduction targets <a href="https://ec.europa.eu/clima/policies/strategies/2020_en">differ according to national wealth</a>). The graph below shows how each countries’ emissions changed from 1990 to 2016.</p>
    </section>
    <section class="chapter__block chapter__block--wide grid--autofit-small">
      <figure 
        v-for="entity in EU28Entities"
        :key="entity.name"
      >
        <svg :width="trendpathWidth" :height="trendpathHeight">
          <Trendpath :values="entity.values" :width="trendpathWidth" :height="trendpathHeight" />
        </svg>
      </figure>
      </section>
  </article>
</template>

<script>
import Trendpath from "@/components/Trendpath.vue"
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  components: {
    Trendpath
  },
  data: function() {
    return {
      trendpathWidth: 100
    }
  },
  computed: {
    trendpathHeight: function() {
      return this.trendpathWidth / 3
    },
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
  },
  mounted: function () {
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
</style>
