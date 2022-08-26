<template>
  <CGrid
    w="100%"
    template-columns="repeat(auto-fill, minmax(200px,220px))"
    justify-content="center"
    gap="10"
    p="8"
  >
    <CStack
      v-for="numbers in 20"
      :key="numbers"
      bg="white"
      w="200px"
      h="420px"
      rounded="lg"
      justify-content="center"
      align-items="center"
    >
      <c-spinner w="180px" h="180px" color="vue.400" />
    </CStack>
  </CGrid>
</template>

<script>
import {
  CGrid,
  CSpinner,
  CStack
} from '@chakra-ui/vue'
export default {
  name: 'LoadingComp',
  components: {
    CGrid,
    CSpinner,
    CStack
  }
}
</script>
