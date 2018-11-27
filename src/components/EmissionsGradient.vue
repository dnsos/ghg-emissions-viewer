<template>
  <section 
    class="wrapper"
    :class="{ active: isActive }"
    :id="'wrapper__' + entity.toLowerCase()"
    v-cloak
    @mouseout="isActive = !isActive"
    @mouseover="isActive = !isActive"
  >
    <h4>{{entity}}</h4>
    <!-- SVG ELement for Emissions Gradient -->
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
            @mouseover="logValues(value, index, intervalStart)"
            >
          </rect>
        </g>
      </svg>
    </figure>
    <p>{{intervalStart + values.length - 1}}: {{activeValue}}</p>
    <!--<label class="color-checkbox" v-show="isActive">
      <input type="checkbox">
      Show absolute cell colors
    </label>-->
  </section>
</template>

<script>
import chroma from 'chroma-js' // chroma for color scales

export default {
  name: 'EmissionsGradient',
  props: ['intervalStart', 'entity', 'values', 'initialValue'],
  data: function () {
    // define svg settings
    return {
      isActive: false,
      gradientWidth: 412,
      gradientHeight: 20
    }
  },
  computed: {
    cellWidth: function () { // compute width of cell
      return this.gradientWidth / this.values.length
    },
    cellColor: function (value) { // compute color of cell using chroma.js
      return chroma.scale(['white', 'black']).domain([Math.min(...this.values), Math.max(...this.values)])
    },
    activeValue: function () {
      return this.values[this.values.length - 1]
    }
  },
  methods: {
    handleResize () {
      this.gradientWidth = document.querySelector('.wrapper').offsetWidth - 50
    },
    logValues (value, index, intervalStart) {
      this.activeValue = value
      console.log(intervalStart + index, value)
      console.log('Initial value for', this.entity, 'is:', this.initialValue)
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>

<style scoped>
  .wrapper {
    padding: var(--grid-spacing);
    grid-column: span 1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "h h h"
    "g g g"
    "c c c"
    ;
    background-color: white;
    border-radius: .5rem;
    box-shadow: 0px 0px 10px var(--color-grey-09);
  }

  h4 {
    grid-area: h;
    margin-bottom: calc(var(--grid-spacing) - 2rem);
  }

  figure {
    grid-area: g;
    width: 100%;
    line-height: 0;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    overflow: hidden;
  }

  p {
    grid-area: c;
  }

  .wrapper.active {
    box-shadow: 0px 0px 10px var(--color-grey-20);
  }
</style>
