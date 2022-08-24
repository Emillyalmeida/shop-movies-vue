<template>
  <div>
    <Cart :isOpen="isOpen" :close="close" />
    <Favorites :isOpen="isOpenFav" :close="closeFav" />
    <CFlex
      align="center"
      w="100vw"
      bg="vue.400"
      :h="['11vh', '11vh', '12vh']"
      color="white"
      padding-y="4"
      padding-x="4"
      justify-content="space-between"
    >
      <c-heading as="h1" size="xl">Movie Shopp</c-heading>
      <CFlex padding-x="6">
        <c-icon-button
          aria-label="Favoritos"
          variant="ghost"
          icon="heart"
          color="white"
          size="lg"
          font-size="1.8rem"
          mr="3"
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
      </CFlex>
    </CFlex>
  </div>
</template>

<script lang="js">

import {
  CFlex,
  CHeading,
  CIconButton

} from '@chakra-ui/vue'
import Cart from '../Cart/Cart.vue'
import Favorites from '../Favorites/Favorites.vue'

export default {
  name: 'HeaderComp',
  components: {
    CIconButton,
    CFlex,
    CHeading,
    Cart,
    Favorites
  },
  data () {
    return {
      isOpen: false,
      isOpenFav: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    },
    closeFav () {
      this.isOpenFav = false
    }
  }
}
</script>
