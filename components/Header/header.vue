<template>
  <div>
    <CFlex
      align="center"
      w="100vw"
      bg="vue.400"
      :h="['11vh', '11vh', '12vh']"
      color="white"
      padding-y="4"
      padding-x="4"
      justify-content="space-between"
    >
      <c-heading as="h1" size="xl">Movie Shopp</c-heading>
      <CFlex padding-x="6">
        <c-icon-button
          aria-label="Favoritos"
          variant="ghost"
          icon="heart"
          color="white"
          size="lg"
          font-size="2rem"
          mr="3"
        />
        <c-icon-button
          aria-label="Carrinho"
          variant="ghost"
          icon="cart-shopping"
          color="white"
          font-size="2rem"
          size="lg"
        />
      </CFlex>
    </CFlex>
  </div>
</template>

<script lang="js">

import {
  CFlex,
  CHeading,

  CIconButton

} from '@chakra-ui/vue'

export default {
  name: 'HeaderComp',
  components: {
    // CButton,
    CIconButton,
    CFlex,
    CHeading
  }
}
</script>
