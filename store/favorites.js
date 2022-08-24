export const state = () => ({
  Favorites: []
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
  },
  removeFavorites (state, movie) {
    const filtered = state.Favorites.filter(item => item.id !== movie.id)
    state.Favorites = filtered
  },
  clearFavorites (state) {
    state.Favorites = []
  }
}
