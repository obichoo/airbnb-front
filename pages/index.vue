<template>
  <div>
    <Filters />

    <div class="px-20 pt-32 mb-10">
      <LocationCard v-for="location in locations" @click.native="goToLocation(location.id)" :key="location.id"
        :location="location" />
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
    },
    goToLocation(locationId: number) {
      this.$router.push(`/location/${locationId}`)
    }
  },
  mounted() {
    this.getAirBnbLocations()
  }
})
</script>
