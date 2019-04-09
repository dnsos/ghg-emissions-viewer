<template>
  <article class="grid--12-columns chapter chapter--comparison">
    <section class="chapter__block">
      <p>When applying this color encoding to each year from 1990 to 2016, we can observe that Germany continuously contributes way more CO2 equivalent than Cyprus with its - almost “invisible” - emissions.</p>
    </section>
    <section class="chapter__block">
      <section
        v-for="entity in sortedEntities"
        :key="entity.name"
        class="grid--comparison"
      >
      <span style="font-size: var(--font-size-small)">{{ entity.name }}</span>
      <svg
        :width="687"
        :height="20"
      >
        <Gradient
          :width="687"
          :height="20"
          :values="entity.values"
          :maxValue="maxValueWithoutEu"
        />
      </svg>
      </section>
    </section>
  </article>
</template>

<script>
import Gradient from "@/components/Gradient.vue"

export default {
  name: 'SectionComparison',
  components: {
    Gradient
  },
  data: function () {
    return { }
  },
  computed: {
    intervalStart: function() {
      return this.$store.state.data.intervalStart
    },
    eu28Entities: function() {
      return this.$store.getters.eu28Entities
    },
    sortedEntities: function () {
      return this.$store.getters.sortedEU28Entities
    },
    maxValueWithoutEu: function () {
      let maxEntity = this.eu28Entities.map(entity => Math.max(...entity.values))
      return Math.max(...maxEntity)
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
.grid--comparison {
  display: grid;
  grid-template-columns: 3fr 9fr;
}
</style>
