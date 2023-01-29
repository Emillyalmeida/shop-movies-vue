<template>
  <NuxtLink to="/">
    <c-button
      size="xl"
      px="4"
      py="2"
      pos="absolute"
      right="3px"
      bg="transparent"
      mt="4"
      color="red.500"
      :top="['15vh', '11vh', '12vh']"
    >
      {{ text }}
      <CIcon name="arrow-forward" ml="2" />
    </c-button>
  </NuxtLink>
</template>

<script>
import {
  CButton,
  CIcon
} from '@chakra-ui/vue'
export default {
  name: 'BtnBack',
  components: {
    CButton,
    CIcon
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
