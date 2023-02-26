<template>
  <div class="fixed w-full bottom-7 z-[10200]" v-if="!hasChecked">
    <div class="mx-20 p-6 custom-shadow-2 bg-white rounded-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: { popupName: { required: true } },
  data() {
    return {
      hasChecked: this.$store.state.checkedPopups.includes(this.popupName)
      // hasChecked: true
    }
  },
  methods: {
    checkPopup(state) {
      if (state === false) {
        this.hasChecked = true
      } else {
        this.hasChecked = true
        this.$store.commit('checkPopup', this.popupName)
      }
    }
  }
}
</script>

<style></style>
