<template>
  <article class="grid--12-columns chapter chapter--intro">
    <section class="chapter__block">
      <h1>The EU and its Greenhouse Gas emissions</h1>
      <p>A visual argument for assessing Greenhouse Gas emissions on two scales</p>
      <p class="indicator">Scroll down to explore</p>
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
  text-align: center;
}

@media (min-width: 750px) {
  .chapter__block {
    max-width: 700px;
    margin: 0 auto;
  }
}

.chapter--intro h1 {
  /*background: linear-gradient(to right, #5790a1 0%, black 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;*/
  color: white;
  font-family: var(--font-family-mono);
}
</style>
