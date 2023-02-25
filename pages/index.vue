<template>
  <div>
    <Filters />

    <div class="px-20 pt-32 mb-10">
      <LocationsGrid :locations="locations" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Locations saisonnières et locations en résidence - Airbnb'
    }
  },
  data() {
    return {
      locations: [] as any[]
    }
  },
  methods: {
    getAirBnbLocations() {
      const location = this.$store.state.fakeLocation
      this.locations.push(location)
    }
  },
  mounted() {
    this.getAirBnbLocations()
  }
})
</script>
