<template>
  <div class="pt-9 px-20 mb-20">
    <PageTitle class="mb-10">Mes réservations</PageTitle>

    <div class="flex flex-col gap-4">
      <div class="relative p-6 border border-gray-300 rounded-xl" v-for="booking in myBookings" :key="booking._id">
        <div class="w-full">
          <div class="flex justify-between">
            <NuxtLink :to="`/location/${booking.locationId._id}`" class="text-2xl font-semibold flex flex-col">
              <span class="underline">{{ booking.locationId.title }}</span>
              <span class="text-sm font-normal text-gray-400">({{ booking.locationId._id }})</span>
            </NuxtLink>
            <p class="text-2xl font-extrabold mt-4">{{ booking.price }} €</p>
          </div>
          <p class="text-2xl">Pour {{ booking.travellers }} personnes</p>
          <div class="flex flex-col gap-2 mt-4">
            <div class="flex gap-2">
              <p class="text-gray-500">Arrivée</p>
              <p class="text-black font-semibold">{{ new Date(booking.arriveDate).toLocaleDateString() }}</p>
            </div>
            <div class="flex gap-2">
              <p class="text-gray-500">Départ</p>
              <p class="text-black font-semibold">{{ new Date(booking.leaveDate).toLocaleDateString() }}</p>
            </div>
          </div>
        </div>

        <div class="absolute bottom-6 right-6 flex gap-6">
          <Button bgColor="white" outline="black" textColor="black">
            <NuxtLink class="text-base" :to="`/location/${booking.locationId._id}`">Voir la location</NuxtLink>
          </Button>

          <Button bgColor="#dd0000" @click.native="cancelBooking(booking._id)">Annuler la réservation</Button>
        </div>
      </div>
    </div>

    <p v-if="myBookings && myBookings.length == 0">Vous n'avez pas encore fait de réservation !</p>
  </div>
</template>

<script>
export default {
  name: 'MesLocations',
  data() {
    return {
      myBookings: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    getMyBookings() {
      this.$airbnbApi.getMyBookings().then((myBookings) => {
        this.myBookings = myBookings
      })
    },
    cancelBooking(bookingId) {
      this.$airbnbApi.cancelBooking(bookingId).then((res) => {
        this.getMyBookings()
      })
    }
  },
  mounted() {
    this.getMyBookings()
  }
}
</script>

<style></style>
