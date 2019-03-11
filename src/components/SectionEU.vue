<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <h2>GHG Development European Union</h2>
      <p>In an effort to contributing to the mitigation of climate change, the European Union members agreed on reducing the emission of Greenhouse Gases in various steps[https://ec.europa.eu/clima/policies/strategies_en]. Targets are reductions by 20% in 2020 and 40% in 2030, both values are relative[?] to the emission levels in 1990.</p>
      <p>The EU seems on track, with a reduction of about [?] in the latest figures from 2016.</p>
    </section>
    <section class="trendpath--EU">
      <figure ref="wrapper">
        <svg :width="trendpathWidth" :height="trendpathHeight">
          <Trendpath :values="EUEntity.values" :width="trendpathWidth" :height="trendpathHeight" />
        </svg>
      </figure>
      <p>{{ EUEntity.values[0] }}</p>
      <p>{{ EUEntity.values[EUEntity.values.length - 1] }}</p>
      <p>{{ EUChange }}</p>
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
      return this.getPercentageChange(valueFirstYear, valueLastYear).toFixed(1)
    }
  },
  methods: {
    getPercentageChange: function (previousValue, currentValue) {
      let changeValue = previousValue - currentValue
      return - (changeValue / previousValue) * 100
    }
  },
  mounted: function() {
    //this.trendpathWidth = this.$refs.wrapper.offsetWidth

    window.addEventListener("resize", () => {
      this.trendpathWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
.trendpath--EU {
  grid-column: 4 / 10;
}
</style>
