<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Let's now take a look at how these emissions are distributed.</h2>
      <p>Each European country contributes its emissions to the total value. However, the volume varies. Explore the different shares throughout the years here.</p>
    </section>
    <section class="c-main fullwidth">
      <section class="c-controls">
        <div class="c-controls__slider">
          <form>
            <input
              type="range"
              min="0"
              :max="allEntitiesExceptEU[rangeValue].values.length - 1"
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
      <SharesGradient :activeYearIndex="rangeValue"/>
      <!--<ul>
        <li 
          v-for="entity in allEntitiesExceptEU"
          :key="entity.name"
        >
        {{entity.name}}
        {{new Intl.NumberFormat().format(entity.values[rangeValue])}}
        <strong>{{getPercentage(entity.values[rangeValue], totalValue).toFixed(2)}}</strong>
        </li>
      </ul>-->
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
    ...mapGetters(["allEntitiesExceptEU"]),
    intervalStart: function() {
      return this.$store.state.data.intervalStart;
    },
    activeYear: function() {
      return this.intervalStart + this.rangeValue;
    },
    totalValue: function() {
      let val = 0;
      this.allEntitiesExceptEU.forEach(entity => {
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

.fullwidth {
  grid-column: span 12;
}

.c-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.c-controls__value {
  width: 100%;
  border-color: var(--color-grey-09);
  border-style: solid;
  border-top-width: 0.2rem;
  border-left-width: 0.2rem;
  border-right-width: 0.2rem;
  border-bottom-width: 0;
}

.c-controls__value p {
  text-align: center;
  margin-bottom: 0;
  transform: translateY(-50%);
}

.c-controls__value p span {
  padding: calc(var(--grid-spacing) / 2);
  background-color: white;
}
</style>
