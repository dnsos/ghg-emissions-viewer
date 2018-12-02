<template>
  <section class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Overview of data from all EU countries</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum natus exercitationem odit sint hic dolorum iure reiciendis itaque dolorem doloremque suscipit expedita sit quam, atque eum nostrum iste in qui.</p>
    </section>
    <section class="s-grid__autofit o-overview">
        <EmissionsGradient
          v-for="entity in entities"
          :key="entity.name"
          :intervalStart="intervalStart"
          :initialValue="entity.values[0]"
          :entity="entity.name"
          :values="entity.values"
        />
      </section>
  </section>
</template>

<script>
import EmissionsGradient from '@/components/EmissionsGradient.vue'

export default {
  name: 'SectionOverview',
  props: ['entities', 'intervalStart'],
  data: function () {
    return {

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
