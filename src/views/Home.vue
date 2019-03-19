<template>
  <main>
    <SectionEU />
    <SectionCountriesTrends />
    <SectionContextualisation />
    <SectionComparison />
    <SectionDetail />
    <SectionOverview />
    <SectionAbout />
  </main>
</template>

<script>
import SectionEU from '@/components/SectionEU.vue'
import SectionCountriesTrends from '@/components/SectionCountriesTrends.vue'
import SectionContextualisation from '@/components/SectionContextualisation.vue'
import SectionShares from '@/components/SectionShares.vue'
import SectionComparison from '@/components/SectionComparison.vue'
import SectionDetail from '@/components/SectionDetail.vue'
import SectionOverview from '@/components/SectionOverview.vue'
import SectionAbout from '@/components/SectionAbout.vue'

export default {
  name: 'home',
  data: function () {
    return {
    }
  },
  components: {
    SectionEU,
    SectionCountriesTrends,
    SectionContextualisation,
    SectionShares,
    SectionComparison,
    SectionDetail,
    SectionOverview,
    SectionAbout
  }
}
</script>

<style>
  main > *:first-child {
    padding-top: var(--grid-spacing);
  }
</style>
