export default function ({ store, route, redirect, app }) {
  const forbiddenRoutesForGuests = ['/profile', '/favourites']

  if (!store.state.user && !store.state.token && forbiddenRoutesForGuests.includes(route.path)) {
    return redirect('/')
  }
}
