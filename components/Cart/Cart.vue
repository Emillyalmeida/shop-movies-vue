<template>
  <div>
    <c-drawer :isOpen="isOpen" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content :mt="['11vh', '11vh', '12vh']" h="90vh">
        <c-drawer-close-button :top="['11vh', '11vh', '12vh']" mt="10px" />
        <c-drawer-header>Meu Carrinho</c-drawer-header>

        <c-drawer-body>
          <template v-if="getCart.length > 0">
            <ItemCart v-for="movie in getCart" :key="movie.id" :movie="movie" />
          </template>
          <template v-else>
            <CText>
              Carrinho Vazio
            </CText>
          </template>
        </c-drawer-body>

        <c-drawer-footer flex-dir="column" gap="3">
          <CFlex justify-content="space-between" padding-x="1" py="4">
            <CText font-size="2rem">Total:</CText>
            <CText font-weight="bold" font-size="2rem"> R$ {{ sumTotal.toFixed(2) }}</CText>
          </CFlex>
          <CButton
            bg="indigo.400"
            color="white"
            :_hover="{bg: 'indigo.600' }"
            h="50px"
            font-size="1.5rem" >
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
  CFlex

} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import ItemCart from '../ItemCart/ItemCart.vue'

export default {
  name: 'ModalCart',
  comments: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CButton,
    CFlex
  },
  components: { ItemCart },
  props: { isOpen: Boolean, close: Function },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  }
}
</script>
