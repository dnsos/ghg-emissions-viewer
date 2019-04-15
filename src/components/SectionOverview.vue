<template>
  <article class="grid--12-columns chapter chapter--overview">
    <section class="chapter__block">
      <p>With this in mind, we can now assess the developments of Greenhouse Gas emissions on two relevant scales:</p>
      <ul>
        <li>a scale for an individual trend of one entity, relative to its own reference value in 1990</li>
        <li>a linear scale between zero emissions and the highest emission value within the EU countries</li>
      </ul>
      <p>Layering the visual elements of the trendline and the colour encoded boxes, two relevant aspects are visible simultaneously and allow for a well-informed assessment of emission developments.</p>
      <p>In the following, this two-scale encoding is applied to each EU member state and can be explored.</p>
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
