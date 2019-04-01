<template>
  <article class="grid--12-columns chapter chapter--EU">
    <section class="chapter__block chapter__block">
      <h1>The EU and its Greenhouse Gas emissions - developments in context</h1>
    </section>
    <section class="chapter__block">
      <p>In an effort to contributing to the mitigation of climate change, the European Union members agreed on reducing the emission of Greenhouse Gases (or, more precisely, CO<sub>2</sub> equivalent) with a <a href="https://ec.europa.eu/clima/policies/strategies_en" target="_blank">strategy of various steps</a>. Targeted is a reduction by 20 % in 2020 and 40 % in 2030, both values are relative to the emission levels of 1990.</p>
      <p>The EU seems on track, with a reduction of about <span class="indicator--highlighted"><i :class="[EUChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(EUChange) }} %</span> in the figures from 2016.</p>
      <p class="figure__description">Greenhouse Gas emissions EU</p>
    </section>
    <section class="chapter__block grid--table">
      <div class="header-left"><span class="indicator">1990</span></div>
      <div class="header-right"><span class="indicator">2016</span></div>
      <figure class="center" ref="wrapper">
        <svg :width="trendpathWidth" :height="trendpathHeight" class="trendpath--EU">
          <line class="reference-line" :x1="figureMargin" :y1="trendpathHeight / 2" :x2="trendpathWidth - referenceLineMargin" :y2="trendpathHeight / 2" />
          <text
            class="indicator--small-font"
            :x="trendpathWidth - figureMargin"
            :y="trendpathHeight / 2"
            dy="2%"
            text-anchor="end"
          >0 %</text>
          <Trendpath :values="EUEntity.values" :width="trendpathWidth" :height="trendpathHeight" />
          <text class="indicator--small-font" :x="figureMargin" :y="trendpathHeight - figureMargin">{{ format(EUEntity.values[0]) }} kt</text>
          <text class="indicator--small-font" :x="trendpathWidth - figureMargin" :y="trendpathHeight - figureMargin" text-anchor="end">{{ format(EUEntity.values[EUEntity.values.length - 1]) }} kt</text>
        </svg>
      </figure>
      <div class="footer-left"><span class="indicator--reference">Reference value</span></div>
      <div class="footer-right">
        <span class="indicator indicator--highlighted">
          <i :class="[EUChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(EUChange)}} %</span>
      </div>
    </section>
    <section class="chapter__block chapter__block--highlighted">
      <p>The unit for the emissions throughout this whole article is CO<sub>2</sub> equivalent in kilotonnes (kt).</p>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import d3 from '@/assets/d3'
import Trendpath from '@/components/Trendpath.vue'

export default {
  name: 'SectionEU',
  components: {
    Trendpath,
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
