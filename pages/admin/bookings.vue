<template>
  <div>
    <div class="pt-9 px-20 mb-20 relative">
      <PageTitle class="mb-10">Back office - Liste de toutes les réservations</PageTitle>

      <Button bgColor="white" textColor="black" outline="black" class="absolute top-10 right-20">
        <NuxtLink to="/admin" class="text-base flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Retour
        </NuxtLink>
      </Button>

      <p v-if="bookings.length == 0">Aucune réservatoin n'a encore été faite.</p>

      <div class="flex gap-2" v-if="bookings.length > 0">
        <table class="w-full">
          <tr class="text-left">
            <th class="border border-gray-300 py-2 px-4">Location</th>
            <th class="border border-gray-300 py-2 px-4">Client</th>
            <th class="border border-gray-300 py-2 px-4">Date d'arrivée</th>
            <th class="border border-gray-300 py-2 px-4">Date de départ</th>
            <th class="border border-gray-300 py-2 px-4">Prix</th>
            <th class="border border-gray-300 py-2 px-4 w-[50px]">Actions</th>
          </tr>
          <tr v-for="booking in bookings" :key="booking._id">
            <td class="border border-gray-300 py-2 px-4">{{ booking.locationId.title }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ booking.customerId.firstName }} {{ booking.customerId.lastName }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ new Date(booking.arriveDate).toLocaleDateString() }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ new Date(booking.leaveDate).toLocaleDateString() }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ booking.price }}€</td>
            <td class="border border-gray-300 py-2 px-4">
              <div class="flex gap-2">
                <Button bgColor="red" class="text-base" @click.native="deleteBooking(booking._id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookings: []
    }
  },
  computed: {
    adminUser() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    getAllBookings() {
      this.$airbnbApi.getAllBookings().then((response) => {
        this.bookings = response
      })
    },
    deleteBooking(id) {
      this.$airbnbApi.cancelBooking(id).then(() => {
        this.getAllBookings()
      })
    }
  },
  mounted() {
    this.getAllBookings()
  }
}
</script>

<style></style>
