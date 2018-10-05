<template>
  <main>
    <Introduction />
    <Viz />
  </main>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import Viz from '@/components/Viz.vue'

export default {
  name: 'home',
  components: {
    Introduction,
    Viz
  }
}
</script>
