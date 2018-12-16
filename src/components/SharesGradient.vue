<template>
    <figure :class="{ active: isActive }">
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
    </figure>
</template>

<script>
import chroma from 'chroma-js' // chroma for color scales

export default {
  name: 'SharesGradient',
  props: [],
  data: function () {
    // define svg settings
    return {
      isActive: false,
      isAbsolute: false,
      gradientWidth: 412,
      gradientHeight: 100
    }
  },
  computed: {
    cellWidth: function () { // compute width of cell
      return this.gradientWidth / this.values.length
    },
    cellColor: function (value) { // compute color of cell using chroma.js
      let maxValueDomain = (this.isAbsolute) ? Math.max(...this.values) : this.maxValueRelative
      return chroma.scale(['white', 'black']).domain([0, maxValueDomain])
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .c-gradient {
    grid-column: span 1;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "h h h"
    "g g g"
    "c c c"
    ;
    background-color: white;
  }

  h4 {
    grid-area: h;
    margin-bottom: 0;
    border-bottom: .1rem dashed var(--color-grey-09);
  }

  figure {
    grid-area: g;
    width: 100%;
    line-height: 0;
    padding: 0;
    margin: 0;
    border: none;
    overflow: hidden;
  }

  p {
    grid-area: c;
    border-top: .1rem dashed var(--color-grey-09);
  }

  figure.active {
    /*box-shadow: 0px 0px 10px var(--color-grey-20);*/
    outline: 8px dashed var(--color-secondary);
    outline-offset: 0px;
  }
</style>
