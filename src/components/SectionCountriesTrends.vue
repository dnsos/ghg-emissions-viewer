<template>
  <article class="grid--12-columns chapter chapter--countries">
    <section class="chapter__block">
      <p>Let's look at the progress of individual member states in the latest figures (Their reduction targets <a href="https://ec.europa.eu/clima/policies/strategies/2020_en">differ according to national wealth</a>). The graph below shows how each countries’ emissions changed from 1990 to 2016.</p>
    </section>
    <TrendpathFigure class="trendpath--country" :entity="selectedEntity" />
    <section class="selector--country">
      <section 
        v-for="entity in EU28Entities"
        :key="entity.name"
      >
        <p
          @click="changeSelectedEntity(entity.name)"
          :class="{ 'entity--selected': (entity.name == selectedEntity.name) }"
        >{{ entity.name }}</p>
        <!--<svg :width="trendpathWidth" :height="trendpathHeight">
          <Trendpath :values="entity.values" :width="trendpathWidth" :height="trendpathHeight" />
        </svg>-->
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
      trendpathWidth: 100,
      selectedEntity: {}
    }
  },
  computed: {
    trendpathHeight: function() {
      return this.trendpathWidth / 3
    },
    EU28Entities: function() {
        return this.$store.getters.eu28Entities
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
    this.changeSelectedEntity("Belgium") // TODO: Arbitrary. Which entity should be visible at first?
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
.trendpath--country {
  grid-column: 1 / 7;
}

.selector--country {
  grid-column: 7 / 13;
}

.selector--country section {
  display: inline-block;
}

.entity--selected {
  color: white;
}
</style>
