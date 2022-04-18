<template>
  <v-app>
    <v-main style="background-color: #F0F2F5">
    <appbar />
    
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/AppBar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    appbar,
    
  },
};
</script>
