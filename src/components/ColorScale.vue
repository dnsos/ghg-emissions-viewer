<template>
  <div class="wrapper__colorscale">
    <div class="colorscale"></div>
    <div>
      <p class="colorscale__indicator">No emissions</p>
      <p>0 kt</p>
    </div>
    <div class="colorscale__max">
      <p class="colorscale__indicator">Highest emission value within EU</p>
      <p>1,263,708 kt</p>
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
  padding: calc(var(--grid-spacing) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-small);
  background-color: #ffffff36;
}

p {
  margin-bottom: 0;
}

.colorscale {
  grid-column: span 2;
  width: 100%;
  height: 1rem;
  background: linear-gradient(90deg, #79cde5, #000);
  margin-bottom: calc(var(--grid-spacing) / 4);
  border: .1rem dashed white;
}

.colorscale__max {
  text-align: right;
}

.colorscale__indicator {
  font-weight: 700;
}
</style>
