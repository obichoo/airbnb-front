<template>
  <div class="py-6 border-b border-[color:rgb(235,235,235)]">
    <div class="flex justify-between" :class="{ 'opacity-30 pointer-events-none': editingOtherInfo && !isEditing }">
      <div>
        <p>
          <slot name="label"></slot>
        </p>
        <p class="text-sm text-gray-500">
          <slot v-if="!isEditing" name="value"></slot>
          <slot v-if="isEditing" name="editText"></slot>
        </p>
      </div>

      <div>
        <button @click="editField()" class="underline font-semibold text-sm ml-4">
          <span v-if="!isEditing">Modifier</span>
          <span v-if="isEditing">Annuler</span>
        </button>
      </div>
    </div>

    <div class="mt-6" v-if="isEditing">
      <slot name="editForm"></slot>
      <Button @click.native="updateInfo()" class="mt-6" bgColor="black">Enregistrer</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false
    }
  },
  props: ['editingOtherInfo'],
  methods: {
    editField() {
      this.isEditing = !this.isEditing

      this.$emit('edit', this.isEditing)
    },
    updateInfo() {
      this.isEditing = false
      this.$emit('updateInfo')
    }
  }
}
</script>

<style></style>
