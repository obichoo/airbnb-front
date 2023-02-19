<template>
  <div v-if="isDisplayedModal" class="modal fixed top-0 left-0 right-0 bottom-0 z-[10001]">
    <div @click="toggleModal()" class="modal--overlay w-full h-full bg-[#333333] opacity-[0.65]"></div>

    <div class="modal--content bg-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 custom-shadow rounded-xl">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isDisplayedModal'],
  methods: {
    toggleModal() {
      this.$emit('toggleModal')
    }
  }
}
</script>

<style></style>
