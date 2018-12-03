<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>GHG Development European Union</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sed? Laudantium facere similique dicta assumenda perferendis aut recusandae quos maxime cupiditate, quam at rerum ex earum modi, sed quasi voluptatem.</p>
    </section>
    <section class="c-main">
      <EmissionsGradient
        v-for="entity in euEntity"
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
import { mapGetters } from 'vuex'
import EmissionsGradient from '@/components/EmissionsGradient.vue'

export default {
  name: 'SectionEU',
  components: {
    EmissionsGradient
  },
  data: function() {
    return {}
  },
  computed: {
    intervalStart: function() {
      return this.$store.state.data.intervalStart
    },
    ...mapGetters(['euEntity'])
  }
}
</script>

<style scoped>
</style>
