<template>
  <section class="s-introduction">
    <h1>Greenhouse Gas Emissions by country</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi inventore blanditiis, incidunt distinctio nulla itaque nesciunt earum libero. Sint minus provident corporis. Sunt necessitatibus repellat, animi non hic veniam odit.</p>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
  props: { }
}
</script>

<style scoped>

.s-introduction {
  grid-column: span 12;
  margin-bottom: calc(var(--grid-spacing) * 2);
}

@media (min-width: 850px) {
  .s-introduction {
    grid-column: span 6;
  }
}

  h1 {
    color: var(--color-primary);
  }
</style>
