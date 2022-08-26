<template>
  <CGrid
    w="100%"
    template-columns="repeat(auto-fill, minmax(200px,220px))"
    justify-content="center"
    gap="10"
    p="8"
  >
    <c-spinner v-for="numbers in 10" :key="numbers" w="200px" h="200px" />
  </CGrid>
</template>

<script>
import {
  CGrid,
  CSpinner
} from '@chakra-ui/vue'
export default {
  name: 'LoadingComp',
  components: {
    CGrid,
    CSpinner
  }
}
</script>
