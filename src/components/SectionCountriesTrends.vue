<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <p>Let's now take a look at individual countries.</p>
    </section>
    <section class="chapter__content">
        <section
            v-for="entity in eu28Entities"
            :key="entity.name"
            >
            <span class="indicator__change">
                    <i :class="[entity.values[entity.values.length -1 ] < entity.values[0] ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>
                    {{ Math.abs(100 - (100 / entity.values[0] * entity.values[entity.values.length - 1]).toFixed(0)) }} %
                </span>
            <h5>{{ entity.name }}</h5>
        </section>
      </section>
  </article>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  data: function() {
    return {
    }
  },
  computed: {
    eu28Entities: function() {
        return this.$store.getters.eu28Entities
    }
  }
}
</script>

<style scoped>
.indicator__change {
    font-weight: 700;
    background-color: white;
}
</style>
