<template>
  <div id="home">
    <First />
    <!-- <router-view/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import First from '@/components/FirstSection.vue'

export default {
  name: 'Home',
  components: {
    First 
  }
}
</script>
