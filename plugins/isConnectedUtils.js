import { EventBus } from './eventBus'

export default ({ app, store, $router }, inject) => {
  function forceConnected() {
    if (!store.state.user) {
      EventBus.$emit('profileMenuOpenModal')
      return false
    } else {
      return true
    }
  }

  function userGoTo(link) {
    if (!store.state.user) {
      forceConnected()
      return false
    }
    app.router.push(link)
  }

  inject('userGoTo', userGoTo)
  inject('forceConnected', forceConnected)
}
