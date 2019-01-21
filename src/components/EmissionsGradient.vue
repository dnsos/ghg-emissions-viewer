<template>
  <section
    class="gradient--wrapper"
    :class="{ active: isActive }"
    :id="'gradient--wrapper__' + entity.toLowerCase()"
    v-cloak
    @mouseout="isActive = !isActive"
    @mouseover="isActive = !isActive"
  >
    <h4 class="gradient--title">{{entity}}</h4>
    <fieldset class="gradient--modeswitch">
      <input
        type="checkbox"
        :id="'gradient--modeswitch__' + entity.toLowerCase()"
        name="gradient--modeswitch"
        @change="toggleMode"
      >
      <label :for="'gradient--modeswitch__' + entity.toLowerCase()">Show Trend</label>
    </fieldset>
    <span class="gradient--startyear">1990</span><span class="gradient--endyear">2016</span>
    <figure class="gradient--figure" :class="{ active: isActive }" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <g
          v-for="(value, index) in values"
          :key="index"
          @mouseover="setActiveValue(value), setActiveYear(index), setActiveCell(index)"
        >
          <rect
            :x="cellWidth * index"
            :y="0"
            :width="cellWidth"
            :height="gradientHeight"
            :fill="cellColor(value)"
            :stroke="cellColor(value)"
          ></rect>
          <rect
            :x="cellWidth * index"
            :y="gradientHeight / 2"
            :width="cellWidth"
            :height="gradientHeight"
            :fill="cellColorAbsolute(value)"
            :stroke="cellColorAbsolute(value)"
            v-show="isAbsolute"
          ></rect>
        </g>
        <line
          v-show="isAbsolute"
          x1="0"
          :y1="gradientHeight / 2"
          :x2="gradientWidth"
          :y2="gradientHeight / 2"
          stroke="white"
          stroke-width="1"
        ></line>
        <g v-show="isActive">
          <line
            :x1="cellWidth * activeCell"
            :y1="gradientHeight * 0.25"
            :x2="cellWidth * activeCell"
            :y2="gradientHeight * 0.75"
            stroke="white"
            stroke-width="1"
          ></line>
          <line
            :x1="cellWidth * activeCell + (cellWidth)"
            :y1="gradientHeight * 0.25"
            :x2="cellWidth * activeCell + (cellWidth)"
            :y2="gradientHeight * 0.75"
            stroke="white"
            stroke-width="1"
          ></line>
        </g>
      </svg>
    </figure>
    <div class="selected--year">
      <span>{{ activeYear }}:</span>
    </div>
    <div class="selected--value">
      <span>{{ new Intl.NumberFormat().format(activeValue.toFixed(0))}} ktǂ</span>
    </div>
    <div class="selected--percent__description">
      <span>Change from 1990:</span>
    </div>
    <div class="selected--percent__value">
      <span>{{ 100 - (100 / initialValue * activeValue).toFixed(0) }} %</span>
    </div>
  </section>
</template>

<script>
import chroma from "chroma-js"; // chroma for color scales

export default {
  name: "EmissionsGradient",
  props: [
    "intervalStart",
    "entity",
    "values",
    "initialValue",
    "maxValueRelative"
  ],
  data: function() {
    // define svg settings
    return {
      isActive: false,
      isAbsolute: false,
      gradientWidth: 412,
      gradientHeight: 100,
      activeValue: this.values[this.values.length - 1],
      activeYear: this.intervalStart + this.values.length - 1,
      activeCell: null
    };
  },
  computed: {
    cellWidth: function() {
      // compute width of cell
      return this.gradientWidth / this.values.length;
    },
    cellColor: function(value) {
      // compute color of cell using chroma.js
      //let maxValueDomain = (this.isAbsolute) ? Math.max(...this.values) : this.maxValueRelative
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, this.maxValueRelative]);
    },
    cellColorAbsolute: function() {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([Math.min(...this.values), Math.max(...this.values)]);
    }
  },
  methods: {
    setActiveValue: function(value) {
      this.activeValue = value;
    },
    setActiveYear: function(index) {
      this.activeYear = this.intervalStart + index;
    },
    setActiveCell: function (index) {
      this.activeCell = index
    },
    toggleMode: function() {
      this.isAbsolute = !this.isAbsolute;
    }
  },
  created: function() {},
  mounted: function() {
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper.offsetWidth;
    });
  }
};
</script>

<style scoped>
.gradient--wrapper {
  grid-column: span 1;
  padding: 1rem;
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header-left header-right"
    "above-center-left above-center-right"
    "center center"
    "footer-first-left footer-first-right"
    "footer-second-left footer-second-right";
  background-color: transparent;
}

.gradient--title {
  grid-area: header-left;
  margin-bottom: 0;
  /*border-bottom: 0.1rem dashed var(--color-grey-09);*/
}

.gradient--modeswitch {
  grid-area: header-right;
  text-align: right;
  border: none;
  padding: 0;
  margin: 0;
  color: white;
}

.gradient--figure {
  grid-area: center;
  width: 100%;
  line-height: 0;
  padding: 0;
  margin: 0;
  border: .1rem solid white;
  overflow: hidden;
}

.gradient--startyear {
  grid-area: above-center-left;
  text-align: left;
  color: white;
}

.gradient--endyear {
  grid-area: above-center-right;
  text-align: right;
  color: white;
}

.selected--year {
  grid-area: footer-first-left;
  padding-left: 1rem;
  border-left: .1rem solid white;
}

.selected--value {
  grid-area: footer-first-right;
  font-weight: 700;
  text-align: right;
  padding-right: 1rem;
  border-right: .1rem solid white;
}

.selected--percent__description {
  grid-area: footer-second-left;
  text-align: left;
  padding-left: 1rem;
  border-left: .1rem solid white;
}

.selected--percent__value {
  grid-area: footer-second-right;
  font-weight: 700;
  text-align: right;
  padding-right: 1rem;
  border-right: .1rem solid white;
}

.gradient--wrapper.active {
    background-color: rgba(255,255,255,0.2);
  }
</style>
