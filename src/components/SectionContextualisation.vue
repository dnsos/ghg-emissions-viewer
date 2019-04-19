<template>
  <article class="grid--12-columns chapter chapter--contextualisation">
    <section class="chapter__block">
      <p>Out of 28 member states 23 reduced their emissions, only Spain, Austria, Portugal, Ireland and Cyprus reported increases from their 1990 reference values. Let’s look exemplarily at two countries: Germany, which reported a modest emission reduction in 2016, and Cyprus with its strong increase.</p>
      <p class="figure__description">Greenhouse Gas emissions in 2016</p>
    </section>
    <section class="chapter__block change-squares">
      <ChangeSquare
        v-for="entity in contextEntities"
        :key="entity.code"
        :entity="entity.name"
        :value="entity.values[entity.values.length - 1]"
        :change="getPercentageChange(entity.values[0], entity.values[entity.values.length - 1])"
        :isInContext="isInContext"
      />
    </section>
    <section class="chapter__block chapter__switch">
      <section>
        <p>The <span class="indicator--highlighted"><i :class="[entityAChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(entityAChange) }} %</span> reduction of Germany is certainly a step in the right direction and Cyprus' increase by <span class="indicator--highlighted"><i :class="[entityBChange < 0 ? 'arrow--decreasing' : 'arrow--increasing']" class="arrow--forward"></i>{{ Math.abs(entityBChange) }} %</span> not desirable. But now it makes sense to shift the perspective and interpret the developments not on individual scales of percentage changes, but on a comparable scale that highlights the actual emission values of each country.</p>
        <fieldset class="wrapper__checkbox">
          <div class="checkbox--custom" :checked="isInContext">
            <input
              :value="isInContext"
              @input="isInContext = $event"
              type="checkbox"
              name="context"
              id="context"
            >
          </div>
          <label for="context">See scale for emission values</label>
        </fieldset>
      </section>
      <section>
        <transition name="fade">
          <ColorScale v-if="isInContext" />
        </transition>
      </section>
    </section>
  </article>
</template>

<script>
import ChangeSquare from "@/components/ChangeSquare.vue"
import ColorScale from "@/components/ColorScale.vue"

export default {
  name: "SectionContextualisation",
  components: {
    ChangeSquare,
    ColorScale
  },
  data: function() {
    return {
    }
  },
  computed: {
    eu28Entities: function () {
        return this.$store.getters.eu28Entities
    },
    contextEntities: function () {
      return this.$store.getters.contextEntities
    },
    entityAChange: function () {
      const val = this.getPercentageChange(this.contextEntities[0].values[0], this.contextEntities[0].values[this.contextEntities[0].values.length - 1])
      return this.format(val)
    },
    entityBChange: function () {
      const val = this.getPercentageChange(this.contextEntities[1].values[0], this.contextEntities[1].values[this.contextEntities[1].values.length - 1])
      return this.format(val)
    },
    isInContext: {
      get () {
        return this.$store.state.selections.contextualisation.isInContext
      },
      set () {
        this.$store.commit('toggleContextState')
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.chapter__switch {
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-gap: var(--grid-spacing);
}

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
