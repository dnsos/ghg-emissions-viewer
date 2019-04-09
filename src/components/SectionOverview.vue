<template>
  <article class="grid--12-columns chapter chapter--overview">
    <section class="chapter__block">
      <p>With the visual representations of all EU members simultaneously visible, it is now possible to explore and compare the developments in different contexts.</p>
    </section>
    <section class="grid--autofit chapter__block chapter__block--wide">
      <Explorer
        v-for="entity in sortedEntities"
        :key="entity.name"
        :intervalStart="intervalStart"
        :initialValue="entity.values[0]"
        :entity="entity.name"
        :values="entity.values"
        :maxValueRelative="maxValueWithoutEu"
        :initialTrendState="allTrendsAreActive"
      />
    </section>
  </article>
</template>

<script>
import Explorer from "@/components/Explorer.vue"

export default {
  name: "SectionOverview",
  components: {
    Explorer
  },
  data: function() {
    return {
      allTrendsAreActive: true
    }
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
  }
}
</script>

<style scoped>
</style>
