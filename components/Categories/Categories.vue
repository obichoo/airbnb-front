<template>
  <div>
    <div
      :class="{
        ['fixed z-[9000] flex transition-all duration-200 overflow-hidden bg-white ' + topClasses]: true,
        'w-[calc(100%-120px)]': !isForcedViewportWidth,
        'w-[calc(1440px-120px)]': isForcedViewportWidth
      }"
    >
      <div v-if="!isAtLimitLeft" class="absolute flex items-center justify-center bg-gradient-to-r from-white left-20 z-[9100] h-20 w-20">
        <button
          class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
          v-on:click="slideTo('left')"
        >
          <svg viewBox="0 0 32 32" class="block fill-none h-3 w-3 stroke-current overflow-visible" style="stroke-width: 5.33333">
            <g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g>
          </svg>
        </button>
      </div>

      <div
        :class="{
          'absolute overflow-hidden mx-20': true,
          'w-[calc(100%-160px-120px)]': !isForcedViewportWidth,
          'w-[calc(1440px-160px-120px)]': isForcedViewportWidth
        }"
      >
        <div ref="slider" :class="'transition-all w-max duration-500 flex gap-8 pt-4 pr-52' + sliderTopBorderClasses">
          <Icon
            :class="`min-w-[50px] pb-3 ${selectedIcon == icon.id ? 'opacity-100 border-b-2 border-black' : 'opacity-60'}`"
            v-on:click.native="setSelectedIcon(icon.id)"
            :key="icon.id"
            v-for="icon in icons"
            :url="`/assets/img/homepage-icons/${icon.fileName}`"
            :label="icon.name"
          />
        </div>
      </div>

      <div v-if="!isAtLimitRight" class="absolute flex items-center justify-center bg-gradient-to-l from-white right-20 z-[9100] h-20 w-20">
        <button
          class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
          v-on:click="slideTo('right')"
        >
          <svg viewBox="0 0 32 32" class="block fill-none h-3 w-3 stroke-current overflow-visible" style="stroke-width: 5.33333">
            <g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g>
          </svg>
        </button>
      </div>

      <div class="h-20 w-full bg-white"></div>
    </div>

    <div
      :class="{
        ['fixed z-[9000] mt-4 transition-all duration-200 ' + topClasses]: true,
        'ml-[100%] -translate-x-[calc(100%+45px)]': !isForcedViewportWidth,
        'ml-[calc(1440px-150px)]': isForcedViewportWidth
      }"
    >
      <button @click="toggleModal()" class="h-12 w-[90px] border-[#DDDDDD] border rounded-xl bg-white flex justify-between items-center text-xs px-4">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; height: 14px; width: 14px; fill: currentColor"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          ></path>
        </svg>

        <p class="pt-[2px] font-semibold">Filtres</p>
      </button>
    </div>

    <div
      :class="{
        ['h-20 bg-white fixed z-[8900] transition-all duration-200 ' + topClasses]: true,
        'w-full': !isForcedViewportWidth,
        'w-[1440px]': isForcedViewportWidth
      }"
    ></div>

    <Modal @toggleModal="toggleModal()" :isDisplayedModal="isDisplayedModal">
      <div class="w-[567px]">
        <div class="py-5">
          <button class="left-6 top-6 absolute" @click="toggleModal()">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible"
            >
              <path d="m6 6 20 20"></path>
              <path d="m26 6-20 20"></path>
            </svg>
          </button>

          <h5 class="font-extrabold text-center">Filtres</h5>
        </div>

        <div class="bg-[#DDDDDD] h-[1.5px] w-full"></div>

        <div class="p-6 flex flex-col gap-6">
          <div>
            <h6 class="text-[22px] font-semibold">Prix</h6>

            <div class="relative mt-2">
              <div class="range-container">
                <RangeSlider @change="setFilterPrice($event)" :values="priceFilterValues" :min="0" :max="1000" />
              </div>

              <div class="range-values mt-4 flex justify-between">
                <span>Prix minimum: {{ priceFilterValues[0] }}€</span>
                <span>Prix maximum: {{ priceFilterValues[1] }}€</span>
              </div>
            </div>
          </div>

          <div>
            <h6 class="text-[22px] font-semibold">Capacité</h6>

            <div class="relative mt-2">
              <div class="range-container">
                <RangeSlider @change="setFilterCapacity($event)" :values="capacityFilterValues" :min="0" :max="20" />
              </div>

              <div class="range-values mt-4 flex justify-between">
                <span>Capacité minimum: {{ capacityFilterValues[0] }} personnes</span>
                <span>Capacité maximum: {{ capacityFilterValues[1] }} personnes</span>
              </div>
            </div>
          </div>

          <Button @click.native="applyFilters()" class="mx-auto" bgColor="black">Appliquer les filtres</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Icon from './parts/Icon/Icon.vue'
import icons from '@/static/assets/data/icons.json'
import RangeSlider from './../RangeSlider/RangeSlider.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Icon,
    RangeSlider
  },
  data() {
    return {
      icons: icons || [],
      selectedIcon: '',
      translateValue: 0,
      slideUnit: 0,
      isAtLimitLeft: true,
      isAtLimitRight: false,
      isAtTop: true,
      isDisplayedModal: false,
      priceFilterValues: [0, 1000],
      capacityFilterValues: [0, 20]
    }
  },
  computed: {
    topClasses() {
      return this.isAtTop ? 'pt-5' : 'pt-0'
    },
    sliderTopBorderClasses() {
      return this.isAtTop ? '' : 'border-b border-gray-300'
    },
    isForcedViewportWidth() {
      return this.$store.state.checkedPopups.includes('warnForBreakpoint')
    }
  },
  methods: {
    toggleModal() {
      this.isDisplayedModal = !this.isDisplayedModal
    },
    setSelectedIcon(iconId) {
      if (iconId === this.selectedIcon) this.selectedIcon = ''
      else this.selectedIcon = iconId

      this.$emit('selectedIcon', this.selectedIcon)
    },
    slideTo(direction) {
      const baseWidth = this.isForcedViewportWidth ? 1440 - 120 : window.innerWidth
      this.isAtLimitLeft = false
      this.isAtLimitRight = false
      if (direction === 'left') {
        this.translateValue += this.slideUnit
      } else {
        this.translateValue -= this.slideUnit
      }
      if (this.translateValue >= 0) {
        this.translateValue = 0
        this.isAtLimitLeft = true
      }
      if (this.translateValue <= -this.$refs.slider.offsetWidth + baseWidth) {
        this.translateValue = -this.$refs.slider.offsetWidth + baseWidth
        this.isAtLimitRight = true
      }
      this.$refs.slider.style.transform = `translateX(${this.translateValue}px)`
    },
    setFilterPrice(values) {
      this.priceFilterValues = values
    },
    setFilterCapacity(values) {
      this.capacityFilterValues = values
    },
    applyFilters() {
      this.$emit('applyFilters', {
        price: this.priceFilterValues,
        capacity: this.capacityFilterValues
      })

      this.isDisplayedModal = false
    }
  },
  mounted() {
    this.slideUnit = window.innerWidth / 2

    window.addEventListener('scroll', (e) => {
      if (window.scrollY < 1) this.isAtTop = true
      else this.isAtTop = false
    })
  }
})
</script>
