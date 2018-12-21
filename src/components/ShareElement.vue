<template>
  <rect
    :x="shareSettings(shareValues).x"
    :width="shareSettings(shareValues).width"
  ></rect>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "ShareElement",
  props: ['shareValues', 'yearSum', 'gradientWidth'],
  data: function() {
    return {

    }
  },
  computed: {

  },
  methods: {
    shareSettings: function(shareValues) {
      const startValue = shareValues[0][0],
        endValue = shareValues[0][1]
      const xScale = d3
        .scaleLinear()
        .range([0, this.gradientWidth])
        .domain([0, this.yearSum])

      return {
        x: xScale(startValue),
        width: xScale(endValue - startValue)
      };
    }
  },
  mounted: function() {
  }
};
</script>

<style scoped>
</style>
