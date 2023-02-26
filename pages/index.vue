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
  name: 'Home',
  head() {
    return {
      title: 'Locations saisonnières et locations en résidence - Airbnb'
    }
  },
  data() {
    return {
      categoryFilter: ''
    }
  },
  async asyncData({ app }) {
    const locations = await app.$airbnbApi.getLocations()
    return { locations }
  },
  computed: {
    filteredLocations() {
      if (this.categoryFilter) return this.locations.filter((location) => location.category === this.categoryFilter)
      return this.locations
    },
    user() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    createLocation() {
      const location = {
        imgs: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/2c848fcd-7fb0-4533-bb0e-a6970487afc8.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/be1d9816-a758-4930-9043-40973d5ed243.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/e9e6a773-16b9-4876-9811-2d2900193e16.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/e5fc8639-7156-483e-a188-aca4f5f72dcd.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/5c5e51c6-a4df-494b-91e9-b5b9f766e761.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/b3ea8e1b-c944-4197-897a-c0746236a0d2.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/16bb2832-4bae-4fab-af4d-14f9f18d2913.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/541dac07-7cd7-4901-9c61-fdf5033565d6.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/6325c659-d0ff-48c7-bb91-5dcb11d7b0e8.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/e2659747-8c2b-41f7-a6e9-c4017e06aad9.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/37afd260-ef25-4201-9181-747330e04302.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/764393ab-5bbb-4845-ab99-e529c9cafe16.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/4b8656b4-f42a-494d-b729-b50ce9364536.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/7a0709a2-8458-48be-aa27-fd6401c2fbf0.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/d2ee9ed4-f12d-4ac0-b1cc-9e9e08b60d48.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/1666fe87-1a93-45a8-8bc2-04f6b4b570b7.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/fd2de163-548a-447b-bcf8-b8ecd172528a.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/285cdcdb-a7f6-4c2c-93d0-f9fbc8867996.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/87f9ce47-c4fd-4890-a93f-3bef2602f1e1.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/dff50cd8-49b4-47fa-b638-f5839fe01367.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/4b9da096-f2d5-4c90-9e90-a1f2bac1ba89.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/eeb7f4f3-a2e1-4655-9b6e-77c832c00e06.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/2a9c5e85-7474-4709-9c42-9b08242ca706.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/99225c56-984e-47c2-aabb-232c201a1d20.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/5fff1ed5-11bd-494a-a0ef-8e4e6311c3c1.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/c0c854e6-9412-433c-bb71-7f1b49ec843f.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/4a28222e-fdbe-49d4-bd1f-7eecc0eacc4c.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/4cf9cce1-8268-47fd-bbb3-ef9d21ec51db.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-631888526880090604/original/7c9a5621-2ba5-4d33-afe3-09a17b388627.jpeg?im_w=720'
        ],
        location: 'Criel-sur-Mer, France',
        title: 'Les Follies - Champagne Voirin-Jumel',
        rate: 4.82,
        target: 'Particulier',
        price: 344,
        category: 'avec_vue',
        authorId: 1,
        serviceCharge: 285,
        caracteristics: {
          travellers: 4,
          rooms: 2,
          beds: 3,
          bathrooms: 1
        }
      }

      this.$axios.post('locations', location)
    }
  }
})
</script>
