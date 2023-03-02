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
    createLocation: async (location) => {
      const response = await axios
        .post('locations', location)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    getMyLocations: async () => {
      const response = await axios
        .get('locations/user')
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
    },
    updateUser: async (user) => {
      let reqError = false
      const response = await axios
        .put('users', user)
        .then((res) => {
          store.commit('setUser', res.data)
          return res
        })
        .catch((error) => {
          reqError = true
          return error.response
        })
      if (reqError) throw response.data
      return response.data
    },
    bookLocation: async (booking) => {
      const response = await axios
        .post('bookings', booking)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    getMyBookings: async () => {
      const response = await axios
        .get('bookings/user')
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    cancelBooking: async (bookingId) => {
      const response = await axios
        .delete(`bookings/${bookingId}`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    getAllUsers: async () => {
      const response = await axios
        .get('users')
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    deleteUser: async (userId) => {
      const response = await axios
        .delete(`users/${userId}`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    },
    getAllBookings: async () => {
      const response = await axios
        .get('bookings')
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
      return response
    }
  }

  inject('axios', axios)
  inject('cookies', Cookies)
  inject('airbnbApi', airbnbApiFunctions)
}
