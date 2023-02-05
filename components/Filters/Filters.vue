<template>
  <div :class="isAtTop ? 'pt-5' :''">
    <div v-if="!isAtLimitLeft" class="fixed flex items-center justify-center bg-gradient-to-r from-white h-20 w-20 left-0 z-10">
      <button
        class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
        v-on:click="slideTo('left')"
      >
        <svg viewBox="0 0 32 32" class="block fill-none h-3 w-3 stroke-current overflow-visible" style="stroke-width: 5.33333">
          <g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g>
        </svg>
      </button>
    </div>
    <div ref="slider" class="transition-all duration-500 fixed flex gap-8 pt-4 px-20">
      <Icon
        :class="`min-w-[50px] pb-3 ${selected == icon.fileName ? 'opacity-100 border-b-2 border-black' : 'opacity-60'}`"
        v-on:click.native="setSelectedIcon(icon.fileName)"
        :key="icon.fileName"
        v-for="icon in icons"
        :url="`/assets/img/homepage-icons/${icon.fileName}`"
        :label="icon.name"
      />
    </div>
    <div v-if="!isAtLimitRight" class="fixed flex items-center justify-center bg-gradient-to-l from-white h-20 w-20 right-0 z-10">
      <button
        class="bg-white border-gray-300 border-2 rounded-full p-2 transition-all duration-300 shadow-none shadow-black hover:shadow-md"
        v-on:click="slideTo('right')"
      >
        <svg viewBox="0 0 32 32" class="block fill-none h-3 w-3 stroke-current overflow-visible" style="stroke-width: 5.33333">
          <g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import icons from '@/static/assets/data/icons.json'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      icons: icons || [],
      selected: icons[0].fileName || '',
      translateValue: 0,
      slideUnit: 0,
      isAtLimitLeft: true,
      isAtLimitRight: false,
      isAtTop: true
    }
  },
  methods: {
    setSelectedIcon(iconName: string) {
      this.selected = iconName
      console.log(this.selected, iconName)
    },
    slideTo(direction: 'left' | 'right') {
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
      if (this.translateValue <= -(this.$refs.slider as HTMLElement).offsetWidth + window.innerWidth) {
        this.translateValue = -(this.$refs.slider as HTMLElement).offsetWidth + window.innerWidth
        this.isAtLimitRight = true
      }
      ;(this.$refs.slider as HTMLElement).style.transform = `translateX(${this.translateValue}px)`
    }
  },
  mounted() {
    this.slideUnit = window.innerWidth / 2

    window.addEventListener('scroll', (e: any) => {
      console.log(e)
    })
  }
})
</script>
