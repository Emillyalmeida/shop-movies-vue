<template>
  <div>
    <c-drawer :isOpen="isOpen" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content :mt="['11vh', '11vh', '12vh']" h="90vh">
        <c-drawer-close-button :top="['11vh', '11vh', '12vh']" mt="12px" ml="15px" right="auto" />
        <c-drawer-header ml="40px" display="flex" justify-content="space-between" align-items="center">
          <CHeading size="md">
            Meus Favoritos
          </CHeading>
          <CButton variant="link" color="indigo.400" @click="$store.commit('favorites/clearFavorites')">
            Limpar
          </CButton>
        </c-drawer-header>

        <c-drawer-body overflow-y="scroll" px="2">
          <template v-if="$store.state.favorites.Favorites.length > 0">
            <ItemFavorites v-for="movie in $store.state.favorites.Favorites" :key="movie.id" :movie="movie" />
          </template>
          <template v-else>
            <CFlex flex-dir="column" align-items="center" p="6">
              <CIcon name="heart-crack" font-size="4rem" />
              <CText pt="3" font-size="1.5rem" font-weight="bold">
                Sem Favoritos
              </CText>
            </CFlex>
          </template>
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
  </div>
</template>

<script>
import {
  CDrawer,
  CDrawerBody,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CButton,
  CFlex,
  CHeading,
  CIcon

} from '@chakra-ui/vue'
import ItemFavorites from '../ItemFavorites/ItemFavorites.vue'
export default {
  name: 'ModalFavorites',
  components: {
    CDrawer,
    CDrawerBody,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CButton,
    CFlex,
    CHeading,
    CIcon,
    ItemFavorites
  },
  props: { isOpen: Boolean, close: Function }
}
</script>
