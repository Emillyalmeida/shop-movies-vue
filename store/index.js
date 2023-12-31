export const state = () => ({
  Cart: process.client ? JSON.parse(localStorage.getItem('@MovieShop/cart')) : []
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
  },
  getMovie: state => (movie) => {
    const findMovie = state.Cart.find(item => item.id === movie.id)
    return findMovie || {}
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
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/cart', JSON.stringify(state.Cart))
  },
  removeMovie (state, movie) {
    const filtered = state.Cart.filter(item => item.id !== movie.id)
    state.Cart = filtered
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/cart', JSON.stringify(state.Cart))
  },

  addQtd (state, movie) {
    movie.qtd++
    state.Cart = [...state.Cart]
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/cart', JSON.stringify(state.Cart))
  },

  removeQtd (state, movie) {
    movie.qtd--
    if (movie.qtd >= 1) {
      state.Cart = [...state.Cart]
    } else {
      const filtered = state.Cart.filter(item => item.id !== movie.id)
      state.Cart = filtered
    }
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/cart', JSON.stringify(state.Cart))
  },
  esvaziarCart (state) {
    state.Cart = []
    if (!process.client) { return }
    localStorage.setItem('@MovieShop/cart', JSON.stringify(state.Cart))
  }
}
