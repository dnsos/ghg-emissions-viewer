<template>
  <header class="introduction">
    <h1>Greenhouse Gas Emissions by country</h1>
  </header>
</template>

<script>
export default {
  name: 'Introduction',
  props: { }
}
</script>

<style scoped>

.introduction {
  display: flex;
  align-items: center;
}

  h1 {
    color: var(--primary-color);
  }
</style>
