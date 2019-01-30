<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <p>However, 20% for countries like Malta, Liechtenstein or Iceland is not the same as 20% for an industrial nation like France or Germany.</p>
      <p>Imagine this blue rectangle as representing zero emissions and this black rectangle as representing the highest emitted value within the EU members.</p>
      <p>Now let's see how much Greenhouse Gases each country actually emits. Here we show the most recent emission values from 2016.</p>
    </section>
    <section class="shares__controls">
        <fieldset>
            <input
              type="range"
              min="0"
              :max="allEntitiesExceptEU[rangeValue].values.length - 1"
              step="1"
              v-model.number="rangeValue"
            >
            <output>{{ activeYear }}</output>
        </fieldset>
    </section>
    <section class="grid--autofill-squares chapter__content">
        <div
            v-for="entity in allEntitiesExceptEU"
            :key="entity.name"
            class="share"
            :id="'share__' + entity.name.toLowerCase()"
            :style="{ 'background-color': cellColor(entity.values[rangeValue]) }"
        >
            <p class="share__entity">{{ entity.name }}</p>
            <p class="share__value">{{  new Intl.NumberFormat().format(entity.values[rangeValue].toFixed(0)) }} ktǂ</p>
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
    return {
        rangeValue: 0
    }
  },
  computed: {
    allEntitiesExceptEU: function() {
        return this.$store.getters.allEntitiesExceptEU
    },
    cellColor: function(value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])
    },
    activeYear: function() {
      return 1990 + this.rangeValue;
    },
  },
  mounted: function() {
  }
}
</script>

<style scoped>
.shares__controls {
    grid-column: 4 / 10;
}

.share {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--grid-spacing) / 4 );
    background-color: transparent;
    border: .1rem solid white;
}

.share * {
    color: white;
    margin-bottom: 0;
    text-align: center;
    line-height: 1.2;
}

.share__entity {
    font-weight: 700;
}

.share__value {
    font-size: var(--font-size-small);
}
</style>
