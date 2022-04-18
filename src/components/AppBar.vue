<template>
  <div>
    <v-app-bar
      floating
      height="55"
      style="box-shadow: 2px 1.5px 1.5px 1px rgba(0, 0, 0, 0.1) !important"
      elevation="1"
      app
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          class="mr-3"
          gradient="to top left, rgba(100,115,201,.0), rgba(255,255,255,.2)"
          width="55"
          style="position: relative; right: 9px"
          src="../assets/face.png"
          contain
        />
      </div>

      <v-text-field
        solo
        dense
        class="ml-n5"
        style="width:240px"
        flat
        placeholder="Buscar en facebook"
        prepend-inner-icon="mdi-magnify"
        color="#65676b"
        hide-details
        rounded
        background-color="#f0f2f5"
      >
      </v-text-field>
    </v-app-bar>
    <NavigationDrawer />
  </div>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue";
export default {
  components: {
    NavigationDrawer,
  },
  data: () => ({
    mostrarNavigationDrawer: false,
    //
  }),
};
</script>

<style lang="scss" scoped>
</style>