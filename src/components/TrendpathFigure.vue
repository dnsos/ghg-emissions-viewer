<template>
  <section class="grid--table">
    <div class="header-left"><span class="indicator">1990</span></div>
    <div class="header-right"><span class="indicator">2016</span></div>
    <figure class="center figure--trendpath" ref="wrapper">
      <svg :width="trendpathWidth" :height="trendpathHeight">
        <line
          class="reference-line"
          :x1="figureMargin"
          :y1="trendpathHeight / 2"
          :x2="trendpathWidth - referenceLineMargin"
          :y2="trendpathHeight / 2"
        />
        <text
          class="indicator--small-font"
          :x="trendpathWidth - figureMargin"
          :y="trendpathHeight / 2"
          dy="2%"
          text-anchor="end"
        >0 %</text>
        <Trendpath :values="entity.values" :width="trendpathWidth" :height="trendpathHeight" />
        <text
          class="indicator--small-font"
          :x="figureMargin"
          :y="trendpathHeight - figureMargin"
        >{{ format(startValue) }} kt</text>
        <text
          class="indicator--small-font"
          :x="trendpathWidth - figureMargin"
          :y="trendpathHeight - figureMargin"
          text-anchor="end"
        >{{ format(endValue) }} kt</text>
      </svg>
    </figure>
    <div class="footer-left"><span class="indicator--reference">Change from 1990:</span></div>
    <div class="footer-right">
      <span class="indicator indicator--highlighted">
        <i
          :class="[entityChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']"
          class="arrow--forward">
        </i>{{ Math.abs(entityChange)}} %</span>
    </div>
  </section>
</template>

<script>
import Trendpath from "@/components/Trendpath.vue"
import * as d3 from "d3"

export default {
  name: "TrendpathFigure",
  components: {
    Trendpath
  },
  props: ["entity"],
  data: function() {
    return {
      trendpathWidth: 500,
      figureMargin: 10,
      referenceLineMargin: 40
    }
  },
  computed: {
    trendpathHeight: function() {
      return this.trendpathWidth / 3
    },
    startValue: function() {
      return this.entity.values[0]
    },
    endValue: function() {
      return this.entity.values[this.entity.values.length - 1]
    },
    entityChange: function() {
      return this.getPercentageChange(this.startValue, this.endValue).toFixed(0)
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
.description h4 {
  margin-bottom: 0;
}

.figure--trendpath svg text {
  font-family: var(--font-family-mono);
  fill: white;
}

.indicator--reference {
  font-family: var(--font-family-mono);
  color: white;
}
</style>
