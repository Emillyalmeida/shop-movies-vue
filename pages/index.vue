<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
    >
      <CFlex justify="center" direction="column" align="center">
        <Header />
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
          <!-- <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
          <CButton left-icon="info" variant-color="blue" @click="showToast">
            Show Toast
          </CButton>
        </CBox> -->
        </CGrid>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  // CButton,
  // CIconButton,
  CFlex,
  CGrid

} from '@chakra-ui/vue'
import Header from '../components/Header/header.vue'
import Card from '~/components/Card/card.vue'
export default {
  name: 'IndexPage',
  components: {
    CBox,
    // CButton,
    // CIconButton,
    CFlex,
    Header,
    CGrid,
    Card
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
  mounted () {
    this.fetchSomething()
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    },
    fetchSomething  () {
      this.$axios.$get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_KEY_API}&language=pt-BR&page=1`).then((res) => {
        res.results.forEach(item => (item.poster_path = 'https://image.tmdb.org/t/p/w200' + item.poster_path))
        this.listMovies = res.results
        console.log(res.results)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
