<template>
  <section
    class="c-gradient"
    :class="{ active: isActive }"
    :id="'c-gradient__' + entity.toLowerCase()"
    v-cloak
    @mouseout="isActive = !isActive"
    @mouseover="isActive = !isActive"
  >
    <h4>{{entity}}</h4>
    <fieldset class="mode__selector">
      <input
        type="checkbox"
        :id="'mode-absolute__' + entity.toLowerCase()"
        name="mode-absolute"
        @change="toggleMode"
      >
      <label :for="'mode-absolute__' + entity.toLowerCase()">Show isolated trend</label>
    </fieldset>
    <!-- SVG ELement for Emissions Gradient -->
    <figure :class="{ active: isActive }" ref="wrapper">
      <svg :width="gradientWidth" :height="gradientHeight">
        <g
          v-for="(value, index) in values"
          :key="index"
          @mouseover="setActiveValue(value), setActiveYear(index)"
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
            :y="0"
            :width="cellWidth"
            :height="gradientHeight / 2"
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
          stroke="#ff3939"
          stroke-width="5"
        ></line>
      </svg>
    </figure>
    <p>{{ activeYear }}: {{ new Intl.NumberFormat().format(activeValue.toFixed(0))}}</p>
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
      activeYear: this.intervalStart + this.values.length - 1
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
        .scale(["white", "black"])
        .domain([0, this.maxValueRelative]);
    },
    cellColorAbsolute: function() {
      return chroma
        .scale(["white", "black"])
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
.c-gradient {
  grid-column: span 1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "h h m"
    "g g g"
    "c c c";
  background-color: white;
}

h4 {
  grid-area: h;
  margin-bottom: 0;
  border-bottom: 0.1rem dashed var(--color-grey-09);
}

fieldset.mode__selector {
  grid-area: m;
  border: none;
  padding: 0;
  margin: 0;
}

.mode__selector * {
  color: var(--color-secondary);
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
  border-top: 0.1rem dashed var(--color-grey-09);
}

/*figure.active {
    outline: 8px dashed var(--color-secondary);
    outline-offset: 0px;
  }*/
</style>
