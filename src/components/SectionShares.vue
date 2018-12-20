<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Let's now take a look at how these emissions are distributed.</h2>
      <p>Each European country contributes its emissions to the total value. However, the volume varies. Explore the different shares throughout the years here.</p>
      <form>
        <input type="range" min="0" :max="allEntitiesExceptEU[rangeValue].values.length - 1" step="1" v-model.number="rangeValue">
        <output>{{activeYear}}</output>
      </form>
    </section>
    <section class="c-main fullwidth">
      <SharesGradient :activeYearIndex="rangeValue" />
      <!--<ul>
        <li 
          v-for="entity in allEntitiesExceptEU"
          :key="entity.name"
        >
        {{entity.name}}
        {{new Intl.NumberFormat().format(entity.values[rangeValue])}}
        <strong>{{getPercentage(entity.values[rangeValue], totalValue).toFixed(2)}}</strong>
        </li>
      </ul>-->
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import SharesGradient from "@/components/SharesGradient.vue"

export default {
  name: 'SectionShares',
  data: function () {
    return {
      rangeValue: 0
    }
  },
  computed: {
    ...mapGetters(['allEntitiesExceptEU']),
    intervalStart: function () {
      return this.$store.state.data.intervalStart
    },
    activeYear: function () {
      return this.intervalStart + this.rangeValue
    },
    totalValue: function () {
      let val = 0
      this.allEntitiesExceptEU.forEach(entity => {
        val += entity.values[this.rangeValue]
      })
      return val
    }
  },
  methods: {
    getPercentage: function (partialValue, totalValue) {
      return partialValue / totalValue * 100
    }
  },
  mounted: function () {
    console.log('Range value:', this.rangeValue)
    
  },
  components: {
    SharesGradient
  }
}
</script>

<style scoped>
.fullwidth {
  grid-column: 1 /13;
}
</style>
