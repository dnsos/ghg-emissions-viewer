<template>
  <section>
    <section class="s-grid">
      <Introduction />
    </section>
    <section class="s-grid s-eu">
      EU values
    </section>
    <section class="s-grid s-shares">
      Countries' total shares
    </section>
    <section class="s-grid s-comparison">
      <ComparisonGradient />
    </section>
    <section class="s-grid__autofit s-overview">
      <EmissionsGradient
        v-for="entity in ghg.entities"
        :key="entity.name"
        :intervalStart="ghg.intervalStart"
        :initialValue="entity.values[0]"
        :entity="entity.name"
        :values="entity.values"
      />
    </section>
    <section class="s-grid s-about">
      About section
    </section>
  </section>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import ComparisonGradient from '@/components/ComparisonGradient.vue'
import EmissionsGradient from '@/components/EmissionsGradient.vue'

export default {
  name: 'home',
  data: function () {
    return {
      ghg: {}
    }
  },
  created: function () {
    let vm = this
    fetch('data.json')
      .then(response => response.json())
      .then(data => vm.ghg = data)
  },
  components: {
    Introduction,
    ComparisonGradient,
    EmissionsGradient
  }
}
</script>

<style scoped>
  .s-introduction, .s-eu, .s-shares, .s-comparison, .s-overview, .s-about {
    min-height: 100vh;
  }
  
  .s-overview {
    background-color: var(--color-grey-02);
  }
</style>
