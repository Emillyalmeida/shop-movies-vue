
<template>
  <div>
    <CBox
      w="200px"
      boxShadow="xl"
      bg="white"
      min-h="400px"
      display="flex"
      flex-dir="column"
      justify-content="space-between"
      pos="relative"
      pb="{2}"
      rounded="lg"
      cursor="pointer"
    >
      <CImage
        :src="movie.poster_path"
        :alt="movie.title"
        min-h="300px"
        rounded="lg"
      />
      <CStack>
        <CText font-weight="bold" text-align="center"> {{ movie.title }}</CText>
        <CButton left-icon="cart-shopping">
          Adicionar
        </CButton>
      </CStack>
    </CBox>
  </div>
</template>

<script>
// eslint-disable-next-line quotes
import { CBox, CImage, CStack, CButton } from "@chakra-ui/vue"
export default {
  name: 'CardItem',
  components: {
    CBox,
    CImage,
    CStack,
    CButton
  },
  props: { movie: Object }
}
</script>
