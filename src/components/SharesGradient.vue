<template>
    <figure class="wrapper" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <g>
          <!-- append cells as svg rects -->
          <ShareElement 
            v-for="(share, index) in sharesSeries" 
            :key="index" 
            :shareValues="share"
            :y="0"
            :height="gradientHeight"
            :gradientWidth="gradientWidth"
            fill="#cccccc"
            stroke="white"
            :yearSum="yearSum"
          />
        </g>
      </svg>
    </figure>
</template>

<script>
import { mapGetters } from 'vuex'
import chroma from 'chroma-js' // chroma for color scales
import * as d3 from 'd3'
import ShareElement from "@/components/ShareElement.vue"

export default {
  name: 'SharesGradient',
  components: {
    ShareElement
  },
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
        .order(d3.stackOrderAscending)
        .offset(d3.stackOffsetNone)
    return stack(this.sharesOrderedByYear)
    },
    yearSum: function () {
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      return Object.values(this.sharesOrderedByYear[this.yearIndex]).reduce(reducer)
    }
  },
  methods: {
    
  },
  mounted: function () {
    // set svg width according to wrapping element and add resize listener
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener('resize', () => {
        this.gradientWidth = this.$refs.wrapper.offsetWidth
      })
  }
}
</script>

<style scoped>
.wrapper {
  padding: 0;
  margin: 0;
}
</style>
