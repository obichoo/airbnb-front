<template>
  <div class="w-[302px]">
    <div>
      <div class="relative rounded-xl h-[286px] overflow-hidden">
        <button @click="toggleFavourite()" id="favourite" type="button" class="absolute z-20 top-3 right-4">
          <svg
            viewBox="0 0 32 32"
            class="pointer-events-none"
            :style="
              'display: block; fill: ' +
              (isFavourite ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)') +
              '; height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible'
            "
          >
            <path
              d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
            ></path>
          </svg>
        </button>

        <div v-if="!isAtLimitLeft" class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 left-0 z-10">
          <button
            id="swipe_left"
            class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
            @click="slideTo('left')"
          >
            <svg viewBox="0 0 32 32" class="block fill-none h-3 w-3 stroke-current overflow-visible pointer-events-none" style="stroke-width: 5.33333">
              <g fill="none">
                <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
              </g>
            </svg>
          </button>
        </div>

        <div class="absolute z-10 bottom-0 left-0 from-black bg-gradient-to-t opacity-50 w-[302px] h-1/3"></div>

        <div ref="slider" class="flex transition-all duration-500">
          <div class="flex items-center min-w-[302px] h-[286px]" :key="img" v-for="img of location.imgs">
            <img class="object-cover min-w-[302px] h-[286px]" :src="img" alt="" />
          </div>
        </div>

        <div v-if="!isAtLimitRight" class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 right-0 z-10">
          <button
            id="swipe_right"
            class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
            @click="slideTo('right')"
          >
            <svg viewBox="0 0 32 32" class="pointer-events-none block fill-none h-3 w-3 stroke-current overflow-visible" style="stroke-width: 5.33333">
              <g fill="none">
                <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
              </g>
            </svg>
          </button>
        </div>

        <div class="absolute flex items-center justify-center bottom-3 z-20 left-1/2 -translate-x-1/2">
          <div
            v-for="(imgIndex, i) in location.imgs.length"
            :key="i"
            :class="{
              'bg-white rounded-full transition-all duration-300': true,
              'h-[6px] w-[6px] mx-[2.5px]': imgDisplayed == i || imgDisplayed == i - 1 || imgDisplayed == i + 1,
              'h-[4px] w-[4px] mx-[2.5px]': imgDisplayed == i + 2 || imgDisplayed == i - 2,
              'h-0 w-0': imgDisplayed != i && imgDisplayed != i - 1 && imgDisplayed != i + 1 && imgDisplayed != i - 2 && imgDisplayed != i + 2,
              'opacity-60': imgDisplayed !== i
            }"
          ></div>
        </div>
      </div>
    </div>

    <div class="mt-2 text-[15px]">
      <div class="flex justify-between">
        <p class="font-bold">
          {{ location.location }}
        </p>
        <p class="flex items-center gap-1">
          <svg viewBox="0 0 32 32" style="display: block; height: 12px; width: 12px; fill: currentcolor">
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
          {{ location.rate }}
        </p>
      </div>
      <div>
        <p class="text-gray-500">{{ location.target }}</p>
      </div>
      <div>
        <p class="text-gray-500">{{ propositionDate }}</p>
      </div>
      <div class="mt-[6px]">
        <p>
          <span class="font-bold">{{ location.price }} €</span>
          <span>par nuit</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: {
    location: {
      type: Object,
      default: {}
    },
    dates: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      slideImageWidth: 302,
      translateValue: 0,
      slideUnit: 0,
      isAtLimitLeft: true,
      isAtLimitRight: false,
      isAtTop: true,
      imgDisplayed: 0
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    },
    isFavourite() {
      return this.user?.favouriteLocations?.includes(this.location._id) || false
    },
    imgIndexClasses() {
      return 'opacity-60 h-[6px] w-[6px]'
    },
    propositionDate() {
      const date = new Date(this.dates[0])
      const date2 = new Date(this.dates[1])
      const options = { month: 'long', day: 'numeric' }
      return `${date.toLocaleDateString('fr-FR', options)} - ${date2.toLocaleDateString('fr-FR', options)}`
    }
  },
  methods: {
    goToLocation(locationId) {
      this.$router.push(`/location/${locationId}`)
    },
    slideTo(direction) {
      this.isAtLimitLeft = false
      this.isAtLimitRight = false
      if (direction === 'left') {
        this.translateValue += this.slideImageWidth
        this.imgDisplayed--
      } else {
        this.translateValue -= this.slideImageWidth
        this.imgDisplayed++
      }
      if (this.translateValue >= 0) {
        this.translateValue = 0
        this.isAtLimitLeft = true
      }
      if (this.translateValue <= -(this.location.imgs.length - 1) * this.slideImageWidth) {
        this.translateValue = -(this.location.imgs.length - 1) * this.slideImageWidth
        this.isAtLimitRight = true
      }

      this.$refs.slider.style.transform = `translateX(${this.translateValue}px)`
    },
    toggleFavourite() {
      if (this.$forceConnected()) {
        if (this.isFavourite) {
          this.$airbnbApi.deleteFavourite(this.location._id)
        } else {
          this.$airbnbApi.addFavourite(this.location._id)
        }
      }
    }
  }
}
</script>

<style></style>
