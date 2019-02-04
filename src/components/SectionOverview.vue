<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <h2><span>Overview of data from all EU countries</span></h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum natus exercitationem odit sint hic dolorum iure reiciendis itaque dolorem doloremque suscipit expedita sit quam, atque eum nostrum iste in qui.</p>
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
    <section class="grid--autofit chapter__content">
      <EmissionsGradient
        v-for="entity in allEntitiesExceptEU"
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
    allEntitiesExceptEU: function() {
      return this.$store.getters.allEntitiesExceptEU
    },
    maxValueWithoutEu: function () {
      let maxEntity = this.allEntitiesExceptEU.map(entity => Math.max(...entity.values))
      return Math.max(...maxEntity)
    }
  },
  methods: {
  },
  mounted: function() {
  }
}
</script>

<style scoped>
</style>
