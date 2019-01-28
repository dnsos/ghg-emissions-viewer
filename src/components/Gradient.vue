<template>
  <g class="gradient">
    <g v-for="(value, index) in values" :key="index">
      <rect
        :x="cellWidth * index"
        y="0"
        :width="cellWidth"
        :height="height"
        :fill="cellColor(value)"
        :stroke="cellColor(value)"
      ></rect>
    </g>
  </g>
</template>

<script>
import chroma from "chroma-js"

export default {
  name: "Gradient",
  props: ["width", "height", "values", "maxValue"],
  data: function() {
    return {}
  },
  computed: {
    cellWidth: function() {
      return this.width / this.values.length
    },
    cellColor: function(value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, this.maxValue]);
    }
  }
};
</script>

<style scoped>
</style>
