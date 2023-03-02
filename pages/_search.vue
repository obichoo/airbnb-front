<template>
  <div>
    <Categories @applyFilters="applyFilters($event)" @selectedIcon="categoryFilter = $event" />

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
      searchQuery: this.$route.params.search || '',
      priceFilterValues: [0, 1000],
      capacityFilterValues: [0, 20]
    }
  },
  async asyncData({ app, route }) {
    const locations = await app.$airbnbApi.getLocations()
    const newLocations = locations
    return {
      locations: newLocations.filter((location) => {
        const locationTerms = Object.values(location).join(' ').toLowerCase()
        return locationTerms.includes(route.params.search.toLowerCase())
      })
    }
  },
  methods: {
    applyFilters({ price, capacity }) {
      this.priceFilterValues = price
      this.capacityFilterValues = capacity
    }
  },
  computed: {
    filteredLocations() {
      if (this.locations) {
        let newLocations = [...this.locations]
        if (this.categoryFilter) newLocations = newLocations.filter((location) => location.category === this.categoryFilter)

        return newLocations.filter((location) => {
          return (
            location.price >= this.priceFilterValues[0] &&
            location.price <= this.priceFilterValues[1] &&
            location.caracteristics.travellers >= this.capacityFilterValues[0] &&
            location.caracteristics.travellers <= this.capacityFilterValues[1]
          )
        })
      }
    },
    user() {
      return this.$store.state.user || {}
    }
  }
})
</script>
