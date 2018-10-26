<template>
  <section class="wrapper" :id="'wrapper__' + country.toLowerCase()">
    <h3>{{country}}</h3>
    <!-- SVG ELement for Emissions Gradient -->
    <svg :width="gradientWidth" :height="gradientHeight">
      <g>
        <!-- append cells as svg rects -->
        <rect
          v-for="(value, index) in values"
          :key="index"
          :x="cellWidth * index"
          :y="0"
          :width="cellWidth"
          :height="gradientHeight"
          :fill="cellColor(value)"
          >
        </rect>
      </g>
    </svg>
  </section>
</template>

<script>
import chroma from 'chroma-js' // chroma for color scales

export default {
  name: 'EmissionsGradient',
  props: ['country', 'values'],
  data: function() {
    // define svg settings
    return {
      gradientWidth: 300,
      gradientHeight: 20
    }
  },
  computed: {
    cellWidth: function() { // compute width of cell
      return this.gradientWidth / this.values.length
    },
    cellColor: function(value) { // compute color of cell using chroma.js
      return chroma.scale(['white', 'black']).domain([0, 100])
    }
  },
  methods: {
    handleResize() {
      this.gradientWidth = document.querySelector('.wrapper').offsetWidth
    }
  },
  created: function() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>

<style scoped>
  .wrapper {
    line-height: 1;
    border: 1px solid rgb(220, 220, 220);
  }
</style>
