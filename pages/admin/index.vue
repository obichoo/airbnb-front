<template>
  <div>
    <div class="pt-9 px-20">
      <PageTitle class="mb-10">Back office</PageTitle>

      <div class="flex gap-6">
        <NuxtLink to="/admin/users">
          <Button bgColor="black" class="text-base">Voir la liste de tous les utilisateurs</Button>
        </NuxtLink>

        <NuxtLink to="/admin/bookings">
          <Button bgColor="black" class="text-base">Voir la liste de toutes les réservations</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
