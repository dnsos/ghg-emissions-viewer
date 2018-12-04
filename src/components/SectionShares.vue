<template>
  <article class="s-grid s-wrapper">
    <section class="c-introduction">
      <h2>Let's now take a look at how these emissions are distributed.</h2>
      <p>Each European country contributes its emissions to the total value. However, the volume varies. Explore the different shares throughout the years here.</p>
    </section>
    <section class="c-main">
      <ul>
        <li 
          v-for="entity in allEntitiesExceptEU"
          :key="entity.name"
        >
        {{entity.name}}
        {{entity.values[0]}}
        <strong>{{getPercentage(entity.values[0], totalValue).toFixed(2)}}</strong>
        </li>
      </ul>
      <div id="testid">
      </div>
    </section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SectionShares',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters(['allEntitiesExceptEU']),
    totalValue: function () {
      let val = 0
      this.allEntitiesExceptEU.forEach(entity => {
        val += entity.values[0]
      })
      return val
    },
    getElementWidth: function () {
      console.log(document.getElementById('testid'))
      
      return document.getElementById('testid')
    }
  },
  methods: {
    getPercentage: function (partialValue, totalValue) {
      return partialValue / totalValue * 100
    }
  }
}
</script>

<style scoped>

#testid {
  width: 66px;
  height: 66px;
  background-color: chocolate;
}
</style>
