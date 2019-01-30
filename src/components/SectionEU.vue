<template>
  <article class="grid--12-columns chapter">
    <section class="chapter__introduction">
      <h2>GHG Development European Union</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sed? Laudantium facere similique dicta assumenda perferendis aut recusandae quos maxime cupiditate, quam at rerum ex earum modi, sed quasi voluptatem.</p>
    </section>
    <section class="c-main">
      <figure ref="wrapper">
        <svg :width="trendpathWidth" :height="trendpathHeight">
          <Trendpath :values="euEntity.values" :width="trendpathWidth" :height="trendpathHeight" />
        </svg>
      </figure>
      <p>{{ euEntity.values[0] }}</p>
      <p>{{ euEntity.values[euEntity.values.length - 1] }}</p>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import Trendpath from '@/components/Trendpath.vue'

export default {
  name: 'SectionEU',
  components: {
    Trendpath,
  },
  data: function () {
    return {
      trendpathWidth: 500,
      trendpathHeight: 200
    }
  },
  computed: {
    intervalStart: function () {
      return this.$store.state.data.intervalStart
    },
    euEntity: function () {
      return this.$store.getters.euEntity[0]
    },
    maxValueEu: function () {
      // let val = Math.max(...euEntity.values)
      return 5719571.03
    }
  },
  mounted: function() {
    this.trendpathWidth = this.$refs.wrapper.offsetWidth
    window.addEventListener("resize", () => {
      this.trendpathWidth = this.$refs.wrapper.offsetWidth
    })
  }
}
</script>

<style scoped>
</style>
