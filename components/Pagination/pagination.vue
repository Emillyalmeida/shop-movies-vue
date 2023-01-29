<template>
  <CFlex justify="center" align-items="center" px="6" pt="10">
    <c-button
      v-if="page > 1"
      left-icon="chevron-left"
      color="white"
      bg="indigo.400"
      :_hover="{bg: 'indigo.600' }"
      @click="decrement"
    >
      Anterior
    </c-button>
    <CText color="red.500" px="6" font-weight="700" font-size="2xl">
      {{ page }}
    </CText>
    <c-button
      right-icon="chevron-right"
      color="white"
      bg="indigo.400"
      :_hover="{bg: 'indigo.600' }"
      @click="increment"
    >
      Próxima
    </c-button>
  </CFlex>
</template>

<script>
import {
  CFlex,
  CButton

} from '@chakra-ui/vue'
export default {
  name: 'PaginationIndex',
  components: {
    CFlex,
    CButton
  },
  props: {
    increment: {
      type: Function,
      required: true
    },
    decrement: {
      type: Function,
      required: true
    },
    page: {
      type: Number,
      default: 1
    }
  }
}
</script>
