<template>
  <article class="grid--12-columns chapter chapter--EU">
    <section class="chapter__block chapter__block--wide">
      <h1>The EU and its Greenhouse Gas emissions - developments in context</h1>
    </section>
    <section class="chapter__block">
      <p>In an effort to contributing to the mitigation of climate change, the European Union members agreed on reducing the emission of Greenhouse Gases (or, more precisely, CO2 equivalent) with a <a href="https://ec.europa.eu/clima/policies/strategies_en">strategy of various steps</a>. Targeted is a reduction by 20% in 2020 and 40% in 2030, both values are relative to the emission levels of 1990.</p>
      <p>The EU seems on track, with a reduction of about <span class="indicator__change">{{ Math.abs(EUChange) }} %</span> in the latest figures from 2016.</p>
    </section>
    <section class="chapter__block trendpath--EU">
      <span class="indicator--startyear">1990</span>
      <span class="indicator--endyear">2016</span>
      <figure ref="wrapper">
        <svg :width="trendpathWidth" :height="trendpathHeight">
          <Trendpath :values="EUEntity.values" :width="trendpathWidth" :height="trendpathHeight" />
        </svg>
      </figure>
      <span class="indicator--startvalue">{{ format(EUEntity.values[0]) }} ktǂ</span>
      <span class="indicator--endvalue">{{ format(EUEntity.values[EUEntity.values.length - 1]) }} ktǂ</span>
    </section>
    <section class="chapter__block">
      <p>Paragraph that describes units etc.</p>
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
      trendpathHeight: 200
    }
  },
  computed: {
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
.trendpath--EU {
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header-left header-right"
    "center center"
    "footer-left footer-right";
  background-color: transparent;
}

.trendpath--EU figure {
  grid-area: center;
}

.indicator--endyear {
  grid-area: header-right;
  text-align: right;
}

.indicator--endvalue {
  grid-area: footer-right;
  text-align: right;
}
</style>
