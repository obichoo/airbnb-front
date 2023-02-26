<template>
  <div :class="{ 'relative min-h-screen overflow-hidden': true, 'custom-shadow-2': forceViewportTo1440px }" :style="forceViewportTo1440px">
    <NavBar />

    <Nuxt />

    <Footer />

    <Popup ref="warnForBreakpointPopup" popupName="warnForBreakpoint">
      <div class="flex items-center justify-between">
        <div>
          <p class="font-extrabold">Attention !</p>
          <p>
            Le style du site AirBnb a été minutieusement recopié sur le breakpoint 1440px.
            <br />
            Je recommande donc fortement d'effectuer la visite avec cette largeur de viewport.
            <br />
            Merci et bonne navigation !
            <br />
            <br />
            P.S.: Certains éléments ne servent que de décorations pour améliorer l'immersion, et ne sont donc pas fonctionnels.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <Button :fullWidth="true" bgColor="#000" @click.native="$refs.warnForBreakpointPopup.checkPopup()">
            C'est compris !
            <br />
            (cela forcera le changement de largeur)
          </Button>
          <Button :fullWidth="true" bgColor="#fff" textColor="black" outline="#000" @click.native="$refs.warnForBreakpointPopup.checkPopup(false)">
            Je n'ai pas envie de changer les dimensions
          </Button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  beforeCreate() {
    const token = Cookies.get('airbnb_token')
    const user = Cookies.get('airbnb_user')

    if (token && user) {
      this.$store.commit('setToken', token)
      this.$store.commit('setUser', JSON.parse(user))
    }

    this.$store.commit('setLogsReady', true)
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
