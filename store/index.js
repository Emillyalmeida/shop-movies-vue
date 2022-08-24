export const state = () => ({
  Cart: []
})
export const getters = {
  getCart (state) {
    return state.Cart
  },
  sumTotal (state) {
    const total = state.Cart.reduce(
      (sum, curr) => 19.90 * curr.qtd + sum,
      0
    )
    return total
  }
}

export const mutations = {
  addMovie (state, { movie }) {
    const isDuplicate = state.Cart.some(item => item.id === movie.id)

    if (isDuplicate) {
      movie.qtd++
      state.Cart = [...state.Cart]
    } else {
      movie.qtd = 1
      state.Cart = [...state.Cart, movie]
    }
  },
  removeMovie (state, movie) {
    const filtered = state.Cart.filter(item => item.id !== movie.id)
    state.Cart = filtered
  },

  addQtd (state, movie) {
    movie.qtd++
    state.Cart = [...state.Cart]
  },

  removeQtd (state, movie) {
    movie.qtd--
    if (movie.qtd >= 1) {
      state.Cart = [...state.Cart]
    } else {
      this.removeMovie(state, movie)
    }
  }
}
