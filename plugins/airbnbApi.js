import Cookies from 'js-cookie'

export default function ({ $axios, store, $airbnbApi }, inject) {
  const axios = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  axios.setBaseURL('http://localhost:4000/api/v1/')

  axios.interceptors.request.use((config) => {
    const token = store.state.token
    if (token) {
      config.headers.common.Authorization = token
    }
    return config
  })

  const airbnbApiFunctions = {
    register: async (user) => {
      let reqError = false
      const response = await axios
        .post('auth/register', user)
        .then((res) => {
          store.commit('setToken', res.data.token)
          store.commit('setUser', res.data.user)
          window.location.reload()
          return res
        })
        .catch((error) => {
          reqError = true
          return error.response
        })
      if (reqError) throw response.data
      return response.data
    },
    login: async (user) => {
      let reqError = false
      const response = await axios
        .post('auth/login', user)
        .then((res) => {
          store.commit('setToken', res.data.token)
          store.commit('setUser', res.data.user)
          window.location.reload()
          return res
        })
        .catch((error) => {
          reqError = true
          return error.response
        })
      if (reqError) throw response.data
      return response.data
    },
    getLocations: async () => {
      const response = await axios
        .get('locations')
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    getFavouriteLocations: async () => {
      const response = await axios
        .get('users/favourites/all')
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    addFavourite: async (locationId) => {
      const response = await axios.post(`users/favourites/${locationId}`).then((res) => {
        Cookies.set('airbnb_user', JSON.stringify(res.data))
        store.commit('setUser', res.data)
        return res.data
      })
      return response
    },
    deleteFavourite: async (locationId) => {
      const response = await axios.delete(`users/favourites/${locationId}`).then((res) => {
        Cookies.set('airbnb_user', JSON.stringify(res.data))
        store.commit('setUser', res.data)
        return res.data
      })
      return response
    }
  }

  inject('axios', axios)
  inject('cookies', Cookies)
  inject('airbnbApi', airbnbApiFunctions)
}
