/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import {
  faHeart,
  faCartShopping,
  faTrashCan,
  faStar,
  faCartPlus,
  faMagnifyingGlass,
  faHeartCrack
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "movie shopping",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: 'description', name: 'description', content: 'Consiste de uma tela inical com uma lista de filmes, consumindo a Api da TMDB, onde pode-se navegar pelas as páginas e ver mais filmes.Nessa aplicação é possível ver os quadinhos disponíveis e adciona-los ao carrinho, além de uma lista de favoritos onde pode-se adcionar e remover os seus filmes preferidos' },
      { hid: 'og:title', property: 'og:title', content: 'Movie Shopp' },
      { hid: 'og:description', property: 'og:description', content: 'Consiste de uma tela inical com uma lista de filmes, consumindo a Api da TMDB, onde pode-se navegar pelas as páginas e ver mais filmes.Nessa aplicação é possível ver os quadinhos disponíveis e adciona-los ao carrinho, além de uma lista de favoritos onde pode-se adcionar e remover os seus filmes preferidos' },
      { hid: 'og:image', property: 'og:image', content: '/app-image.png' },

      // twitter card
      { hid: "twitter:title", name: "twitter:title", content: 'Movie Shopp' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Consiste de uma tela inical com uma lista de filmes, consumindo a Api da TMDB, onde pode-se navegar pelas as páginas e ver mais filmes.Nessa aplicação é possível ver os quadinhos disponíveis e adciona-los ao carrinho, além de uma lista de favoritos onde pode-se adcionar e remover os seus filmes preferidos' },
      { hid: "twitter:image", name: "twitter:image", content: '/app-image.png' },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/fontawesome",
    '@nuxtjs/dotenv'
  ],

  chakra: {
    icons: {
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: "fa",
      iconSet: {
        faHeart,
        faCartShopping,
        faTrashCan,
        faStar,
        faCartPlus,
        faMagnifyingGlass,
        faHeartCrack,
        faGithub,
        faLinkedin
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    "@chakra-ui/nuxt",
    // https://go.nuxtjs.dev/emotion
    "@nuxtjs/emotion",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // eslint-disable-next-line semi
  router: {
    prefetchLinks: false
  }
};
