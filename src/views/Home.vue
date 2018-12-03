<template>
  <main>
    <SectionIntro />
    <SectionEU />
    <SectionShares />
    <SectionComparison />
    <SectionOverview />
    <SectionAbout />
  </main>
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
      
    }
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
main {
  max-width: 120rem;
}
  .c-introduction {
    grid-column: span 12;
  }

  @media (min-width: 85rem) {
    .c-introduction {
      grid-column: span 4;
    }
  }

  .c-main {
    grid-column: span 12;
  }

  @media (min-width: 85rem) {
    .c-main {
      grid-column: span 8;
    }
  }

  .s-wrapper {
    min-height: 100vh;
  }
</style>
