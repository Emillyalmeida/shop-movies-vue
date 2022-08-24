<template>
  <div>
    <c-drawer :isOpen="isOpen" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content :mt="['11vh', '11vh', '12vh']" h="90vh" >
        <c-drawer-close-button :top="['11vh', '11vh', '12vh']"  mt="10px"/>
        <c-drawer-header>Meu Carrinho</c-drawer-header>

        <c-drawer-body>
          <h2>{{ getCart.length }}</h2>
        </c-drawer-body>

        <c-drawer-footer>
          <c-button variant="outline" mr="3" @click="close">Cancel</c-button>
          <c-button variant-color="blue">Save</c-button>
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
  CDrawerCloseButton
} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ModalCart',
  comments: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton
  },
  props: { isOpen: Boolean, close: Function },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  }
}
</script>
