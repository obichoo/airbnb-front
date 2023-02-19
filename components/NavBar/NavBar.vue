<template>
  <div>
    <div class="mt-20"></div>
    <div
      :class="{
        'z-[10001] top-0 fixed w-screen bg-white h-20 flex items-center border-b border-gray-200': true,
        'px-20': !sidesClass,
        [sidesClass]: !!sidesClass
      }"
    >
      <Logo class="mr-auto" />

      <SearchBar class="mx-6">
        <div class="flex" v-if="layout == 'default'">
          <button class="text-sm font-semibold px-4 border-r border-gray-300 h-5">
            <div>N'importe où</div>
          </button>
          <button class="text-sm font-semibold px-4 border-r border-gray-300 h-5">
            <div>Une semaine</div>
          </button>
          <button class="text-sm flex items-center pl-4 h-5">
            <div class="text-gray-500">Ajouter des voyageurs</div>
            <div class="bg-[color:var(--primary)] ml-4 p-[10.5px] rounded-full">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[11px] w-[11px] block fill-none stroke-white overflow-visible"
                style="stroke-width: 5.333333333333333"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
        </div>

        <div class="flex" v-else-if="layout == 'location'">
          <button class="text-sm flex items-center pl-4 h-5">
            <div class="font-semibold mr-7">Commencez votre recherche</div>
            <div class="bg-[color:var(--primary)] ml-4 p-[10.5px] rounded-full">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                class="h-[11px] w-[11px] block fill-none stroke-white overflow-visible"
                style="stroke-width: 5.333333333333333"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </SearchBar>

      <a class="pl-8 pr-4 h-4 font-semibold mb-1" href="#">Mettre mon logement sur Airbnb</a>

      <LanguageSelector class="p-2" />

      <ProfileMenu @toggleModal="toggleModal()" class="ml-3" />

      <Modal @toggleModal="toggleModal()" :isDisplayedModal="isDisplayedModal">
        <div class="w-[567px]">
          <div class="py-5">
            <button class="left-6 top-6 absolute" @click="toggleModal()">
              <span class="">
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
              </span>
            </button>
            <h5 class="font-extrabold text-center">Connexion ou inscription</h5>
            <div></div>
          </div>

          <div class="bg-[#DDDDDD] h-[1.5px] w-full"></div>

          <div class="p-6">
            <p class="text-[22px] font-semibold">Bienvenue sur Airbnb</p>
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

export default {
  components: {
    LanguageSelector,
    Logo,
    ProfileMenu,
    SearchBar
  },
  props: ['sidesClass'],
  data() {
    return {
      layout: this.$nuxt.$data.layoutName,
      isDisplayedModal: false
    }
  },
  methods: {
    toggleModal() {
      this.isDisplayedModal = !this.isDisplayedModal
    }
  },
  mounted() {
    this.toggleModal()
  }
}
</script>

<style></style>
