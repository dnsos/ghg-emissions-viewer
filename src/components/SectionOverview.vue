<template>
  <article class="grid--12-columns chapter chapter--overview">
    <section class="chapter__block">
      <p>With the visual representations of all EU members simultaneously visible, it is now possible to explore and compare the developments in different contexts.</p>
      <figure>Stacked overview of explorers</figure>
      <fieldset>
        <div class="checkbox--custom" :checked="allTrendsAreActive">
          <input 
            type="checkbox" 
            name="toggle-all-trends" 
            id="toggle-all-trends"
            v-model="allTrendsAreActive"
          >
        </div>
        <label for="toggle-all-trends">Show all trends</label>
      </fieldset>
    </section>
    <section class="grid--autofit chapter__block chapter__block--wide">
      <EmissionsGradient
        v-for="entity in eu28Entities"
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
import EmissionsGradient from "@/components/EmissionsGradient.vue"

export default {
  name: "SectionOverview",
  components: {
    EmissionsGradient
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
    maxValueWithoutEu: function () {
      let maxEntity = this.eu28Entities.map(entity => Math.max(...entity.values))
      return Math.max(...maxEntity)
    }
  }
}
</script>

<style scoped>
</style>
