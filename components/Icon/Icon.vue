<template>
  <div class="w-max cursor-pointer">
    <img class="block mx-auto w-6 mb-2" :src="url" :alt="label" />
    <p class="text-xs text-center">{{ label }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    label: String,
    url: String,
    imgPrefixUrl: String,
  }
})
</script>
