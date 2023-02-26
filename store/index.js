import Cookies from 'js-cookie'

export const state = () => ({
  token: null,
  user: null,
  logsReady: false,
  checkedPopups: []
})

export const mutations = {
  checkPopup(state, payload) {
    state.checkedPopups.push(payload)
  },
  setToken(state, payload) {
    state.token = payload
    Cookies.set('airbnb_token', payload, { expires: 1 }) // Expire dans 1 jour
  },
  setUser(state, payload) {
    state.user = payload
    Cookies.set('airbnb_user', JSON.stringify(payload), { expires: 1 })
  },
  setLogsReady(state, payload) {
    state.logsReady = payload
  },
  logout(state) {
    state.token = null
    state.user = null
    Cookies.remove('airbnb_token')
    Cookies.remove('airbnb_user')
  },
  removeCheckedPopup(state, payload) {
    state.checkedPopups = state.checkedPopups.filter((popup) => popup !== payload)
  }
}
