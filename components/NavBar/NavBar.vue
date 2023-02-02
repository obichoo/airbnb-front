<template>
  <div class="h-20 flex px-20 items-center border-b border-gray-100">
    <Logo class="mr-auto" />
    <SearchBar class="mx-6" />
    <a class="px-5 h-4" href="#">Mettre mon logement sur Airbnb</a>
    <LanguageSelector />
    <ProfileMenu class="ml-3" />
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
  }
}
</script>

<style></style>
