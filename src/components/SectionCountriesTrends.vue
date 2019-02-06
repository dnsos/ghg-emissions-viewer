<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <p>Let's now take a look at individual countries.</p>
    </section>
    <section class="grid--autofit chapter__content">
        <section
            v-for="entity in allEntitiesExceptEU"
            :key="entity.name"
            >
            <h5>{{ entity.name }}</h5>
            <figure ref="trendwrapper">
                <svg class="chart" :width="trendWidth" :height="trendHeight" >
                    <g>
                        <Trendpath :values="entity.values" :width="trendWidth" :height="trendHeight" />
                    </g>
                </svg>
            </figure>
            <section class="indicators">
                <span class="indicator__first-value">{{ new Intl.NumberFormat().format(entity.values[0].toFixed(0)) }} ktǂ</span>
                <span class="indicator__change">
                    <i :class="[entity.values[entity.values.length -1 ] < entity.values[0] ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>
                    {{ Math.abs(100 - (100 / entity.values[0] * entity.values[entity.values.length - 1]).toFixed(0)) }} %
                </span>
                <span class="indicator__last-value">{{ new Intl.NumberFormat().format(entity.values[entity.values.length - 1].toFixed(0)) }} ktǂ</span>
            </section>
        </section>
      </section>
  </article>
</template>

<script>
import * as d3 from "d3"
import Trendpath from "@/components/Trendpath.vue"

export default {
  name: "SectionCountriesTrends",
  components: {
      Trendpath
  },
  data: function() {
    return {
        trendWidth: 350,
        trendHeight: 100
    }
  },
  computed: {
    allEntitiesExceptEU: function() {
        return this.$store.getters.allEntitiesExceptEU
    }
  },
  methods: {
  },
  mounted: function() {
    //this.trendWidth = this.$refs.trendwrapper.offsetWidth;
    
    window.addEventListener("resize", () => {
      this.trendWidth = this.$refs.trendwrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
.indicators {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding-top: calc(var(--grid-spacing) / 2);
    margin-top: calc(var(--grid-spacing) / 2);
    border-top: .1rem solid var(--color-eublue);
}

.indicator__first-value, .indicator__last-value {
    font-size: var(--font-size-small);
}

.indicator__change {
    font-weight: 700;
    background-color: white;
}

.indicator__last-value {
    text-align: right;
}
</style>
