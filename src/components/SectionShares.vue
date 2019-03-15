<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__block">
      <h2>Let's now take a look at how these emissions are distributed.</h2>
      <p>Each European country contributes its emissions to the total value. However, the volume varies. Explore the different shares throughout the years here.</p>
    </section>
    <section class="c-main">
      <section class="c-controls">
        <div class="c-controls__slider">
          <form>
            <input
              type="range"
              min="0"
              :max="eu28Entities[rangeValue].values.length - 1"
              step="1"
              v-model.number="rangeValue"
            >
            <output>{{activeYear}}</output>
          </form>
        </div>
        <div class="c-controls__value">
          <p>
            <span>{{ new Intl.NumberFormat().format(totalValue.toFixed(0)) }}</span>
          </p>
        </div>
      </section>
      <section class="c-vis">
        <SharesGradient :activeYearIndex="rangeValue"/>
      </section>
    </section>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import SharesGradient from "@/components/SharesGradient.vue";

export default {
  name: "SectionShares",
  components: {
    SharesGradient
  },
  data: function() {
    return {
      rangeValue: 0
    };
  },
  computed: {
    ...mapGetters(["eu28Entities"]),
    intervalStart: function() {
      return this.$store.state.data.intervalStart;
    },
    activeYear: function() {
      return this.intervalStart + this.rangeValue;
    },
    totalValue: function() {
      let val = 0;
      this.eu28Entities.forEach(entity => {
        val += entity.values[this.rangeValue];
      });
      return val;
    }
  },
  methods: {
    getPercentage: function(partialValue, totalValue) {
      return (partialValue / totalValue) * 100;
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
div {
  margin-bottom: var(--grid-spacing);
}

.c-main {
  grid-column: span 12;
  display: grid;
  grid-gap: var(--grid-spacing);
  grid-template-columns: repeat(12, 1fr);
}

.c-controls {
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.c-controls__value {
  width: 100%;
  border-color: var(--color-primary);
  border-style: dashed;
  border-top-width: 0.1rem;
  border-left-width: 0.1rem;
  border-right-width: 0.1rem;
  border-bottom-width: 0;
}

.c-controls__value p {
  text-align: center;
  margin-bottom: 0;
  transform: translateY(-50%);
}

.c-controls__value p span {
  padding: calc(var(--grid-spacing) / 2);
  border: .1rem dashed var(--color-primary);
  background-color: white;
}

.c-vis {
  grid-column: span 12;
}
</style>
