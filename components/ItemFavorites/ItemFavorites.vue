<template>
  <div>
    <CFlex w="100%" p="2" px="['0','2']" justify-content="space-between" align-items="center">
      <CImage :src="movie.poster_path" :alt="movie.title" boxSize="100px" objectFit="contain" />
      <c-heading text-align="center" font-size="lg">
        {{ movie.title }}
      </c-heading>
      <CText>R$ 19,90</CText>
      <c-icon-button
        variant="ghost"
        font-size="1.5rem"
        aria-label="adicionar ao carrinho"
        icon="cart-plus"
        @click="$store.commit('addMovie', {movie})"
      />
      <c-icon-button
        variant="ghost"
        font-size="1.5rem"
        aria-label="remover"
        icon="trash-can"
        @click="$store.commit('favorites/removeFavorites', movie)"
      />
    </CFlex>
  </div>
</template>

<script>
import { CImage, CHeading, CIconButton, CFlex, CText } from '@chakra-ui/vue'
export default {
  name: 'ItemFavorites',
  components: {
    CImage,
    CHeading,
    CIconButton,
    CFlex,
    CText
  },
  props: { movie: Object }
}
</script>
