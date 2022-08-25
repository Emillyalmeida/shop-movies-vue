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
      :justify-content="['center','space-between']"
      :wrap="['wrap','no-wrap']"
    >
      <c-heading as="h1" size="xl" pl="4">Movie Shop</c-heading>
      <CFlex justify-content="space-between" align-items="center">
        <c-input-group>
          <c-input :w="['170px','300px']" placeholder="Pesquisa" border-width="2px" />
          <c-input-right-element><c-icon name="check" color="green.500" /></c-input-right-element>
        </c-input-group>
        <CFlex padding-x="6" pos="relative">
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
    }
  }
}
</script>
