<template>
  <div class="fixed flex gap-8 pt-4 px-20 shadow">
    <Icon :class="`min-w-[50px] pb-3 ${selected == icon.fileName ? 'opacity-100 border-b-2 border-black' : 'opacity-60'}`" v-on:click.native="setSelectedIcon(icon.fileName)"
      :key="icon.fileName" v-for="icon in icons" :url="`/assets/img/homepage-icons/${icon.fileName}`"
      :label="icon.name" />
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
      selected: icons[0].fileName || ''
    }
  },
  methods: {
    setSelectedIcon(iconName: string) {
      this.selected = iconName
      console.log(this.selected, iconName);
    }
  }
})
</script>
