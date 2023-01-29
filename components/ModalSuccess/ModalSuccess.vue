<template>
  <div>
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      is-centered
    >
      <c-modal-content ref="content" border-width="2px" border-color="gray.200">
        <c-modal-header> Obridado(a) {{ user }}!</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-text>
            Sua Compra foi finalizada com sucesso!
          </c-text>
        </c-modal-body>
        <c-modal-footer>
          <c-button
            bg="indigo.400"
            color="white"
            :_hover="{bg: 'indigo.600' }"
            h="50px"
            w="100%"
            font-size="1.25rem"
            @click="go"
          >
            Ir para a Loja
          </c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>

<script>
import {
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CText
} from '@chakra-ui/vue'
export default {
  name: 'ModalSuccess',
  components: {
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CText
  },
  props: {
    isOpen: Boolean,
    close: {
      type: Function,
      required: true
    },
    user: {
      type: String,
      default: null
    }
  },
  methods: {
    go () {
      return this.$router.push('/')
    }
  }
}
</script>
