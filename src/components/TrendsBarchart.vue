<template>
  <g>
    <rect
      :x="bar(entity.values, index).x"
      :y="bar(entity.values, index).y"
      :class="entity.name"
      :width="bar(entity.values, index).width"
      :height="bar(entity.values, index).height"
    ></rect>
  </g>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "TrendsBarhhart",
  props: ["width", "height", "values", "maxValue"],
  data: function() {
    return {

    }
  },
  computed: {

  }
};
</script>

<style scoped>
</style>
