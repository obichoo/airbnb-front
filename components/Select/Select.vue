<template>
  <div :class="{ 'input relative flex flex-col border border-gray-400 pt-6 pr-9 pb-3 pl-3': true, 'rounded-xl': !isPartOfGroup }">
    <label :for="selectName">
      <span
        v-if="label"
        :class="{
          'absolute transition translate-y-0 text-gray-500': true,
          'top-1/2 -translate-y-1/2 mt-[5px] text-lg': !value,
          'top-1 -translate-y-0 text-sm': value
        }"
      >
        {{ label }}
      </span>
      <select class="outline-none" :value="value" @change="$emit('select', $event.target.value)" :name="selectName">
        <option v-for="option in selectOptions" :key="option.id" :value="option.id">{{ option.name }}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  props: { label: { required: false }, selectName: { required: false }, selectOptions: { required: true }, value: { required: false } },
  data() {
    return {
      isPartOfGroup: null,
      selectValue: null
    }
  },
  mounted() {
    this.isPartOfGroup = this.$parent.$el.classList.contains('input-group')
  }
}
</script>

<style scoped></style>
