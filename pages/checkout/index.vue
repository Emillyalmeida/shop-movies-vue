<template>
  <div>
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100%"
      h="100vh"
      flex-dir="column"
    >
      <Header />
      <CFlex
        :flex-dir="['column','column','row']"
        justify-content="space-around"
        px="10"
        py="10"
      >
        <c-box :w="['100%','100%','45%']">
          <c-heading font-weight="400"> Finalizar Compra</c-heading>
          <c-stack spacing="5" pt="5" as="form">
            <c-form-control is-required>
              <c-input border-width="2px" variant="outline" placeholder="Nome Completo" />
            </c-form-control>
            <c-flex justify-content="space-between">
              <c-input w="47%" is-required border-width="2px" variant="outline" placeholder="CPF" />
              <c-input w="47%" isRequired border-width="2px" variant="outline" placeholder="Celular" />
            </c-flex>
            <c-input border-width="2px" isRequired variant="outline" placeholder="Email" />
            <c-flex justify-content="space-between">
              <c-input w="36%" isRequired border-width="2px" variant="outline" placeholder="CEP" />
              <c-input w="59%" isRequired border-width="2px" variant="outline" placeholder="Endereço" />
            </c-flex>
            <c-flex justify-content="space-between">
              <c-input w="47%" isRequired border-width="2px" variant="outline" placeholder="Cidade" />
              <c-input w="47%" isRequired border-width="2px" variant="outline" placeholder="Estado" />
            </c-flex>
          </c-stack>
        </c-box>
        <c-box :w="['100%','100%','45%']" px="3" py="8">
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
          >
            Finalizar compra
          </CButton>
        </c-box>
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import {
  CBox,
  CFlex,
  CStack,
  CHeading,
  CIcon,
  CButton,
  CText,
  CFormControl

} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import Header from '../../components/Header/header.vue'
import ItemCart from '~/components/ItemCart/ItemCart.vue'
export default {
  name: 'PageCheckout',
  components: {
    CBox,
    CFlex,
    Header,
    CStack,
    CHeading,
    CIcon,
    CButton,
    CText,
    ItemCart,
    CFormControl
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
    },
    ...mapGetters([
      'getCart',
      'sumTotal'
    ])
  }
}
</script>
