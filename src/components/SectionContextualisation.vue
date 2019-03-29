<template>
  <article class="grid--12-columns chapter chapter--contextualisation">
    <section class="chapter__block">
      <p>Most countries reduced their emissions while only few reported increases. Let’s look exemplarily at Cyprus and Germany.</p>
      <p class="figure__description">Greenhouse Gas emissions in 2016</p>
    </section>
    <section class="chapter__block change-squares">
      <ChangeSquare entity="Cyprus" value="9658" change="53" :isInContext="isInContext" />
      <ChangeSquare entity="Germany" value="935822" change="-26" :isInContext="isInContext" />
    </section>
    <section class="chapter__block">
      <p>The <span class="indicator--highlighted"><i :class="[53 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>53 %</span> increase of Cyprus is certainly not desirable and Germany’s reduction of <span class="indicator--highlighted"><i :class="[-26 < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>26 %</span> a step in the right direction. Still, when looking at the actual emission values, we see that in the [relevant] year Germany emitted way more CO2 equivalent than Cyprus did.</p>
      <button @click="toggleContextualisation">Add context</button>
    </section>
  </article>
</template>

<script>
import ChangeSquare from "@/components/ChangeSquare.vue"

export default {
  name: "SectionContextualisation",
  components: {
    ChangeSquare
  },
  data: function() {
    return {
        isInContext: false
    }
  },
  computed: {
    eu28Entities: function () {
        return this.$store.getters.eu28Entities
    },
    activeYear: function () {
      return 1990 + this.rangeValue;
    }
  },
  methods: {
    toggleContextualisation: function () {
      this.isInContext = !this.isInContext
    }
  }
}
</script>

<style scoped>
.change-squares {
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
}

.change-squares::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.change-squares > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
</style>
