<template>
  <div class="flex gap-6 flex-wrap">
    <LocationCard
      :dates="[dateArrivee, dateDepart]"
      v-for="location in locations"
      @click.native="goToLocation($event, location._id)"
      :key="location._id"
      :location="location"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LocationCard from '../LocationCard/LocationCard.vue'

export default Vue.extend({
  components: { LocationCard },
  props: ['locations'],
  methods: {
    goToLocation(e: any, locationId: number) {
      const forbiddenIds = ['swipe_right', 'swipe_left', 'favourite']
      if (forbiddenIds.includes(e.target.id)) return

      this.$router.push(`/location/${locationId}`)
    }
  },
  data() {
    return {
      dateArrivee: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0],
      dateDepart: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString().split('T')[0]
    }
  }
})
</script>
