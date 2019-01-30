<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <p>However, 20% for countries like Malta, Liechtenstein or Iceland is not the same as 20% for an industrial nation like France or Germany.</p>
      <p>Imagine this blue rectangle as representing zero emissions and this black rectangle as representing the highest emitted value within the EU members.</p>
      <p>Now let's see how much Greenhouse Gases each country actually emits. Here we show the most recent emission values from 2016.</p>
    </section>
    <section class="grid--autofill-squares chapter__content">
        <div
            v-for="entity in allEntitiesExceptEU"
            :key="entity.name"
            class="share"
            :id="'share__' + entity.name.toLowerCase()"
            :style="{ 'background-color': cellColor(entity.values[entity.values.length - 1]) }"
        >
            <p class="share__entity">{{ entity.name }}</p>
            <p class="share__value">{{  new Intl.NumberFormat().format(entity.values[entity.values.length - 1].toFixed(0)) }} ktǂ</p>
        </div>
    </section>
  </article>
</template>

<script>
import chroma from "chroma-js"

export default {
  name: "SectionContextualisation",
  components: {
  },
  data: function() {
    return {}
  },
  computed: {
    allEntitiesExceptEU: function() {
        return this.$store.getters.allEntitiesExceptEU
    },
    cellColor: function(value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])
    }
  },
  mounted: function() {
  }
}
</script>

<style scoped>
.share {
    background-color: transparent;
    border: .1rem solid white;
}

.share * {
    color: white;
    margin-bottom: 0;
}

.share__entity {

}

.share__value {
    font-size: var(--font-size-small);
}
</style>
