<template>
  <article class="grid--12-columns chapter chapter--intro">
    <section class="chapter__block">
      <h1>The EU and its Greenhouse Gas emissions</h1>
      <p>A visual argument for assessing Greenhouse Gas emissions from two angles.</p>
      <p>EXPLORE</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'SectionIntro',
  props: [],
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.chapter--intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: calc(var(--grid-spacing) * 4);
  text-align: center;
}
</style>
