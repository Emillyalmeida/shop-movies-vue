<template>
  <div>
    <CFlex w="100%" p="2" px="['0','2']" justify-content="space-between" align-items="center">
      <CImage :src="movie.poster_path" :alt="movie.title" boxSize="100px" objectFit="contain" />
      <c-stack align-items="center">
        <c-heading text-align="center" font-size="lg">
          {{ movie.title }}
        </c-heading>
        <CText>R$ 19,90</CText>
      </c-stack>
      <c-stack spacing="2" pr="2">
        <CFlex align-items="center">
          <c-icon-button variant="ghost" size="sm" aria-label="adicionar" icon="add" @click="$store.commit('addQtd', movie)" />
          <CText px="2">
            {{ $store.getters.getMovie(movie).qtd }}
          </CText>
          <c-icon-button variant="ghost" size="sm" aria-label="diminuir" icon="minus" @click="$store.commit('removeQtd', movie)" />
        </CFlex>
      </c-stack>
      <c-icon-button
        variant="ghost"
        font-size="1.5rem"
        aria-label="remover"
        icon="trash-can"
        @click="$store.commit('removeMovie', movie)"
      />
    </CFlex>
  </div>
</template>

<script>
import { CImage, CStack, CHeading, CIconButton, CFlex, CText } from '@chakra-ui/vue'
export default {
  name: 'ItemCart',
  components: {
    CImage,
    CStack,
    CHeading,
    CIconButton,
    CFlex,
    CText
  },
  props: { movie: Object }
}
</script>
