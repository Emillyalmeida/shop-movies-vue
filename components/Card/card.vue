
<template>
  <div>
    <CBox
      w="200px"
      box-shadow="xl"
      bg="white"
      min-h="430px"
      display="flex"
      flex-dir="column"
      justify-content="space-between"
      pos="relative"
      pb="{2}"
      rounded="lg"
      cursor="pointer"
      transition="0.3"
      :_hover="{ transform: 'translateY(-10px)', borderColor: 'gray.100'}"
    >
      <CImage
        :src="movie.poster_path"
        :alt="movie.title"
        h="275px"
        rounded="lg"
        w="200px"
        object-fit="cover"
      />
      <c-icon-button
        aria-label="Favoritos"
        variant="ghost"
        icon="heart"
        :color="$store.getters['favorites/isFavorites'](movie) ? 'red.500' : 'white'"
        font-size="1.5rem"
        top="5px"
        right="5px"
        position="absolute"
        transition="0.3"
        :_hover="{color: 'red.600' }"
        @click="$store.getters['favorites/isFavorites'](movie) ? $store.commit('favorites/removeFavorites', movie): $store.commit('favorites/addFavorites', movie)"
      />
      <CStack mb="0" color="black">
        <CText font-weight="bold" :font-size="movie.title.length > 30 ? '1rem' : '1.1rem'" text-align="center">
          {{ movie.title }}
        </CText>
        <CFlex flex-dir="row" align-items="center" justify-content="center" gap="2">
          <c-icon name="star" size="1rem" />
          <c-heading size="sm" pl="2">
            {{ movie.vote_average }}
          </c-heading>
        </CFlex>
        <CText text-align="center">
          R$ 19,90
        </CText>
        <CButton left-icon="cart-shopping" bg="indigo.400" color="white" :_hover="{bg: 'indigo.600' }" @click="$store.commit('addMovie', {movie})">
          Adicionar
        </CButton>
      </CStack>
    </CBox>
  </div>
</template>

<script>
// eslint-disable-next-line quotes
import { CBox, CImage, CStack, CButton, CHeading, CIconButton, CText } from "@chakra-ui/vue"

export default {
  name: 'CardItem',
  components: {
    CBox,
    CImage,
    CStack,
    CButton,
    CHeading,
    CIconButton,
    CText
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
