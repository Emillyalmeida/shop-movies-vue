<template>
  <div>
    <c-drawer :isOpen="isOpen" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content :mt="['14vh', '11vh', '12vh']" h="90vh">
        <c-drawer-close-button :top="['14vh', '11vh', '12vh']" mt="12px" ml="15px" right="auto" />
        <c-drawer-header ml="40px" display="flex" justify-content="space-between" align-items="center">
          <CHeading size="md">
            Meu Carrinho
          </CHeading>
          <CButton variant="link" color="indigo.400" @click="$store.commit('esvaziarCart')">
            Esvaziar
          </CButton>
        </c-drawer-header>

        <c-drawer-body overflow-y="scroll" px="2">
          <template v-if="getCart.length > 0">
            <ItemCart v-for="movie in getCart" :key="movie.id" :movie="movie" />
          </template>
          <template v-else>
            <CFlex flex-dir="column" align-items="center" p="6">
              <CIcon name="cart-plus" font-size="4rem" />
              <CText pt="3" font-size="1.5rem" font-weight="bold">
                Carrinho Vazio
              </CText>
            </CFlex>
          </template>
        </c-drawer-body>

        <c-drawer-footer flex-dir="column" gap="3">
          <CFlex justify-content="space-between" padding-x="1" py="4">
            <CText font-size="1.75rem">
              Total:
            </CText>
            <CText font-weight="bold" font-size="1.75rem">
              R$ {{ sumTotal.toFixed(2) }}
            </CText>
          </CFlex>
          <CButton
            v-if="getCart.length > 0"
            bg="indigo.400"
            color="white"
            :_hover="{bg: 'indigo.600' }"
            h="50px"
            font-size="1.25rem"
            mb="3"
            @click="go"
          >
            Finalizar compra
          </CButton>
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </div>
</template>

<script>
import {
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CButton,
  CFlex,
  CHeading,
  CIcon

} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import ItemCart from '../ItemCart/ItemCart.vue'

export default {
  name: 'ModalCart',
  components: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CButton,
    CFlex,
    CHeading,
    CIcon,
    ItemCart
  },
  props: { isOpen: Boolean, close: Function },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  },
  methods: {
    go () {
      return this.$router.push('/checkout')
    }
  }
}
</script>
