<template>
    <figure class="wrapper" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <g>
          <!-- append cells as svg rects -->
          <rect
            v-for="(share, index) in sharesSeries"
            :key="index"
            :x="shareSettings(share).x"
            :y="0"
            :width="shareSettings(share).width"
            :height="gradientHeight"
            fill="#003399"
            stroke="white"
            >
          </rect>
        </g>
      </svg>
    </figure>
</template>

<script>
import { mapGetters } from 'vuex'
import chroma from 'chroma-js' // chroma for color scales
import * as d3 from 'd3'

export default {
  name: 'SharesGradient',
  props: ['activeYearIndex'],
  data: function () {
    return {
      gradientWidth: 0,
      gradientHeight: 100
    }
  },
  computed: {
    ...mapGetters(['sharesOrderedByYear']),
    yearIndex: function () {
      return this.activeYearIndex
    },
    sharesSeries: function () {
      let stack = d3.stack()
        .keys(Object.keys(this.sharesOrderedByYear[this.yearIndex]))
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone)
    return stack(this.sharesOrderedByYear)
    },
    sumOfYear: function () {
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      return Object.values(this.sharesOrderedByYear[this.yearIndex]).reduce(reducer)
    }
  },
  methods: {
    shareXPosition: function (value) {
      const x = d3.scaleLinear().range([0, this.gradientWidth]).domain([0,this.sumOfYear])
      return x(value)
    },
    shareSettings: function (share) {
      const startValue = share[0][0],
            endValue = share[0][1]
      const x = d3.scaleLinear().range([0, this.gradientWidth]).domain([0,this.sumOfYear])

      return {
        x: x(startValue),
        width: x(endValue - startValue)
      }
    }
  },
  mounted: function () {
    // set svg width according to wrapping element
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    console.log('Series:', this.sharesSeries)
  }
}
</script>

<style scoped>
.wrapper {
  padding: 0;
  margin: 0;
}
</style>
