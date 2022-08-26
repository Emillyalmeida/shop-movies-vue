<template>
  <div class="container" width="100%">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100%"
      h="100%"
      flex-dir="column"
    >
      <CFlex justify="center" direction="column" align="center">
        <Header :colorMode="colorMode" :toggle="toggleColorMode" />
        <Loading v-if="loading" />
        <CGrid
          v-else
          w="100%"
          template-columns="repeat(auto-fill, minmax(200px,220px))"
          justify-content="center"
          gap="10"
          p="8"
          mt="4"
          min-h="80vh"
        >
          <Card v-for="movie in listMovies" :key="movie.id" :movie="movie" />
        </CGrid>
        <CFlex
          justify="center"
          direction="column"
          align-items="center"
          color="white"
          bg="vue.400"
          w="100vw"
          p="4"
        >
          <CText fontSize="2xl">
            Criado por Emilly Almeida
          </CText>
          <CFlex pt="3">
            <c-link fontSize="xl" target="_blank" href="https://github.com/Emillyalmeida/">Git Hub</c-link>
            <c-link ml="3" target="_blank" fontSize="xl" href="https://www.linkedin.com/in/emilly-almeida-front-end/">Linkedin</c-link>
          </CFlex>
        </CFlex>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CFlex,
  CGrid,
  CText,
  CLink

} from '@chakra-ui/vue'
import Header from '../components/Header/header.vue'
import Card from '~/components/Card/card.vue'
import Loading from '~/components/loading/loading.vue'
export default {
  name: 'IndexPage',
  components: {
    CBox,
    CFlex,
    Header,
    CGrid,
    Card,
    CText,
    CLink,
    Loading
  },

  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      loading: true,
      listMovies: [],
      showModal: false,
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
  created () {
    this.fetchSomething()
  },
  methods: {
    fetchSomething  () {
      this.$axios.$get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NUXT_ENV_KEY_API}&language=pt-BR&page=1`).then((res) => {
        res.results.forEach(item => (item.poster_path = 'https://image.tmdb.org/t/p/w200' + item.poster_path))
        this.listMovies = res.results
        this.loading = false
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
