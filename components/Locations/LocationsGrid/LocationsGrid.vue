<template>
  <div>
    <LocationCard v-for="location in locations" @click.native="goToLocation($event, location.id)" :key="location.id"
      :location="location" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LocationCard from '../LocationCard/LocationCard.vue';

export default Vue.extend({
  components: { LocationCard },
  props: ['locations'],
  methods: {
    goToLocation(e: any, locationId: number) {
      const forbiddenIds = ['swipe_right', 'swipe_left']
      if (forbiddenIds.includes(e.target.id)) return
      
      this.$router.push(`/location/${locationId}`)
    }
  }
})
</script>
