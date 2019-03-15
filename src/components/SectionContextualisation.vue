<template>
  <article class="grid--12-columns chapter chapter--contextualisation">
    <section class="chapter__block">
      <p>Most countries reduced their emissions while only few reported increases. Let’s look exemplarily at Cyprus and Germany.</p>
    </section>
    <section class="chapter__block">
      <figure>Two Boxes Cyprus & Germany</figure>
    </section>
    <section class="chapter__block">
      <p>The <span class="indicator__change"> 5X % </span> increase of Cyprus is certainly not [good] and Germany’s reduction of <span class="indicator__change">26 %</span> a step in the right direction. Still, when looking at the actual emission values, we see that in the [relevant] year Germany emitted way more CO2 equivalent than Cyprus did.</p>
      <figure>Switch + Key</figure>
    </section>
    <!-- <section class="shares__controls">
        <fieldset>
            <input
              type="range"
              min="0"
              :max="eu28Entities[rangeValue].values.length - 1"
              step="1"
              v-model.number="rangeValue"
            >
            <output>{{ activeYear }}</output>
        </fieldset>
    </section>
    <section class="grid--autofill-squares chapter__content">
        <div
            v-for="entity in eu28Entities"
            :key="entity.name"
            class="share"
            :id="'share__' + entity.name.toLowerCase()"
            :style="{ 'background-color': cellColor(entity.values[rangeValue]) }"
        >
            <p class="share__entity">{{ entity.name }}</p>
            <p class="share__value"><span>{{  new Intl.NumberFormat().format(entity.values[rangeValue].toFixed(0)) }} ktǂ</span></p>
        </div>
    </section>-->
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
    eu28Entities: function() {
        return this.$store.getters.eu28Entities
    },
    cellColor: function(value) {
      return chroma
        .scale(["#79cde5", "#1f2a2e"])
        .domain([0, 1263000])
    },
    activeYear: function() {
      return 1990 + this.rangeValue;
    }/*,
    germanyChange: function() {
      const valueFirstYear = this.eu28Entities['Germany'].values[0],
            valueLastYear = this.eu28Entities['Germany'].values[this.eu28Entities['Germany'].values.length - 1]
      return this.getPercentageChange(valueFirstYear, valueLastYear).toFixed(1)
    }*/
  },
  methods: {
    getPercentageChange: function (previousValue, currentValue) {
      let changeValue = previousValue - currentValue
      return - (changeValue / previousValue) * 100
    }
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
    margin-bottom: 0;
    text-align: center;
    line-height: 1.2;
}

.share__entity, .share__value {
    font-weight: 700;
}

.share__entity {
    color: white;
}

.share__value {
    font-size: var(--font-size-small);
    color: var(--color-eublue);
}

.share__value span {
    padding: 0 .2rem;
    background-color: white;
}
</style>
