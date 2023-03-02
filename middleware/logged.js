export default function ({ store, route, redirect, app }) {
  const forbiddenRoutesForGuests = [
    '/account',
    '/account/bookings',
    '/favourites',
    '/admin',
    '/admin/bookings',
    '/admin/users',
    '/create-location',
    '/my-locations'
  ]
  const forbiddenRoutesForCustomers = ['/admin', '/admin/bookings', '/admin/users', '/create-location', '/my-locations']
  const forbiddenRoutesForOwners = ['/admin', '/admin/bookings', '/admin/users']

  if (!store.state.user && !store.state.token && forbiddenRoutesForGuests.includes(route.path)) {
    return redirect('/')
  }
}
