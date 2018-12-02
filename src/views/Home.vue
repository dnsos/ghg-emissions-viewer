<template>
  <section>
    <SectionIntro />
    <SectionEU />
    <SectionShares :entities="ghg.entities" />
    <SectionComparison />
    <SectionOverview :entities="ghg.entities" :intervalStart="ghg.intervalStart" />
    <SectionAbout />
  </section>
</template>

<script>
import ComparisonGradient from '@/components/ComparisonGradient.vue'
import EmissionsGradient from '@/components/EmissionsGradient.vue'

import SectionIntro from '@/components/SectionIntro.vue'
import SectionEU from '@/components/SectionEU.vue'
import SectionShares from '@/components/SectionShares.vue'
import SectionComparison from '@/components/SectionComparison.vue'
import SectionOverview from '@/components/SectionOverview.vue'
import SectionAbout from '@/components/SectionAbout.vue'

export default {
  name: 'home',
  data: function () {
    return {
      ghg: {}
    }
  },
  created: function () {
    // call fettch action here
    this.$store.dispatch('fetchData')

    /*let vm = this
    fetch('data.json')
      .then(response => response.json())
      .then(data => vm.ghg = data)*/
  },
  components: {
    ComparisonGradient,
    EmissionsGradient,
    SectionIntro,
    SectionEU,
    SectionShares,
    SectionComparison,
    SectionOverview,
    SectionAbout
  }
}
</script>

<style>
  .c-introduction {
    grid-column: span 12;
  }

  @media (min-width: 850px) {
    .c-introduction {
      grid-column: span 6;
    }
  }

  .s-wrapper {
    min-height: 100vh;
  }
</style>
