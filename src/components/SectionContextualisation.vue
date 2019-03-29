<template>
  <article class="grid--12-columns chapter chapter--contextualisation">
    <section class="chapter__block">
      <p>Most countries reduced their emissions while only few reported increases. Let’s look exemplarily at Cyprus and Germany.</p>
      <p class="figure__description">Greenhouse Gas emissions in 2016</p>
    </section>
    <section class="chapter__block change-squares">
      <div class="change-square" :style="'background-color:' + cellColor(9658) + ';'">
        <div class="indicator--country">Cyprus</div>
        <div class="indicator--values">
          <h4 class="indicator--highlighted"><i :class="[53 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>53 %</h4>
          <h4 v-show="isInContext">9,658 kt</h4>
        </div>
      </div>
      <div class="change-square" :style="'background-color:' + cellColor(935822) + ';'">
        <div class="indicator--country">Germany</div>
        <div class="indicator--values">
          <h4 class="indicator--highlighted"><i :class="[-26 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>26 %</h4>
          <h4 v-show="isInContext">935,822 kt</h4>
        </div>
      </div>
    </section>
    <section class="chapter__block">
      <p>The <span class="indicator--highlighted"><i :class="[53 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>53 %</span> increase of Cyprus is certainly not desirable and Germany’s reduction of <span class="indicator--highlighted"><i :class="[-26 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>26 %</span> a step in the right direction. Still, when looking at the actual emission values, we see that in the [relevant] year Germany emitted way more CO2 equivalent than Cyprus did.</p>
      <button @click="toggleContextualisation">Show colors</button>
    </section>
  </article>
</template>

<script>
import chroma from "chroma-js"

export default {
  name: "SectionContextualisation",
  components: {
  },
  data: function() {
    return {
        isInContext: false
    }
  },
  computed: {
    eu28Entities: function () {
        return this.$store.getters.eu28Entities
    },
    cellColor: function (value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])
    },
    activeYear: function () {
      return 1990 + this.rangeValue;
    },
    testCellColor: function (value) {
      const color = chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])

      if (this.isInContext) {
        return color(value)
      } else {
        return color(0)
      }
    }
  },
  methods: {
    toggleContextualisation: function () {
      this.isInContext = !this.isInContext
    }
  }
}
</script>

<style scoped>
.change-squares {
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
}

.change-squares::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.change-squares > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.change-square {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content;
  grid-template-areas: 
    "h h h"
    "c c c";
  font-family: var(--font-family-mono);
  border: .1rem dashed white;
  background-color: transparent;
}

.change-square .indicator--country {
  grid-area: h;
  padding-left: .5rem;
  color: white;
}

.change-square .indicator--values {
  grid-area: c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.indicator--values i {
  vertical-align: sub;
}

.indicator--values h4 {
  margin-bottom: 0;
}
</style>
