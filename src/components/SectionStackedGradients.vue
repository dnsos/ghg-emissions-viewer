<template>
  <article class="grid--12-columns chapter chapter--comparison">
    <section class="chapter__block">
      <p>Now we see that Germany, although with a reducing trend, emitted way more Greenhouse Gases than Cyprus did.</p>
      <p>And when applying this color encoding to each year from 1990 to 2016, we can observe that Germany continuously emits way more Greenhouse Gases than Cyprus with its almost “invisible” emissions. In fact, only a few countries are responsible for the total amount of emissions within the European Union.</p>
    </section>
    <section class="chapter__block">
      <p class="figure__description">Greenhouse Gas emissions from 1990 to 2016</p>
      <section
        v-for="entity in sortedEntities"
        :key="entity.name"
        class="grid--comparison"
      >
      <section class="entity">
        <span class="indicator" :class="entity.name.toLowerCase()">{{ entity.name }}</span>
      </section>
      <figure class="gradient" ref="wrapper">
        <svg :width="gradientWidth" :height="gradientHeight">
          <Gradient
            :width="gradientWidth"
            :height="gradientHeight"
            :values="entity.values"
            :maxValue="maxValueWithoutEu"
          />
        </svg>
      </figure>
      </section>
    </section>
  </article>
</template>

<script>
import Gradient from "@/components/Gradient.vue"

export default {
  name: 'SectionStackedGradients',
  components: {
    Gradient
  },
  data: function () {
    return {
      gradientWidth: 570,
      gradientHeight: 20
    }
  },
  computed: {
    intervalStart: function() {
      return this.$store.state.data.intervalStart
    },
    eu28Entities: function() {
      return this.$store.getters.eu28Entities
    },
    sortedEntities: function () {
      return this.$store.getters.sortedEU28Entities
    },
    maxValueWithoutEu: function () {
      let maxEntity = this.eu28Entities.map(entity => Math.max(...entity.values))
      return Math.max(...maxEntity)
    }
  },
  mounted: function () {
    this.gradientWidth = this.$refs.wrapper[0].offsetWidth
    window.addEventListener("resize", () => {
      this.gradientWidth = this.$refs.wrapper[0].offsetWidth // TODO: Fix this workaround
    })
  }
}
</script>

<style scoped>
.grid--comparison {
  display: grid;
  grid-column-gap: calc(var(--grid-spacing) / 2);
  grid-template-columns: repeat(12, 1fr);
}

.entity {
  grid-column: span 3;
  font-size: var(--font-size-small);
  text-align: right;
}

.gradient {
  grid-column: span 9;
  line-height: 0;
  border: none;
}

@media (min-width: 700px) {
  .entity {
    grid-column: span 2;
  }
  .gradient {
    grid-column: span 10;
  }
}

.germany, .cyprus {
  padding: 0 .2rem;
  background-color: var(--color-red);
}
</style>
