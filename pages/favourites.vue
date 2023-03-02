<template>
  <div class="pt-9 pl-20">
    <PageTitle>Mes Favoris</PageTitle>

    <LocationsGrid class="mt-6" :locations="favouriteLocations" />

    <p v-if="favouriteLocations.length == 0">Vous n'avez pas encore ajouté de location à vos favoris !</p>
  </div>
</template>

<script>
export default {
  name: 'Favourites',
  data() {
    return {
      favouriteLocations: []
    }
  },
  methods: {
    getFavouriteLocations() {
      this.$airbnbApi.getFavouriteLocations().then((favouriteLocations) => {
        this.favouriteLocations = favouriteLocations
      })
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    }
  },
  mounted() {
    this.getFavouriteLocations()
  }
}
</script>

<style></style>
