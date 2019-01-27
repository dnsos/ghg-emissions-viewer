<template>
  <section
    class="wrapper"
    :class="{ active: isActive }"
    :id="'wrapper--' + entity.toLowerCase()"
    @mouseover="isActive = !isActive"
    @mouseout="isActive = !isActive"
  >
    <h4 class="title--entity">{{entity}}</h4>
    <fieldset class="toggle--trend">
      <div class="checkbox--trend__wrapper" :class="{ 'checkbox--trend__active': trendIsActive }">
        <input
          type="checkbox"
          :id="'toggle--trend__' + entity.toLowerCase()"
          name="toggle--trend"
          @change="toggleMode"
        >
      </div>
      <label :for="'toggle--trend__' + entity.toLowerCase()">Trend</label>
    </fieldset>
    <span class="indicator--startyear">1990</span><span class="indicator--endyear">2016</span>
    <figure class="wrapper--gradient" :class="{ active: isActive }" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <!--<Gradient 
          :width="gradientWidth"
          :height="gradientHeight"
          :values="values"
          :maxValue="maxValueRelative"
        />-->
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
        </g>
        <path v-show="true" class="trendpath" :d="trendpathData(values)"></path>
        <g v-show="isActive">
          <line
            :x1="cellWidth * activeCell"
            :y1="gradientHeight * 0.25"
            :x2="cellWidth * activeCell"
            :y2="gradientHeight * 0.75"
            stroke="red"
            stroke-width="1"
          ></line>
          <line
            :x1="cellWidth * activeCell + (cellWidth)"
            :y1="gradientHeight * 0.25"
            :x2="cellWidth * activeCell + (cellWidth)"
            :y2="gradientHeight * 0.75"
            stroke="red"
            stroke-width="1"
          ></line>
        </g>
      </svg>
    </figure>
    <div class="indicator--active-year">
      <span>{{ activeYear }}:</span>
    </div>
    <div class="indicator--active-value">
      <span>{{ new Intl.NumberFormat().format(activeValue.toFixed(0))}} ktǂ</span>
    </div>
    <div class="indicator--change-description">
      <span>Change from 1990:</span>
    </div>
    <div class="indicator--active-change" v-show="activeValue != initialValue">
      <i :class="[activeValue < initialValue ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i><span>{{ Math.abs(100 - (100 / initialValue * activeValue).toFixed(0)) }} %</span>
    </div>
  </section>
</template>

<script>
import Gradient from "@/components/Gradient.vue"
import chroma from "chroma-js"
import * as d3 from "d3"

export default {
  name: "EmissionsGradient",
  props: [
    "intervalStart",
    "entity",
    "values",
    "initialValue",
    "maxValueRelative"
  ],
  components: {
    Gradient
  },
  data: function() {
    // define svg settings
    return {
      isActive: false,
      trendIsActive: false,
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
    },
    trendpathData: function() {
      // x-scale based on width of gradient and length of input array
      const xScale = d3.scaleLinear()
        .range([0, this.gradientWidth])
        .domain([0, this.values.length]);

      // y-scale based on height of gradient and min and max values of inpit array (flipped)
      const yScale = d3.scaleLinear()
        .range([0, this.gradientHeight])
        .domain([Math.max(...this.values), Math.min(...this.values)]);

      // generate path using d3.line and previously defined scales
      return d3
        .line(this.values)
        .x((d, i) => { return xScale(i) + this.cellWidth / 2 })
        .y((d, i) => { return yScale(d) })
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
      this.trendIsActive = !this.trendIsActive;
    }
  },
  created: function() {
  },
  mounted: function() {
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper.offsetWidth;
    });
  }
};
</script>

<style scoped>
.wrapper {
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

.title--entity {
  grid-area: header-left;
  margin-bottom: 0;
  /*border-bottom: 0.1rem dashed var(--color-grey-09);*/
}

.toggle--trend {
  grid-area: header-right;
  text-align: right;
  border: none;
  padding: 0;
  margin: 0;
  color: white;
}

.wrapper--gradient {
  grid-area: center;
  width: 100%;
  line-height: 0;
  padding: 0;
  margin: 0;
  border: .1rem solid white;
  overflow: hidden;
}

.indicator--startyear, .indicator--endyear {
  font-size: var(--font-size-small);
}

.indicator--startyear {
  grid-area: above-center-left;
  text-align: left;
  color: white;
}

.indicator--endyear {
  grid-area: above-center-right;
  text-align: right;
  color: white;
}

.indicator--active-year {
  grid-area: footer-first-left;
  padding-left: 1rem;
  border-left: .1rem solid white;
}

.indicator--active-value {
  grid-area: footer-first-right;
  font-weight: 700;
  text-align: right;
  padding-right: 1rem;
  border-right: .1rem solid white;
}

.indicator--change-description {
  grid-area: footer-second-left;
  text-align: left;
  padding-left: 1rem;
  border-left: .1rem solid white;
}

.indicator--active-change {
  grid-area: footer-second-right;
  font-weight: 700;
  text-align: right;
  padding-right: 1rem;
  border-right: .1rem solid white;
}

.wrapper.active {
    background-color: rgba(255,255,255,0.2);
  }

.checkbox--trend__wrapper {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: .8rem;
  vertical-align: middle;
  background-color: transparent;
  border: .1rem solid white;
}

.checkbox--trend__wrapper.checkbox--trend__active {
  background-color: white;
}

.checkbox--trend__wrapper input {
  opacity: 0;
  margin: 0;
  vertical-align: top;
}

.trendpath {
  stroke: white;
  stroke-width: .1rem;
  fill: transparent;
}

.arrow--forward {
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  vertical-align: top;
  background-image: url("../assets/arrow_forward.svg");
  transition: transform .25s;
}

.arrow--decreasing {
  transform: rotate(45deg);
}

.arrow--increasing {
  transform: rotate(-45deg);
}
</style>
