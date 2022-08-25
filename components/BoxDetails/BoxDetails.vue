<template>
  <c-box :w="['100%','100%','45%']" py="8">
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
    <CFlex justify-content="space-between" padding-x="1" py="4">
      <CText font-size="1.75rem">
        Total:
      </CText>
      <CText font-weight="bold" font-size="1.75rem">
        R$ {{ sumTotal.toFixed(2) }}
      </CText>
    </CFlex>
    <CButton
      bg="indigo.400"
      color="white"
      :_hover="{bg: 'indigo.600' }"
      h="50px"
      w="100%"
      font-size="1.25rem"
      type="submit"
      value="Submit"
    >
      Finalizar compra
    </CButton>
  </c-box>
</template>

<script>
import {
  CBox,
  CFlex,
  CIcon,
  CButton,
  CText

} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import ItemCart from '../ItemCart/ItemCart.vue'
export default {
  name: 'BoxDetails',
  components: {
    CIcon,
    CButton,
    CBox,
    CText,
    CFlex,
    ItemCart
  },
  computed: {
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  }

}
</script>
