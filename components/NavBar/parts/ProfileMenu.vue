<template>
  <div class="relative">
    <button @click="toggleMenu(!isMenuDisplayed)" id="menu_btn" class="border border-gray-200 p-1 rounded-full flex items-center custom-shadow" type="button">
      <div class="ml-2 mr-3 pointer-events-none">
        <svg viewBox="0 0 32 32" class="block fill-none h-4 w-4 stroke-current overflow-visible" style="stroke-width: 3">
          <g fill="none" fill-rule="nonzero">
            <path d="m2 16h28"></path>
            <path d="m2 24h28"></path>
            <path d="m2 8h28"></path>
          </g>
        </svg>
      </div>
      <div class="pointer-events-none">
        <svg viewBox="0 0 32 32" class="block h-8 w-8 fill-gray-500">
          <path
            d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
          ></path>
        </svg>
      </div>
    </button>

    <div v-if="isMenuDisplayed" id="menu" class="text-sm absolute w-[242px] right-0 py-3 px-4 mt-3 flex bg-white custom-shadow-2 flex-col rounded-xl">
      <div class="w-full flex flex-col items-start gap-[21px] mb-5" v-if="user">
        <p class="font-semibold">
          Bienvenue,
          <span class="capitalize">{{ user.firstName }}</span>
        </p>
      </div>

      <div class="w-full flex flex-col items-start gap-[21px] mb-5" v-if="user">
        <button
          @click="
            toggleMenu(false)
            $userGoTo('/profile')
          "
        >
          Mon profil
        </button>
        <button
          @click="
            toggleMenu(false)
            $userGoTo('/favourites')
          "
        >
          Mes favoris
        </button>
        <button
          @click="
            toggleMenu(false)
            logout()
          "
        >
          Déconnexion
        </button>
      </div>

      <div class="w-full flex flex-col items-start gap-[21px] mb-5" v-if="!user">
        <button @click="toggleConnectionModal('signin')" class="font-semibold mt-1">Connexion</button>
        <button @click="toggleConnectionModal('signup')">Inscription</button>
      </div>

      <div class="bg-[#DDDDDD] h-[1.5px] w-full mb-5"></div>

      <div class="w-full flex flex-col items-start gap-[21px]">
        <button
          class="whitespace-nowrap"
          @click="
            toggleMenu(false)
            $userGoTo('/create-location')
          "
        >
          Mettre mon logement sur Airbnb
        </button>
        <button>Aide</button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/plugins/eventBus.js'

export default {
  data() {
    return {
      isMenuDisplayed: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    toggleMenu(state) {
      this.isMenuDisplayed = state
    },
    toggleConnectionModal(e) {
      this.toggleMenu(false)

      this.$emit('toggleModal', e)
    },
    logout() {
      this.$store.commit('logout')
      window.location.reload()
    }
  },
  mounted() {
    EventBus.$on('profileMenuOpenModal', () => this.toggleConnectionModal('signin'))

    window.addEventListener('click', (e) => {
      e.stopPropagation()
      
      if (e.target.closest('#menu_btn') && !this.isMenuDisplayed) {
        this.toggleMenu(false)
      } else if (e.target.closest('#menu') || e.target.closest('#menu_btn')) {
        this.toggleMenu(true)
      } else {
        this.toggleMenu(false)
      }
    })
  }
}
</script>

<style></style>
