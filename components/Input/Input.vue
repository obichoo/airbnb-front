<template>
  <div :class="{ 'input relative flex flex-col border border-gray-400 pt-6 pr-9 pb-3 pl-3': true, 'rounded-lg': !isPartOfGroup }">
    <label>
      <span
        v-if="label"
        :for="inputName"
        :class="{
          'absolute transition translate-y-0 text-gray-500': true,
          'top-1/2 -translate-y-1/2 mt-[5px] text-lg': !inputValue,
          'top-1 -translate-y-0 text-sm': inputValue
        }"
      >
        {{ label }}
      </span>
      <input class="outline-none" v-model="inputValue" @input="$emit('input', $event.target.value)" :type="type" :name="inputName" />
    </label>
  </div>
</template>

<script>
export default {
  props: { label: { required: false }, value: { required: false }, type: { default: 'text', required: false }, placeholder: { required: false }, inputName: { required: false } },
  data() {
    return {
      isPartOfGroup: null,
      inputValue: null
    }
  },
  mounted() {
    this.isPartOfGroup = this.$parent.$el.classList.contains('input-group')
    this.inputValue = this.value
  }
}
</script>

<style scoped></style>
