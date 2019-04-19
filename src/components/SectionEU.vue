<template>
  <article class="grid--12-columns chapter chapter--EU">
    <section class="chapter__block">
      <p>In an effort to contributing to the mitigation of climate change, the European Union members agreed on reducing the emission of Greenhouse Gases with a <a href="https://ec.europa.eu/clima/policies/strategies_en" target="_blank">strategy of various steps</a>. The EU as an entity targets a reduction by <span class="indicator--highlighted"><i class="arrow--forward arrow--decreasing"></i>20 %</span> in 2020 and <span class="indicator--highlighted"><i class="arrow--forward arrow--decreasing"></i>40 %</span> in 2030. These percentage values are relative to the EU emission levels in 1990.</p>
      <p>The EU seems on track. While in 1990 the emission level was 5,719,571 kt, it could be reduced to 4,440,775 kt in 2016. This equals a decrease of about <span class="indicator--highlighted"><i :class="[EUChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(EUChange) }} %</span>.</p>
      <p class="figure__description">Greenhouse Gas emissions: EU</p>
    </section>
    <TrendpathFigure class="chapter__block" :entity="EUEntity" />
    <section class="chapter__block chapter__block--highlighted">
      <p>The unit for Greenhouse Gas emissions is CO<sub>2</sub> equivalent in kilotonnes (kt). In detail, this includes: CO<sub>2</sub>, N2O in CO<sub>2</sub> equivalent, CH4 in CO<sub>2</sub> equivalent, HFC in CO<sub>2</sub> equivalent, PFC in CO<sub>2</sub> equivalent, SF6 in CO<sub>2</sub> equivalent and NF3 in CO<sub>2</sub> equivalent from all sectors and as well as indirect CO<sub>2</sub> (excluding LULUCF and memo items and including international aviation).</p>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import d3 from '@/assets/d3'
import TrendpathFigure from '@/components/TrendpathFigure.vue'
import Trendpath from '@/components/Trendpath.vue'

export default {
  name: 'SectionEU',
  components: {
    Trendpath,
    TrendpathFigure
  },
  data: function () {
    return {
      trendpathWidth: 500,
      figureMargin: 10,
      referenceLineMargin: 40
    }
  },
  computed: {
    trendpathHeight: function () {
      return this.trendpathWidth / 3
    },
    intervalStart: function () {
      return this.$store.state.data.intervalStart
    },
    EUEntity: function () {
      return this.$store.getters.euEntity[0] // TODO: why do I have to specify an index here?
    },
    EUChange: function () {
      const valueFirstYear = this.EUEntity.values[0],
            valueLastYear = this.EUEntity.values[this.EUEntity.values.length - 1]
      return this.getPercentageChange(valueFirstYear, valueLastYear).toFixed(0)
    }
  },
  mounted: function() {
    this.trendpathWidth = this.$refs.wrapper.offsetWidth

    window.addEventListener("resize", () => {
      this.trendpathWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
.trendpath--EU text {
  font-family: var(--font-family-mono);
  fill: white;
}

.indicator--reference {
  font-family: var(--font-family-mono);

}
</style>
