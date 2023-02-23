<template>
  <div>
    <button :class="{ 'py-[14px] px-6 rounded-lg': true, 'w-full': fullWidth }" :style="buttonStyle">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fullWidth: { required: false, default: false },
    outline: {
      required: false,
      default: null
    },
    bgColor: {
      required: false,
      default: '#e61e4d'
    },
    textColor: {
      required: false,
      default: 'white'
    }
  },
  computed: {
    buttonStyle() {
      let style = `color: ${this.textColor}; background-color: ${this.bgColor}; border: 1px solid ${this.outline}`
      return style
    }
  }
}
</script>

<style></style>
