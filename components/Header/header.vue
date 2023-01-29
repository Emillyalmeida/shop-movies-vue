<template>
  <div :style="{'width': '100%'}">
    <Cart :is-open="isOpen" :close="close" />
    <Favorites :is-open="isOpenFav" :close="closeFav" />
    <CFlex
      w="calc(100vw - 15px)"
      min-w="100%"
      bg="vue.400"
      :h="['15vh', '11vh', '12vh']"
      :min-h="['110px','75px','70px']"
      color="white"
      padding-y="4"
      padding-x="4"
      gap="3"
      pos="relative"
      align-items="center"
      :flex-dir="['column','row']"
      :justify-content="['space-between']"
    >
      <NuxtLink to="/">
        <c-heading as="h1" size="xl" pl="4">
          Movie Shop
        </c-heading>
      </NuxtLink>
      <CFlex justify-content="center" align-items="center">
        <c-input-group v-if="!isSearch">
          <c-input
            v-model="pesq"
            :w="['170px','300px']"
            placeholder="Pesquisa"
            border-width="2px"
            bg="white"
            color="black"
            name="search"
            @keyup="search"
          />
          <c-input-right-element>
            <CIconButton
              icon="magnifying-glass"
              variant="ghost"
              aria-label="Carrinhos"
              color="gray.700"
              @click="search"
            />
          </c-input-right-element>
        </c-input-group>
        <CFlex :padding-x="['2','6']" gap="10px" pos="relative">
          <CIconButton
            variant="ghost"
            color="white"
            size="lg"
            font-size="1.8rem"
            transition="0.3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            :_hover="{borderWidth: '1px', borderColor: 'white' }"
            :_focus="{ outline: 'none'}"
            @click="toggle"
          />
          <c-icon-button
            aria-label="Favoritos"
            variant="ghost"
            icon="heart"
            color="white"
            size="lg"
            font-size="1.8rem"
            :_hover="{borderWidth: '1px', borderColor: 'white' }"
            :_focus="{ outline: 'none'}"
            @click="isOpenFav= true"
          />
          <c-icon-button
            aria-label="Carrinho"
            variant="ghost"
            icon="cart-shopping"
            color="white"
            font-size="1.8rem"
            size="lg"
            :_hover="{borderWidth: '1px', borderColor: 'white' }"
            :_focus="{ outline: 'none'}"
            @click="isOpen= true"
          />
          <CBox
            rounded="full"
            bg="yellow.400"
            w="25px"
            h="25px"
            display="flex"
            justify-content="center"
            align-items="center"
            pos="absolute"
            :right="['7px','20px']"
            top="0px"
          >
            <c-heading size="md">
              {{ getCart.length }}
            </c-heading>
          </CBox>
        </CFlex>
      </CFlex>
    </CFlex>
  </div>
</template>

<script lang="js">

import {
  CFlex,
  CHeading,
  CIconButton,
  CBox,
  CInput,
  CInputGroup,
  CInputRightElement

} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import Cart from '../Cart/Cart.vue'
import Favorites from '../Favorites/Favorites.vue'
export default {
  name: 'HeaderComp',
  components: {
    CIconButton,
    CFlex,
    CHeading,
    Cart,
    Favorites,
    CBox,
    CInput,
    CInputGroup,
    CInputRightElement
  },
  props: {
    colorMode: {
      type: String,
      default: ''
    },
    toggle: {
      type: Function,
      default: () => {}
    },
    isSearch: Boolean
  },
  data () {
    return {
      isOpen: false,
      isOpenFav: false,
      pesq: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  },
  mounted () {
    if (!this.isSearch) {
      const inputSearch = document.getElementsByName('search')[0]

      inputSearch.addEventListener('keyup', (e) => {
        if (e.code === 'Enter') {
          this.search()
        }
      })
    }
  },
  methods: {
    close () {
      this.isOpen = false
    },
    closeFav () {
      this.isOpenFav = false
    },
    go () {
      return this.$router.push('/')
    },
    search () {
      return this.$router.push({ path: '/search', query: { q: this.pesq } })
    }

  }
}
</script>
