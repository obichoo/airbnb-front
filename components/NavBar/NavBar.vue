<template>
  <div>
    <div class="mt-20"></div>
    <div
      :class="{
        'z-[10001] top-0 fixed bg-white h-20 flex items-center border-b border-gray-200': true,
        'px-20': !sidesClass,
        [sidesClass]: !!sidesClass,
        'w-full': !$store.state.checkedPopups.includes('warnForBreakpoint'),
        'w-[1440px]': $store.state.checkedPopups.includes('warnForBreakpoint')
      }"
    >
      <Logo class="mr-auto" />

      <SearchBar class="mx-6 relative">
        <div :class="{ flex: true, 'opacity-0': isSearchActive, 'opacity-100': !isSearchActive }" @click="isSearchActive = true" v-if="layout == 'default'">
          <div id="search" class="text-sm font-semibold px-4 border-r border-gray-300 h-5">
            <div class="pointer-events-none">N'importe où</div>
          </div>
          <div id="search" class="text-sm font-semibold px-4 border-r border-gray-300 h-5">
            <div class="pointer-events-none">Une semaine</div>
          </div>
          <div id="search" class="text-sm flex items-center pl-4 h-5">
            <div class="pointer-events-none text-gray-500">Ajouter des voyageurs</div>
          </div>
        </div>

        <div
          :class="{ flex: true, 'opacity-0': isSearchActive, 'opacity-100': !isSearchActive }"
          @click="isSearchActive = true"
          v-else-if="layout == 'location'"
        >
          <div id="search" class="text-sm flex items-center pl-4 h-5">
            <div class="font-semibold mr-7 pointer-events-none">Commencez votre recherche</div>
          </div>
        </div>

        <input
          id="search"
          v-if="isSearchActive"
          ref="search"
          v-model="searchQuery"
          class="absolute left-6 outline-none bg-transparent text-sm"
          :style="{ width: `calc(100% - ${searchBtnWidth * 2}px)` }"
          type="text"
          placeholder="Rechercher une location"
        />

        <SearchButton id="search" @click.native="searchLocations()" class="cursor-pointer" ref="searchBtn" />
      </SearchBar>

      <button class="pl-8 pr-4 h-4 font-semibold mb-1" @click="$userGoTo('/create-location')">Mettre mon logement sur Airbnb</button>

      <LanguageSelector class="p-2" />

      <ProfileMenu @toggleModal="toggleModal($event)" class="ml-3" />

      <Modal @toggleModal="toggleModal()" :isDisplayedModal="isDisplayedModal">
        <div class="w-[567px]">
          <div class="py-5">
            <button class="left-6 top-6 absolute" @click="toggleModal()">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible"
              >
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
              </svg>
            </button>

            <h5 class="font-extrabold text-center" v-if="selectedModalTab === 'signin'">Connexion</h5>
            <h5 class="font-extrabold text-center" v-if="selectedModalTab === 'signup'">Inscription</h5>
          </div>

          <div class="bg-[#DDDDDD] h-[1.5px] w-full"></div>

          <div class="p-6">
            <p class="text-[22px] font-semibold">Bienvenue sur Airbnb</p>

            <Signin v-if="selectedModalTab === 'signin'" />
            <Signup v-if="selectedModalTab === 'signup'" />
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import LanguageSelector from './parts/LanguageSelector.vue'
import Logo from './parts/Logo.vue'
import ProfileMenu from './parts/ProfileMenu.vue'
import SearchBar from './parts/SearchBar.vue'
import SearchButton from './parts/SearchButton.vue'

export default {
  components: {
    LanguageSelector,
    Logo,
    ProfileMenu,
    SearchBar,
    SearchButton
  },
  props: ['sidesClass'],
  data() {
    return {
      layout: this.$nuxt.$data.layoutName,
      isDisplayedModal: false,
      isSearchActive: false,
      selectedModalTab: 'signin',
      searchQuery: '',
      searchTimer: null
    }
  },
  methods: {
    toggleModal(selectedTab) {
      if (selectedTab) this.selectedModalTab = selectedTab

      this.isDisplayedModal = !this.isDisplayedModal
    },
    searchLocations() {
      this.isSearchActive = true
      this.$userGoTo(`/${this.searchQuery}`)
    }
  },
  computed: {
    searchBtnWidth() {
      return this.$refs.searchBtn.$el.offsetWidth
    }
  },
  mounted() {
    window.addEventListener('click', (e) => {
      this.isSearchActive = false

      if (e.target.id === 'search') {
        this.isSearchActive = true
        setTimeout(() => {
          this.$refs.search.focus()
        }, 1)
      }
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.searchLocations()
      } else {
        if (this.searchTimer) {
          clearTimeout(this.searchTimer)
        }

        this.searchTimer = setTimeout(() => {
          if (this.isSearchActive) {
            this.searchLocations()
          }
        }, 500)
      }
    })
  }
}
</script>

<style></style>
