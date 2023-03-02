<template>
  <div>
    <div class="relative pt-9 px-20 mb-20">
      <PageTitle class="mb-10">Back office - Liste de tous les utilisateurs</PageTitle>

      <Button bgColor="white" textColor="black" outline="black" class="absolute top-10 right-20">
        <NuxtLink to="/admin" class="text-base flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Retour
        </NuxtLink>
      </Button>

      <p v-if="users.length == 0">Aucun utilisateur n'a encore été inscrit.</p>

      <div class="flex gap-2" v-if="users.length > 0">
        <table class="w-full">
          <tr class="text-left">
            <th class="border border-gray-300 py-2 px-4">Nom</th>
            <th class="border border-gray-300 py-2 px-4">Email</th>
            <th class="border border-gray-300 py-2 px-4">Superhôte</th>
            <th class="border border-gray-300 py-2 px-4">Rôle</th>
            <th class="border border-gray-300 py-2 px-4 w-[280px]">Actions</th>
          </tr>
          <tr v-for="user in users" :key="user._id">
            <td class="border border-gray-300 py-2 px-4">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ user.email }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ user.isSuperhote ? 'OUI' : 'NON' }}</td>
            <td class="border border-gray-300 py-2 px-4">{{ user.role }}</td>
            <td class="border border-gray-300 py-2 px-4">
              <div class="flex gap-2">
                <Button bgColor="red" class="text-base" @click.native="deleteUser(user._id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  computed: {
    adminUser() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    getAllUsers() {
      this.$airbnbApi.getAllUsers().then((response) => {
        this.users = response.filter((x) => x._id !== this.adminUser._id)
      })
    },
    deleteUser(id) {
      this.$airbnbApi.deleteUser(id).then(() => {
        this.getAllUsers()
      })
    }
  },
  mounted() {
    this.getAllUsers()
  }
}
</script>

<style></style>
