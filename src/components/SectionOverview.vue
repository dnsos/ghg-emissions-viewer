<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Overview of data from all EU countries</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum natus exercitationem odit sint hic dolorum iure reiciendis itaque dolorem doloremque suscipit expedita sit quam, atque eum nostrum iste in qui.</p>
    </section>
    <section class="s-grid__autofit o-overview">
      <EmissionsGradient
        v-for="entity in allEntitiesExceptEU"
        :key="entity.name"
        :intervalStart="intervalStart"
        :initialValue="entity.values[0]"
        :entity="entity.name"
        :values="entity.values"
      />
    </section>
  </article>
</template>

<script>
import EmissionsGradient from "@/components/EmissionsGradient.vue"

export default {
  name: "SectionOverview",
  data: function() {
    return {}
  },
  computed: {
    intervalStart: function() {
      return this.$store.state.data.intervalStart
    },
    allEntitiesExceptEU: function() {
      return this.$store.getters.allEntitiesExceptEU
    }
  },
  components: {
    EmissionsGradient
  }
}
</script>

<style scoped>
.o-overview {
  grid-column: span 12;
}
</style>
