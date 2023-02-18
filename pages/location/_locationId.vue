<template>
  <div class="pt-[19px]" v-if="location" :id="`location-${locationId}`">
    <h1 class="text-[26px] font-semibold">{{ location.title }}</h1>

    <div class="flex justify-between mt-[3px] mb-6">
      <div class="flex text-sm font-semibold">
        <p class="flex items-center gap-1">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor">
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"></path>
          </svg>
          {{ location.rate }}
        </p>
        <div class="mx-1 pt-[2px]">·</div>
        <p class="font-normal items-center leading-none flex" v-if="location.hasSuperhote">
          <span class="text-base mr-2 mb-[2px]" style="font-family: Airmojix">󰀃</span>
          <span class="block">Superhôte</span>
        </p>
        <div class="mx-2 pt-[2px]" v-if="location.hasSuperhote">·</div>
        <p class="underline">{{ location.location }}</p>
      </div>

      <div class="flex font-semibold text-sm underline gap-5">
        <p class="flex items-center gap-2">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false"
            style="fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible">
            <g fill="none">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
              <path d="M16 3v23V3z"></path>
              <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
            </g>
          </svg>

          Partager
        </p>

        <p class="flex items-center gap-2">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false"
            style="fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible">
            <path
              d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
            </path>
          </svg>

          Enregistrer
        </p>
      </div>
    </div>

    <div class="h-[440px] grid grid-cols-2 rounded-xl overflow-hidden">
      <div>
        <div class="h-[440px] flex items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[0]" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-2 ml-2">
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[1]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[2]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[3]" alt="" />
        </div>
        <div class="flex h-[216px] items-center overflow-hidden">
          <img class="object-cover object-center w-full h-full" :src="location.imgs[4]" alt="" />
        </div>
      </div>
    </div>

    <div>
      <h2>
        {{ location.category }}
        <div class="mx-1 pt-[2px]">·</div>
        Chez {{ location.author.firstName }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locationId: this.$route.params.locationId,
      location: null
    }
  },
  head() {
    return {
      title: this.location ? this.location.title : null
    }
  },
  methods: {
    getLocationData() {
      const locationData = this.$store.state.fakeLocation

      this.location = locationData

      console.log(this.$nuxt)
    }
  },
  mounted() {
    this.getLocationData()
  },
  layout: 'location'
}
</script>

<style></style>
