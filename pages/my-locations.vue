<template>
  <div class="pt-9 pl-20">
    <PageTitle>Mes locations</PageTitle>

    <LocationsGrid v-if="myLocations && myLocations.length > 0" class="mt-6" :locations="myLocations" />

    <p v-if="myLocations && myLocations.length == 0">Vous n'avez pas encore créé de location !</p>
  </div>
</template>

<script>
export default {
  name: 'MesLocations',
  data() {
    return {
      myLocations: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    getMyLocations() {
      this.$airbnbApi.getMyLocations().then((myLocations) => {
        this.myLocations = myLocations
      })
    }
  },
  mounted() {
    this.getMyLocations()
  }
}
</script>

<style></style>
