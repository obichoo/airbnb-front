<template>
  <div class="pt-9 pl-20">
    <PageTitle>Mes Favoris</PageTitle>

    <LocationsGrid class="mt-6" :locations="favouriteLocations" />
  </div>
</template>

<script>
export default {
  name: 'Favourites',
  async asyncData({ app }) {
    const favouriteLocations = await app.$airbnbApi.getFavouriteLocations()
    return { favouriteLocations }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    }
  },
  mounted() {
    this.$airbnbApi.getFavouriteLocations()
  }
}
</script>

<style></style>
