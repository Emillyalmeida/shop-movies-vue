export const state = () => ({
  Favorites: process.client ? JSON.parse(localStorage.getItem('@MovieShop/Favorites')) : []
})

export const getters = {
  getFavorites (state) {
    return state.Favorites
  },
  isFavorites: state => (movie) => {
    const isFav = state.Favorites.some(item => item.id === movie.id)
    return isFav
  }
}

export const mutations = {
  addFavorites (state, movie) {
    const isFav = state.Favorites.some(item => item.id === movie.id)
    if (!isFav) {
      state.Favorites = [...state.Favorites, movie]
    }
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/Favorites', JSON.stringify(state.Favorites))
  },
  removeFavorites (state, movie) {
    const filtered = state.Favorites.filter(item => item.id !== movie.id)
    state.Favorites = filtered
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/Favorites', JSON.stringify(state.Favorites))
  },
  clearFavorites (state) {
    state.Favorites = []
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/Favorites', JSON.stringify(state.Favorites))
  }
}
