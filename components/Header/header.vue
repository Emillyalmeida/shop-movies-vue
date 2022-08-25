<template>
  <div width="100%">
    <Cart :isOpen="isOpen" :close="close" />
    <Favorites :isOpen="isOpenFav" :close="closeFav" />
    <CFlex
      w="100vw"
      bg="vue.400"
      :h="['15vh', '11vh', '12vh']"
      color="white"
      padding-y="4"
      padding-x="4"
      gap="3"
      align-items="center"
      :justify-content="['center','space-between']"
      :wrap="['wrap','no-wrap']"
    >
      <NuxtLink to="/">
        <c-heading as="h1" size="xl" pl="4">Movie Shop</c-heading>
      </NuxtLink>
      <CFlex justify-content="space-between" align-items="center">
        <c-input-group>
          <c-input :w="['170px','300px']" placeholder="Pesquisa" border-width="2px" bg="white" />
          <c-input-right-element><c-icon name="arrow-forward" color="gray.800" /></c-input-right-element>
        </c-input-group>
        <CFlex padding-x="6" gap="10px" pos="relative">
          <CIconButton
            variant="ghost"
            color="white"
            size="lg"
            font-size="1.8rem"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            :_hover="{borderWidth: '1px', borderColor: 'white' }"
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
            right="20px"
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
  CInputRightElement,
  CIcon

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
    CInputRightElement,
    CIcon
  },
  props: { colorMode: String, toggle: Function },
  data () {
    return {
      isOpen: false,
      isOpenFav: false
    }
  },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
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
    }

  }
}
</script>
