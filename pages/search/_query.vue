<template>
  <div class="container" width="100%">
    <BtnBack :text="'Home'" />
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100%"
      h="100%"
      flex-dir="column"
    >
      <CFlex justify="center" direction="column">
        <Header :color-mode="colorMode" :toggle="toggleColorMode" is-search />
        <CFlex p="6" flex-dir="column" justify="center">
          <CHeading py="3" pl="2" size="lg">
            Pesquisar
          </CHeading>
          <c-input-group :mr="['2','10','16']" ml="2">
            <CInput v-model="query" color="red.500" border-width="2px" placeholder="Pesquisar" />
            <c-input-right-element><CIcon name="magnifying-glass" color="gray.700" /></c-input-right-element>
          </c-input-group>
          <CHeading mt="6" pl="2" size="lg" font-weight="500">
            Resultados para : "<b>{{ query }}</b>"
          </CHeading>
        </CFlex>
        <template v-if="loading">
          <Loading />
        </template>
        <template v-else-if="listMovies.length > 0">
          <CGrid
            w="100%"
            template-columns="repeat(auto-fill, minmax(200px,220px))"
            justify-content="center"
            gap="10"
            p="8"
          >
            <Card v-for="movie in listMovies" :key="movie.id" :movie="movie" />
          </CGrid>
        </template>
        <template v-else>
          <CFlex pt="8" flex-dir="column" align-items="center">
            <CIcon name="heart-crack" font-size="8rem" />
            <CHeading mt="4">
              Sem resultados encontrados
            </CHeading>
          </CFlex>
        </template>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CFlex,
  CGrid,
  CHeading,
  CIcon,
  CInput,
  CInputRightElement

} from '@chakra-ui/vue'
import Header from '../../components/Header/header.vue'
import Loading from '../../components/loading/loading.vue'
import Card from '~/components/Card/card.vue'
import BtnBack from '~/components/BtnBack/btnBack.vue'

export default {
  name: 'SearchPage',
  components: {
    CBox,
    CFlex,
    Header,
    CGrid,
    Card,
    CHeading,
    CIcon,
    CInput,
    CInputRightElement,
    Loading,
    BtnBack
  },

  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      loading: true,
      listMovies: [],
      showModal: false,
      query: this.$route.query.q,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  watch: {
    query (value) {
      this.loading = true
      value ? this.getSearch(value) : this.getSearch('a')
    }
  },
  created () {
    this.getSearch(this.$route.query.q)
  },
  methods: {
    getSearch  (que) {
      this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NUXT_ENV_KEY_API}&language=pt-BR&query=${que}&page=1`).then((res) => {
        const notimg = res.results.filter(item => item.poster_path !== null)
        notimg.forEach(item => (item.poster_path = 'https://image.tmdb.org/t/p/w200' + item.poster_path))
        this.listMovies = notimg
        this.loading = false
      }).catch((_) => {
        console.log('erro load api, please reaload')
      })
    }
  }

}
</script>
