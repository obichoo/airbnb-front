<template>
  <div>
    <Categories @selectedIcon="categoryFilter = $event" />

    <div class="px-20 pt-32 mb-10">
      <LocationsGrid :locations="filteredLocations" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Search',
  head() {
    return {
      title: 'Locations saisonnières et locations en résidence - Airbnb'
    }
  },
  data() {
    return {
      categoryFilter: '',
      searchQuery: this.$route.params.search || ''
    }
  },
  async asyncData({ app }) {
    const locations = await app.$airbnbApi.getLocations()
    const newLocations = locations
    return { locations: newLocations }
  },
  computed: {
    filteredLocations() {
      this.locations = this.locations.filter((location) => {
        const locationTerms = Object.values(location).join(' ').toLowerCase()
        return locationTerms.includes(this.searchQuery.toLowerCase())
      })
      if (this.categoryFilter) return this.locations.filter((location) => location.category === this.categoryFilter)
      return this.locations
    },
    user() {
      return this.$store.state.user || {}
    }
  }
})
</script>
