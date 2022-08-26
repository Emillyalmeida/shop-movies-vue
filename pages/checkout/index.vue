<template>
  <div>
    <ModalSuccess :isOpen="isOpen" :close="close" :user="name" />
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100%"
      h="100%"
      flex-dir="column"
    >
      <Header :colorMode="colorMode" :toggle="toggleColorMode" />
      <CFlex
        :flex-dir="['column','column','row']"
        justify-content="space-around"
        :px="['4','10']"
        py="10"
        as="form"
        @submit="checkForm"
      >
        <c-box :w="['100%','100%','45%']">
          <c-heading font-weight="400"> Finalizar Compra</c-heading>
          <c-stack spacing="5" pt="5">
            <c-input v-model="name" border-width="2px" is-required placeholder="Nome Completo" />
            <c-flex justify-content="space-between">
              <c-input v-model="Cpf" w="47%" border-width="2px" is-required placeholder="CPF" />
              <c-input v-model="phone" w="47%" border-width="2px" is-required placeholder="Celular" />
            </c-flex>
            <c-input v-model="email" border-width="2px" is-required placeholder="Email" />
            <c-flex justify-content="space-between">
              <c-input v-model="cep" w="36%" is-required border-width="2px" placeholder="CEP" />
              <c-input w="59%" is-required border-width="2px" placeholder="Endereço" />
            </c-flex>
            <c-flex justify-content="space-between">
              <c-input v-model="city" w="47%" is-required border-width="2px" placeholder="Cidade" />
              <c-input v-model="estado" w="47%" is-required border-width="2px" placeholder="Estado" />
            </c-flex>
          </c-stack>
        </c-box>
        <BoxDetails />
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import {
  CBox,
  CFlex,
  CStack,
  CHeading

} from '@chakra-ui/vue'

import Header from '../../components/Header/header.vue'
import ModalSuccess from '~/components/ModalSuccess/ModalSuccess.vue'
import BoxDetails from '~/components/BoxDetails/BoxDetails.vue'
export default {
  name: 'PageCheckout',
  components: {
    CBox,
    CFlex,
    Header,
    CStack,
    CHeading,
    ModalSuccess,
    BoxDetails
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      loading: true,
      listMovies: [],
      showModal: false,
      name: null,
      email: null,
      city: null,
      Cpf: null,
      cep: null,
      state: null,
      phone: null,
      address: null,
      estado: null,
      isOpen: false,
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
  methods: {
    checkForm (e) {
      if (!this.validCpf(this.Cpf)) {
        this.showToast('CPF Invalido')
      } else if (!this.validPhone(this.phone)) {
        this.showToast('Celular Invalido')
      } else if (!this.validCep(this.cep)) {
        this.showToast('Cep Invalido')
      } else if (!this.validEmail(this.email)) {
        this.showToast('Email Invalido')
      } else {
        // eslint-disable-next-line quotes, no-useless-escape
        this.Cpf = this.Cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4")
        this.cep = this.cep.replace(/^(\d{5})(\d)/, '$1-$2')
        this.phone = this.phone.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
        this.isOpen = true
      }
      e.preventDefault()
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validCpf (cpf) {
      // eslint-disable-next-line no-useless-escape
      const re = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
      return re.test(cpf)
    },
    validPhone (phone) {
      const re = /\d{10,11}/
      return re.test(phone)
    },
    validCep (cep) {
      const re = /\d{8}/
      return re.test(cep)
    },
    showToast (msg) {
      this.$toast({
        title: 'Houve um erro',
        description: msg,
        status: 'error',
        duration: 5000,
        position: 'top'
      })
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>
