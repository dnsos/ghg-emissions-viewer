<template>
  <div class="wrapper__colorscale">
    <div class="colorscale"></div>
    <div class="indicator--max">
        <p class="colorscale__indicator">Highest emission value within EU</p>
        <p>1,263,708 kt</p>
      </div>
      <div class="indicator--min">
        <p class="colorscale__indicator">No emissions</p>
        <p>0 kt</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "ColorScale"
}
</script>

<style scoped>
.wrapper__colorscale {
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: max-content;
  grid-gap: calc(var(--grid-spacing) / 4);
  grid-template-areas: 
    "g max"
    "g ."
    "g min";
  font-family: var(--font-family-mono);
  font-size: var(--font-size-small);
}

p {
  margin-bottom: 0;
  text-align: left;
}

.colorscale {
  grid-area: g;
  width: 1rem;
  height: 15rem;
  background: linear-gradient(0deg, #79cde5, #000);
  margin-bottom: calc(var(--grid-spacing) / 4);
  border: .1rem dashed white;
}

.indicator--min {
  grid-area: min;
}

.indicator--max {
  grid-area: max;
}

.colorscale__indicator {
  font-weight: 700;
}
</style>
