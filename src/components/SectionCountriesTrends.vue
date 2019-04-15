<template>
  <article class="grid--12-columns chapter chapter--countries">
    <section class="chapter__block">
      <p>In addition to treating the EU as one entity, it is also possible to analyse the progress of individual member states (Their reduction targets <a href="https://ec.europa.eu/clima/policies/strategies/2020_en">differ according to national wealth</a>). Each country has its own reference value from 1990 from which the development is calculated.</p>
      <p class="figure__description">Greenhouse Gas emissions: {{ selectedEntity.name }}</p>
    </section>
    <TrendpathFigure class="chapter__block trendpath--country" :entity="selectedEntity" />
    <section class="chapter__block selector__wrapper">
      <p class="figure__description">Select a country</p>
      <section class="selector--country grid--autofit-small">
        <section 
          v-for="entity in EU28Entities"
          :key="entity.name"
          :class="{ 'entity--selected': (entity.name == selectedEntity.name) }"
          @click="changeSelectedEntity(entity.name)"
        >
          <figure ref="wrapper">
            <svg :class="entity.code" :width="trendpathWidth" :height="trendpathHeight">
              <Trendpath :values="entity.values" :width="trendpathWidth" :height="trendpathHeight" />
            </svg>
          </figure>
          <p class="indicator indicator--small-font">{{ entity.name }}</p>
        </section>
      </section>
      </section>
  </article>
</template>

<script>
import Trendpath from "@/components/Trendpath.vue"
import TrendpathFigure from "@/components/TrendpathFigure.vue"
import * as d3 from "d3"

export default {
  name: "SectionCountriesTrends",
  components: {
    Trendpath,
    TrendpathFigure
  },
  data: function() {
    return {
      trendpathWidth: 70,
      selectedEntity: {}
    }
  },
  computed: {
    trendpathHeight: function() {
      return this.trendpathWidth / 3
    },
    EU28Entities: function() {
        return this.$store.getters.sortedEU28Entities
    }
  },
  methods: {
    changeSelectedEntity: function (entity) {
      let newEntity = this.EU28Entities.find((el) => {
        return el.name == entity
      })
      this.selectedEntity = newEntity
    }
  },
  created: function () {
    this.changeSelectedEntity("Germany") // TODO: Arbitrary. Which entity should be visible at first?
  },
  mounted: function () {
    this.gradientWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
.selector--country > section {
  padding: .2rem;
  transition: border .1s;
}

.selector--country > section:not(.entity--selected) {
  border: .1rem dashed transparent;
}

.selector--country > section:hover {
  border: .1rem dashed white;
  cursor: pointer;
}

.selector--country figure {
  border: none;
}

.selector--country p {
  margin: 0;
  text-align: center;
  color: white;
}

.entity--selected {
  border: .1rem dashed white;
  background-color: var(--color-red);
}

.entity--selected p {
  color: white;
  transition: color .1s;
}
</style>
