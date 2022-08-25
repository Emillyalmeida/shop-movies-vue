<template>
  <div class="container" width="100%">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100%"
      h="100%"
      flex-dir="column"
    >
      <CFlex justify="center" direction="column">
        <Header :colorMode="colorMode" :toggle="toggleColorMode" />
        <CFlex p="6" flex-dir="row" justify="center">
          <CHeading>Resultados para : </CHeading>
          <CHeading color="red.500" ml="2">{{ $route.query.q }}</CHeading>
        </CFlex>
        <template v-if="loading">
          <c-spinner size="xl" />
        </template>
        <template v-else-if="listMovies.length > 0">
          <CGrid
            v-if="listMovies.length > 0"
            w="100%"
            template-columns="repeat(auto-fill, minmax(200px,220px))"
            justify-content="center"
            gap="10"
            p="8"
            mt="4"
          >
            <Card v-for="movie in listMovies" :key="movie.id" :movie="movie" />
          </CGrid>
        </template>
        <template v-else>
          <CFlex pt="8" flex-dir="column" align-items="center">
            <CIcon name="heart-crack" font-size="8rem" />
            <CHeading mt="4">Sem resultados encontrados </CHeading>
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
  CSpinner

} from '@chakra-ui/vue'
import Header from '../../components/Header/header.vue'
import Card from '~/components/Card/card.vue'
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
    CSpinner
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
    query (value, old) {
      console.log(value, old)
      if (value !== old) {
        this.getSearch()
      }
    }
  },
  created () {
    this.getSearch()
  },
  methods: {
    getSearch  () {
      this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NUXT_ENV_KEY_API}&language=pt-BR&query=${this.query}&page=1`).then((res) => {
        const notimg = res.results.filter(item => item.poster_path !== null)
        notimg.forEach(item => (item.poster_path = 'https://image.tmdb.org/t/p/w200' + item.poster_path))
        this.listMovies = notimg
        this.loading = false
        console.log(res.results)
      }).catch((_) => {
        console.log('erro load api, please reaload')
      })
    }
  }

}
</script>
