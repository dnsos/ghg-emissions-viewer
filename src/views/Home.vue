<template>
  <section>
    <Introduction />
    <main>
      <EmissionsGradient
        v-for="location in locations"
        :key="location.country"
        :country="location.country"
        :values="location.values"
      />
    </main>
  </section>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import EmissionsGradient from '@/components/EmissionsGradient.vue'

export default {
  name: 'home',
  data: function() {
    return {
      locations: [
        {
          country: 'Germany',
          values: [5, 10, 12, 19, 17, 26, 43, 51, 42, 49, 55, 43, 70, 83, 68, 86, 77, 90, 94, 99, 93]
        },
        {
          country: 'Italy',
          values: [2, 4, 8, 11, 13, 22, 33, 37, 42, 37, 39, 38, 50, 59, 56, 60, 71, 70, 72, 75, 76]
        },
        {
          country: 'France',
          values: [6, 8, 11, 11, 13, 20, 33, 45, 48, 52, 50, 49, 59, 66, 72, 60, 77, 70, 80, 85, 89]
        },
        {
          country: 'Spain',
          values: [9, 8, 12, 19, 15, 20, 42, 37, 48, 49, 56, 50, 65, 69, 72, 65, 81, 85, 83, 76, 84]
        },
        {
          country: 'Poland',
          values: [1, 3, 6, 9, 10, 9, 16, 20, 30, 26, 32, 36, 48, 54, 48, 51, 68, 67, 64, 69, 74]
        },
        {
          country: 'Denmark',
          values: [2, 3, 6, 4, 9, 15, 16, 18, 19, 27, 25, 29, 35, 40, 51, 47, 44, 46, 45, 40, 42]
        }
      ]
    }
  },
  components: {
    Introduction,
    EmissionsGradient
  }
}
</script>

<style scoped>
  main {
    padding: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 150px;
  }

  @media (min-width: 700px) {
    main {
      padding: 80px;
    }
  }
</style>
