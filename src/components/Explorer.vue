<template>
  <section
    class="explorer"
    :class="{ active: isHovered }"
    :id="'explorer__' + entity.toLowerCase()"
    @mouseover="isHovered = !isHovered"
    @mouseout="isHovered = !isHovered"
  >
    <h4 class="title--entity">{{entity}}</h4>
    <span class="indicator--small-font indicator--startyear">1990</span>
    <span class="indicator--small-font indicator--endyear">2016</span>
    <figure class="wrapper--gradient" :class="{ active: isHovered }" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <Gradient 
          :width="gradientWidth"
          :height="gradientHeight"
          :values="values"
          :maxValue="maxValueRelative"
        />
        <line class="reference-line" :x1="cellWidth / 2" :y1="gradientHeight / 2" :x2="gradientWidth" :y2="gradientHeight / 2" />
        <Trendpath v-show="trendIsActive" :values="values" :width="gradientWidth" :height="gradientHeight" />
        <g class="gradient--overlay">
          <rect
            v-for="(value, index) in values"
            :key="index"
            class="overlay-cell"
            @mouseover="activateCell(value, index)"
            :x="cellWidth * index"
            :y="0"
            :width="cellWidth"
            :height="gradientHeight"
          ></rect>
        </g>
      </svg>
    </figure>
    <div class="indicator--active-year">
      <span>{{ activeYear }}</span>
    </div>
    <div class="indicator--active-value">
      <span>{{ format(activeValue)}} kt</span>
    </div>
    <div class="indicator--change-description">
      <span>Change from {{ intervalStart }}</span>
    </div>
    <div class="indicator--active-change" v-show="activeValue != initialValue">
      <span>
        <i :class="[activeValue < initialValue ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(getPercentageChange(initialValue, activeValue).toFixed(0)) }} %</span>
    </div>
  </section>
</template>

<script>
import Gradient from "@/components/Gradient.vue"
import Trendpath from "@/components/Trendpath.vue"
import chroma from "chroma-js"

export default {
  name: "Explorer",
  props: [
    "intervalStart",
    "entity",
    "values",
    "initialValue",
    "maxValueRelative",
    "initialTrendState"
  ],
  components: {
    Gradient,
    Trendpath
  },
  data: function() {
    return {
      isHovered: false,
      trendIsActive: this.initialTrendState,
      gradientWidth: 412,
      activeValue: this.values[this.values.length - 1],
      activeYear: this.intervalStart + this.values.length - 1
    }
  },
  computed: {
    gradientHeight: function () {
      return this.gradientWidth / 3
    },
    cellWidth: function() {
      return this.gradientWidth / this.values.length
    },
    cellColor: function(value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, this.maxValueRelative])
    }
  },
  methods: {
    activateCell: function(value, index) {
      this.activeYear = this.intervalStart + index
      this.activeValue = value
    },
    toggleMode: function() {
      this.trendIsActive = !this.trendIsActive
    }
  },
  mounted: function() {
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
.explorer {
  grid-column: span 1;
  display: grid;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header header"
    "above-center-left above-center-right"
    "center center"
    "footer-first-left footer-first-right"
    "footer-second-left footer-second-right";
  background-color: transparent;
  font-family: var(--font-family-mono);
}

.title--entity {
  grid-area: header;
  margin-bottom: 0;
}


.wrapper--gradient {
  grid-area: center;
  width: 100%;
  line-height: 0;
  border: .1rem dashed white;
  overflow: hidden;
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
  font-weight: 700;
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

.indicator--active-value span {
  padding: 0 .5rem;
  background-color: white;
}

.indicator--active-change span {
  padding-right: .5rem;
  background-color: white;
}

.wrapper.active {
    box-shadow: 0 0 1rem rgba(0,0,0,0.15);
  }

.overlay-cell {
  fill: transparent;
  stroke: transparent;
  stroke-width: 1;
}

.overlay-cell:hover {
  stroke: white;
}
</style>
