<template>
  <main>
    <SectionIntro />
    <SectionEU />
    <SectionCountriesTrends />
    <SectionContextualisation />
    <SectionStackedGradients />
    <SectionOverview />
    <SectionAbout />
  </main>
</template>

<script>
import SectionIntro from '@/components/SectionIntro.vue'
import SectionEU from '@/components/SectionEU.vue'
import SectionCountriesTrends from '@/components/SectionCountriesTrends.vue'
import SectionContextualisation from '@/components/SectionContextualisation.vue'
import SectionShares from '@/components/SectionShares.vue'
import SectionStackedGradients from '@/components/SectionStackedGradients.vue'
import SectionOverview from '@/components/SectionOverview.vue'
import SectionAbout from '@/components/SectionAbout.vue'

export default {
  name: 'home',
  data: function () {
    return {
    }
  },
  components: {
    SectionIntro,
    SectionEU,
    SectionCountriesTrends,
    SectionContextualisation,
    SectionShares,
    SectionStackedGradients,
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
