<template>
  <div class="change-square" :style="'background-color:' + squareColor + ';'">
    <div class="indicator--country">{{ entity }}</div>
    <div class="indicator--values">
      <h4 class="indicator--highlighted"><i :class="[change < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(change) }} %</h4>
      <h4 v-show="isInContext">{{ format(value) }} kt</h4>
    </div>
  </div>
</template>

<script>
import chroma from "chroma-js"

export default {
  name: "ChangeSquare",
  props: ["entity", "value", "change", "isInContext"],
  data: function() {
    return {}
  },
  computed: {
    squareColor: function () {
      const color = chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])

      if (this.isInContext) {
        return color(this.value)
      } else {
        return color(0)
      }
    }
  }
}
</script>

<style scoped>
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
