<template>
  <section class="s-comparison__gradient">
    <p>Comparison Gradient</p>
  </section>
</template>

<script>
import chroma from 'chroma-js' // chroma for color scales

export default {
  name: 'ComparisonGradient',
  props: []
}
</script>

<style scoped>

.s-comparison__gradient {
    grid-column: span 12;
}

@media (min-width: 850px) {
  .s-comparison__gradient {
    grid-column: span 6;
  }
}

</style>
