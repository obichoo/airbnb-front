<template>
  <div :class="{ 'relative min-h-screen overflow-hidden': true, 'custom-shadow-2': forceViewportTo1440px }" :style="forceViewportTo1440px">
    <NavBar sidesClass="px-[160px]" />
    <Nuxt class="px-40" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  mounted() {
    const token = Cookies.get('airbnb_token')
    const user = Cookies.get('airbnb_user')

    if (token && user) {
      this.$store.commit('setToken', token)
      this.$store.commit('setUser', JSON.parse(user))
    }
  },
  computed: {
    forceViewportTo1440px() {
      if (this.$store.state.checkedPopups.includes('warnForBreakpoint')) return 'width: 1440px; max-width: 1440px; margin-left: auto; margin-right: auto;'
      else return ''
    }
  }
}
</script>

<style></style>
